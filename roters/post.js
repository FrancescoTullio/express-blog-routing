import postBlog from "../models/posts.js";
import express from "express"

const routersPost = express();


routersPost.get('/', (req, res) => {
    res.json({
        data: postBlog,
        count: postBlog.length
    });
});


routersPost.get('/:id', (req, res) => {
    const curId = req.params.id;
    res.json("questo è l'oggetto con indice " + curId)
});


routersPost.post('/', (req, res) => {
    res.json("sto creando un nuovo post")
})

routersPost.put('/:id', (req, res) => {
    const curId = req.params.id;
    res.json("sovrascrivo un elemento con id " + curId)
})

routersPost.patch('/:id', (req, res) => {
    const curId = req.params.id;
    res.json("sto cambiando un parametro di un elemento con id " + curId)
})

routersPost.delete('/:id', (req, res) => {
    const curId = req.params.id;
    res.json("sto eliminando l'elemento con id " + curId)
})


export default routersPost;