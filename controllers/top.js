const movieServices = require('../services/movie');

module.exports = {
    getAllTop: async (request, h) => {
        const today = new Date();
    
        // TODO: automate tests for filters
        const filters = {
            title: request.query.title || '',
            maxCreation: parseInt(request.query.maxCreation) || today,
            minCreation: parseInt(request.query.minCreation) || 0,
            maxVisible: new Date(request.query.maxVisible ? request.query.maxVisible + 'T00:00:00.000Z' : today.toISOString()),
            minVisible: new Date(request.query.minVisible ? request.query.minVisible + 'T00:00:00.000Z' : 0),
            tags: ['Top'],
            maxDuration: parseInt(request.query.maxDuration) || 5000,
            minDuration: parseInt(request.query.minDuration) || 0,
            order: [['visible', -1]],
            limit: 10
        }
    
        let ret = await movieServices.getAllMovies(filters);
    
        // TODO: check the logic below
        if(Object.keys(ret).length)
            return h.response(ret);
        else
            return h.response([]);
    }
}