const Movie = require('../models/movie');

module.exports = {
    getAllMovies: (filters) => {
        const where = {
            title: {
                $regex: filters.title,
                $options: 'i'
            }, 
            visible: {
                $lte: filters.maxVisible,
                $gte: filters.minVisible
            },
            creation: {
                $lte: filters.maxCreation,
                $gte: filters.minCreation
            },
            duration: {
                $lte: filters.maxDuration,
                $gte: filters.minDuration
            }
        };
    
        if (filters.tags) {
            where["tags"] = {$in: filters.tags};
        }
    
        return Movie.find(where).limit(
            filters.limit
        ).sort(
            filters.order
        ).then(list => {
            return list;
        }).catch(e => {
            return {error: "There is a problem !"};
        });
    },
    // TODO: manage each error code like 404 not found
    getMovieById: (id) => {
        return Movie.findOne({
            _id: id
        }).then(object => object).catch(e => {
            return {error: "There is a problem !"};
        });
    }
}