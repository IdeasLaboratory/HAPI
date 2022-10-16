const topControllers = require('../controllers/top');

module.exports = [
    {
        method: 'GET',
        path: '/top',
        options: {
            cors: true,
            tags: ['api'],
            description: 'Get all top stored in db with limit (for paging or lazy loading) + filters availables'
        },
        handler: (request, h) => {
            return topControllers.getAllTop(request, h)
        }
    }
]