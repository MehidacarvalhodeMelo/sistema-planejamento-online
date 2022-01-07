
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login')
const db = require('./config/database')
const firebase = require("./config/firabase")
const { signInWithCustomToken } = require('firebase/auth');
// const dbUser = process.env.DB_USER
// const dbPass = process.env.DB_PASS
// const dbName = 'planejamentoOnline'
// console.log(dbUser, dbPass, dbName)
// db(`mongodb://localhost/${dbName}?retryWrites=true&w=majority`)
db(process.env.DB_URL)
var app = express();

const cors = require('cors');
app.use(cors());


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/login', loginRouter)
app.use( async (req, res, next) => {
    const { jwt } = req.body
    try {
        const user = await signInWithCustomToken(jwt)  
        res.send(user)
    } catch (error) {
        return {
            message:"error true",
            error: error
        }
    }
    next()
}
)

app.use('/', indexRouter);
app.use('/api/users', usersRouter);

// Criação de uma nova rota
const teste = require('./routes/teste')
app.use('/api/teste', teste)


//Rota para curso1
const curso1 = require('./routes/curso1')
app.use('/api/curso1', curso1)

//Rota para mestre
const mestre = require('./routes/mestre')
app.use('/api/mestre', mestre)

//Rota para eixo
const eixo = require('./routes/eixo')
app.use('/api/eixo', eixo)

//Rota para atividade
const atividade = require('./routes/atividade')
app.use('/api/atividade', atividade)

//Rota para aluno
const aluno1 = require('./routes/aluno1')
app.use('/api/aluno1', aluno1)
//Rota para equipe

const equipe = require('./routes/equipe')
app.use('/api/equipe', equipe)

// Rota para sala-aula
const sala_aula1 = require('./routes/sala_aula1')
app.use('/api/sala-aula1', sala_aula1)



// Rota para atividade-eixo
const atividade_eixo = require('./routes/atividade_eixo')
app.use('/api/atividade-eixo', atividade_eixo)

// Rota para curso-eixo
const curso_eixo = require('./routes/curso_eixo')
app.use('/api/curso-eixo', curso_eixo)








// Rota para curso 
const curso = require('./routes/curso')
app.use('/api/curso', curso)

// Rota para professor
const professor = require('./routes/professor')
app.use('/api/professor', professor)

// Rota para sala-aula
const sala_aula = require('./routes/sala_aula')
app.use('/api/sala-aula', sala_aula)
//Rota para turma
const turma = require('./routes/turma')
app.use('/api/turma', turma)


//Rota para aluno
const aluno = require('./routes/aluno')
app.use('/api/aluno', aluno)

//Rota para calendario
const grade = require('./routes/grade')
app.use('/api/grade', grade)


//Rota para calendario
const calendario = require('./routes/calendario');

app.use('/api/calendario', calendario)

module.exports = app;
