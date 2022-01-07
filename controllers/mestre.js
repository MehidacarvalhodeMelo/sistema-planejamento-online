/*

    QUATRO OPERAÇÕES BÁSICAS SOBRE DADOS

    1) CREATE (criação ou inserção)
        Cria um novo objeto dentro da coleção

    2) RETRIEVE (recuperação ou listagem)
        Permite recuperar os objetos a partir do BD

    3) UPDATE (atualização)
        Altera os dados de um objeto que JÁ EXISTE no BD

    4) DELETE (exclusão)
        Elimina um objeto do BD

    (C)reate + (R)etrieve + (U)pdate + (D)elete = CRUD

    VERBOS HTTP ASSOCIADOS ÀS OPERAÇÕES CRUD

    Verbo       Operação
    POST        Create
    GET         Retrieve
    PUT         Update
    DELETE      Delete

*/

// Importar o model para dentro do controller
const admin = require("firebase-admin");
const serviceAccount = require("../escola-1fc41-firebase-adminsdk-ib6ed-1492878054.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://escola-1fc41-default-rtdb.firebaseio.com"
});
const Mestre = require('../models/Mestre')
const firebase = require("../config/firabase")
const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updatePassword } = require('firebase/auth')
const controller = {}       // Objeto vazio
const auth = getAuth()
const uid = "some-uid"
// Método novo(), implementando a operação CREATE

controller.logout = async (req, res) => {
    try {
       await signOut(auth)
       return res.status(200).send("Usuário deslogado")
    } catch (erro) {
        console.error(erro)
        res.status(500).send(erro)
    }
}

controller.login = async (req, res) => {
    try {
        const mestre = await signInWithEmailAndPassword(auth, req.body.email, req.body.password)  
        const user = await Mestre.find({ email:req.body.email }).exec()
        const newToken = await admin.auth().createCustomToken(uid)
        return res.status(200).send({
            Message: "Usuário logado",
            professor: user[0].professor,
            jwt: newToken
        })
    } catch (erro) {
        console.error(erro)
        res.status(500).send(erro)
    }
}

controller.novo = async (req, res) => {
    try {
        const userFirebase = await createUserWithEmailAndPassword(auth, req.body.email, req.body.password)
        // Envia os dados dentro de req.body para o BD para criação
        var userBody = req.body
        await Mestre.create(userBody)
        // HTTP 201: Created
        res.status(201).end()
    }
    catch (erro) {
        console.error(erro)
        // HTTP 500: Internal Server Error
        res.status(500).send(erro)
    }
}

// Método listar(), implementando a operação RETRIEVE (all)
controller.listar = async (req, res) => {
    try {
        // find() sem parâmetros é para trazer tudo
        let dados = await Mestre.find()
        res.send(dados) // Vai com status 200: OK
    }
    catch (erro) {
        console.error(erro)
        res.status(500).send(erro)
    }
}

// Método obterUm(), implementando a operação RETRIEVE (one)
controller.obterUm = async (req, res) => {
    const id = req.params.id    // Capturando o parâmetro id
    let obj = await Mestre.findById(id)

    // Se o objeto vier preenchido (achou), então o retornamos
    if (obj) res.send(obj)
    // Senão (objeto vazio), enviamos o status HTTP 404: Not found
    else res.status(404).end()
}

// Método atualizar(), implementando a operação UPDATE
controller.atualizar = async (req, res) => {
    try {
        // Isolar o _id do objeto para fins de busca
        const id = req.body._id
        // Busca o objeto pelo id e, encontrando-o, substitui o conteúdo por req.body
        let obj = await Mestre.findByIdAndUpdate(id, req.body)

        // Se encontrou e substituiu, retornamos HTTP 204: No content
        if (obj) res.status(204).end()
        // Caso contrário, retorna HTTP 404: Not found
        else res.status(404).end()
    }
    catch (erro) {
        console.error(erro)
        res.status(500).end()
    }
}

// Método excluir(), implementando a operação DELETE
controller.excluir = async (req, res) => {
    try {
        // Isolando o id para exclusão
        const id = req.params.id
        let obj = await Mestre.findByIdAndDelete(id)

        // Encontrou e excluiu
        if(obj) res.status(204).end()
        // Objeto não foi encontrado para exclusão
        else res.status(404).end()
    }
    catch(erro) {
        console.error(erro)
        res.status(500).send(erro)
    }



    controller.atualizarSenha = async (req, res) => {
        const user = auth.currentUser
        const { email, oldPassword, newPassword } = req.body
        try {
            await signInWithEmailAndPassword(auth, email, oldPassword)
        } catch (error) {
            return error
        }
        try {
            const editPassword = await updatePassword(user, newPassword)
            res.status(200).send(editPassword)
        } catch (error) {
            return error   
        }

    }



}

module.exports = controller