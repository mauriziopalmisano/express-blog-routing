import express, { request, response } from 'express'
import {htmlEmail, SERVER_PORT, SERVER_URL} from './data/nosensePosts.js'
import post from './routers/posts.js';
import { mailSender } from './utils/mailsender.js';
import { listaMail } from './mails.js';



const app = express();

app.use('/posts', post);


app.get('/send-mail', (request, response) => {
    mailSender(
        listaMail,
        "prova d'invio mail",
        htmlEmail
    ).then(mailData => {
        console.log(mailData);
        response.json({
            report: 'mail inviata con successo'
        });
    });
});






app.listen(SERVER_PORT, (error) =>{
    if(error){
        console.log(`Errore: ${error}`);
    }
    console.log(`Il server é avviato sulla porta ${SERVER_PORT}`);
})