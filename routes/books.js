const router = require('express').Router();
import ('../models/BookDB')

router.route("/api/v1/book")
    .get((req, res) => {
        Book.find()
            .then((books) => res.json(books))
            .catch((err) => res.status(400).json("Error: " + err));
    });

router.route("/api/v1/book:id")
    .get((req, res) => {
        Book.findById(req.params.id)
            .then((book) => res.json(book))
            .catch((err) => res.status(400).json("Error: " + err));
    });

router.route("/api/v1/book")
    .post((req, res) => {
        const title = req.body.title;
        const author = req.body.author;
        const description = req.body.description;
        // create a new Book object 
        const newBook = new Book({
            title,
            author,
            description
        });

        // console.log("checkpoint");

        // save the new object (newBook)
        newBook
            .save()
            .then(() => res.json("Book added!"))
            .catch((err) => res.status(400).json("Error: " + err));
    });

router.route("/api/v1/book:id")
    .put((req, res) => {
        Book.findById(req.params.id)
            .then((book) => {
                book.title = req.body.title;
                book.author = req.body.author;
                book.description = req.body.description;
                
                book
                    .save()
                    .then(() => res.json("Book updated!"))
                    .catch((err) => res.status(400).json("Error: " + err));
            })
            .catch((err) => res.status(400).json("Error: " + err));
    });

router.route("/api/v1/book:id")
    .delete((req, res) => {
        Book.findByIdAndDelete(req.params.id)
            .then(() => res.json("Book deleted."))
            .catch((err) => res.status(400).json("Error: " + err));
    });

    export default router;