const express = require('express');
const path = require('path');

let initial_path = path.join(__dirname, "public");

let app = express();
app.use(express.static(initial_path));

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "index.html"));
})

app.get('/:id', (req, res) => {
    res.sendFile(path.join(initial_path, "about.html"));
})

let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('listening on port 3000......');
})

app.use((req, res) => {
    res.json("404");
})