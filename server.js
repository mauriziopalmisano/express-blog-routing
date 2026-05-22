import express from 'express'
import {SERVER_PORT, SERVER_URL} from './data/nosensePosts.js'
import post from './routers/posts.js';



const app = express();

app.use('/posts', post);









app.listen(SERVER_PORT, (error) =>{
    if(error){
        console.log(`Errore: ${error}`);
    }
    console.log(`Il server é avviato sulla porta ${SERVER_PORT}`);
})