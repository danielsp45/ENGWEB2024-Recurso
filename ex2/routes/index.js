var axios = require("axios");
var express = require("express");
var router = express.Router();

var endpoint = "http://localhost:17000/books";

/* GET livros page */
router.get("/", function(req, res, next) {
  axios.get(endpoint).then(function(response) {
    res.render("livrosShow", { llist: response.data });
  });
});

router.get('/authors/:idAutor', function (req, res) {
  axios.get(endpoint + "/books").then((response) => {
    let author = req.params.idAutor;
    let livros = response.data;
    let livrosAutor = livros.filter(livro => livro.author && livro.author.includes(author));
    res.render('authorsIndex', { author: author, livros: livrosAutor });
  }).catch((error) => {
    res.render('error', { error: error });
  });
});

/* GET livros page */
router.get("/:id", function(req, res, next) {
  axios
    .get(endpoint + "/" + req.params.id)
    .then(function(response) {
      console.log(response.data);
      res.render("livrosIndex", { livro: response.data });
    })
    .catch(function(error) {
      res.render("error", { error: error });
    });
});

module.exports = router;
