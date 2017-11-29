"use strict";

var model = require('../models/model');

class BookController{
    constructor(book, category){
        console.log(book, category)
        this.categoryModel = category;
        this.bookModel = book;
    }

    index(){
        return new Promise((reslove, reject) => {
            this.bookModel.find({
            //    include:{
            //        model : this.category
            //    }
            }).then(data => {
                reslove(data);
        }).catch(err => {
            reject(err);
        });
        });
    }

    test(){
        return 'test';
    }
}

var bookController = new BookController(model.book, model.category);

module.exports =  bookController;
