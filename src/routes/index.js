const { Router } = require('express'); //Requiero el método Router desde express
const router = Router(); //Ejecución de router 

const movies = require('../utils/sample.json');
const _ = require('underscore');

router.get('/movies', (req,res) =>{
    res.json(movies);
});

router.post('/movies', (req,res) =>{
    // console.log(req.body);

    const {title, director, year, rating} = req.body; //Asignación de att del body a variables individuales

    if(title, director, year, rating) { 
        // res.send('Saved');
        const id = movies.length +1; 
        const newMovie = {...req.body, id}; //Asignación de body a una variable única.
        movies.push(newMovie);
        res.json(movies);
    } else {
        res.status(500).json('Wrong request');
    }

});

router.delete('/movies/:id', (req,res) =>{

    const {id} = req.params;
    _.each(movies, (movie, index) =>{
        if(movie.id == id){
            movies.splice(index, 1);
        }
    });

    res.json(movies);
});

router.put('/movies/:id', (req,res) =>{

    const {id} = req.params;
    const {title, director, year, rating} = req.body; //Asignación de att del body a variables individuales

    if(title, director, year, rating){

        _.each(movies, (movie, index) =>{
            if(movie.id == id){
                movie.title     = title;
                movie.director  = director;
                movie.year      = year;
                movie.rating    = rating;
            }
        });

        res.json(movies);

    }else{
        res.status(500).json('Wrong request');
    }

});

module.exports = router;