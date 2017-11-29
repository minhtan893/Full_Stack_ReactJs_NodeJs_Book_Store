var express = require('express');
var router = express.Router();
var BookController = require('../controllers/BookController');

router.get('/get', function(req, res){
    book.findAll({}).then(function (book) {
        res.json(book);
    });
});

router.get('/get/:id', function(req, res){
    console.log(req.params.id);
});

router.get('/init', function(req, res){
    BookController.index().then(data =>{
        res.json(data);
    });
});

module.exports = router;