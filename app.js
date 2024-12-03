console.log("ciao");
import express from "express";
const app = express();
const port =3002;


app.use(express.static("public"));


import routersPost from "./roters/post.js";

app.use('/posts', routersPost);




app.get('/', (req, res) => {
    res.send("hello world")
});


app.listen(port, () => {
    console.log("server attivo")
})