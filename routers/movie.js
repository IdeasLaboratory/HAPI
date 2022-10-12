const movieControllers = require('../controllers/movie');

module.exports = [
    {
        method: 'GET',
        path: '/movie',
        options: {
            cors: true,
            tags: ['api'],
            description: 'Get all movies stored in db with limit (for paging or lazy loading) + filters availables'
        },
        handler: (request, h) => {
            return movieControllers.getAllMovies(request, h)
        }
    },
    {
        method: 'GET',
        path: '/movie/{id}',
        options: {
            cors: true,
            tags: ['api'],
            description: 'Get a movie by id',
        },
        handler: (request, h) => {
            return movieControllers.getMovieById(request, h)
        }
    }
]