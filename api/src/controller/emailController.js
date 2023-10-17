
import { Router } from 'express';
import nodemailer from 'nodemailer';
const server = Router();




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
    const { email } = req.body;
    try{
        transport.sendMail({
            from: 'Jonatas <jonatasprado445@gmail.com>',
            to: email,
            subject: 'testando email com nodemailer',
            html: '<h1>EU VOU HACKEAR A NASA</h1>',
            text: 'Ola, sou jonatas2'
        })
        resp.send('Email enviado com Sucesso')

    }catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }

    
    
});

export default server;
