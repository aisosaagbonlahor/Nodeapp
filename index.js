const genres = [{
    id: 1, genre: "Horror"},
    {id: 2, genre: "Romance"},
    {id: 3, genre: "Comedy"}]

const express = require('express')
const app = express();
app.use(express.json());

app.get('/api/genres', (req, res) => {
    res.send(genres)
});

app.get('/api/genres/:id', (req,res) => {
     const genre = genres.find(g => g.id === parseInt(req.params.id))
     if(!genre) res.status(404).send(`genre with the id ${req.params.id} not found`);
        return res.send(genre)
});

app.post('/api/genres', (req,res) => {
    const genre = {
        id: genres.length + 1,
        genre: req.body.genre
    };
    genres.push(genre);
    res.send(genre)
});

app.put('/api/genres/:id', (req, res) => {
    const genre = genres.find(g => g.id === parseInt(req.params.id))
    if(!genre) res.status(404).send(`genre with the id ${req.params.id} not found`);
    genre.genre = req.body.genre
    res.send(genre)
})

app.delete('/api/genres/:id', (req, res) => {
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if (!genre) res.status(404).send(`genre with the id ${req.params.id} not found`);
    const index = genres.indexOf(genre);
    genres.splice(index, 1);
    res.send(genres)
})

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening for port ${port}`));
