import { posts } from "../data/ricettePosts.js";
import { postList } from "../data/nosensePosts.js";



export function index(request, response) {
    response.json(posts);
}

export function show(request, response) {
    const id = Number(request.params.id);
    const obj = posts.find(post => post.id === id);
    response.json(obj);
}

export function store(request, response) {
    response.json('richiesta di aggiungere un post');
}

export function update(request, response) {
    const id = Number(request.params.id);
    response.json(`richiesta per aggiornare il post con l'id:${id}`);
}

export function modify(request, response) {
    const id = Number(request.params.id);
    response.json(`richiesta di modificare parti del post con l'id:${id}`);
}

export function destroy(request, response) {
    const id = Number(request.params.id);
    response.json(`richiesta per rimuovere il post con l'id:${id}`);
}