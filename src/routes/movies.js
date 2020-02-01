const { Router } = require('express')
const router = Router()
const _ = require('underscore') // nos ayuda a recorrer arrays

const movies = require('../sample.json')

//get
router.get('/', (req, res) => {
     res.send(movies)
})

// post
router.post('/', (req, res) => {
     const { name, year } = req.body

     if (name && year){
         const id = movies.length + 1
         const newMovie = {...req.body, id}
         movies.push(newMovie)
         res.json(movies)
     } else {
         res.send('Peticion erronea')
     }
})

router.put('/:id', (req, res) => {
   const { id } = req.params
   const { name, year } = req.body
   if(name && year) {
       _.each(movies, (movie, i) => {
           if (movie.id == id) {
               movie.name = name
               movie.year = year
           }
       })
       res.json(movies)
   } else {
       res.status(500).send('Error')
   }
})


router.delete('/:id', (req, res) => {
     const { id } = req.params
     _.each(movies, (movie, i) => {
         if(movie.id == id) {
             movies.splice(i, 1)
         }
     })
     res.send(movies)
})


module.exports = router