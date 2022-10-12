const surveyControllers = require('../controllers/survey');

module.exports = [
    {
        method: 'GET',
        path: '/survey/{id}/{user}',
        options: {
            cors: true,
            tags: ['api'],
            description: 'Get a survey by id and user code',
        },
        handler: (request, h) => {
            return surveyControllers.getSurveyByIdAndUser(request, h)
        }
    },
    {
        method: 'GET',
        path: '/survey/{id}',
        options: {
            cors: true,
            tags: ['api'],
            description: 'Get a survey by id',
        },
        handler: (request, h) => {
            return surveyControllers.getSurveyById(request, h)
        }
    },
    {
        method: 'PUT',
        path: '/survey/{id}/{user}',
        options: {
            cors: true,
            tags: ['api'],
            description: 'Update a survey by id and user code',
        },
        handler: (request, h) => {
            return surveyControllers.saveSurveyByIdAndUser(request, h)
        }
    }
]