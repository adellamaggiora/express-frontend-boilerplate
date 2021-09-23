const express = require('express')
const path = require('path')
const app = express()

const PORT = 80
const FOLDER_PATH = `${__dirname}\\public`


app.use(express.static('public'));
app.route('/*').get(function(req, res) { 
    return res.sendFile(path.join(FOLDER_PATH, 'index.html')); 
});



app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));