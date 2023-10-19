
import { Router } from 'express';
import nodemailer from 'nodemailer';
const server = Router();

const numeroAleatorio = Math.floor(Math.random() * 900000) + 100000;
const numeroAleatorioString = numeroAleatorio.toString();




  
const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'jonatasprado445@gmail.com',
        //senha  criptografada
        pass: 'umix jwmf qxsn cexz',
    }
});

server.post('/enviar/email', (req, resp) => {
    const { email} = req.body;
    try{
       let codigoGerado = numeroAleatorioString
    
        transport.sendMail({
            from: 'Jonatas <jonatasprado445@gmail.com>',
            to: email,
            subject: 'testando email com nodemailer',
            html: '',
            text: `Codigo teste ${codigoGerado}`
        })
        resp.send('Email enviado com Sucesso')

    }catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
});

// Rota para validar o código inserido pelo usuário
server.post('/validar/email', (req, resp) => {
    const { codigoUsuario } = req.body;
    
    if (codigoUsuario === numeroAleatorioString) {
        resp.send('Código válido. Email confirmado.');
    } else {
        resp.status(400).send('Código inválido. Email não confirmado.');
    }
});





export default server;
