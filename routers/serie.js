const Series = require('../models/series');

module.exports = [
    {
        method: 'GET',
        path: '/series',
        options: {
            cors: true,
            tags: ['api'],
            description: 'Get all series stored in db with limit (for paging or lazy loading) + filters availables'
        },
        handler: (request, h) => {
            // Filters
            const byTitle = request.query.byTitle || '';
            const withLimit = parseInt(request.query.withLimit) || 0;
            // const byCreation = request.query.byCreation || '';

            const today = new Date();

            return Series.find({
                title: {
                    $regex: byTitle,
                    $options: 'i'
                }, 
                visible: {
                    $lt: today
                }
            }).limit(withLimit).then(list => {
                return h.response(list);
            }).catch(e => {
                console.log(e);
                return h.response("There is a problem !");
            });
        }
    },
    {
        method: 'GET',
        path: '/series/{id}',
        options: {
            cors: true,
            tags: ['api'],
            description: 'Get a series by id',
        },
        handler: (request, h) => {
            Series.findOne({_id: request.params.id}).then(object => {
                res.status(200).json(object);
            }).catch(e => {
                console.log(e);
                res.status(500).end("There is a problem !");
            });
        }
    }
]