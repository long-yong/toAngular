
const express = require('express');

const app = express();

app.use(express.static( __dirname + '/public/dist/public'));

app.listen(8000, (errs)=>errs?console.log(errs):console.log('listening on 8000'));

