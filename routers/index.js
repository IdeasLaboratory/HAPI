const movie = require('./movie');
const serie = require('./serie');
const survey = require('./survey');
const cinema = require('./cinema');

const general = [
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return h.response('Resquest Not Found!').code(404);
        }
    },
    {
        method: 'GET',
        path: '/test',
        handler: (request, h) => {
            return h.response('Test réussi').code(200);
        }
    },
];

module.exports = general.concat(movie, serie, survey, cinema);
