module.exports = (prefix, model, exclusion) => {
    // TODO improve errors management
    const routes = [
        {
            method: 'GET',
            path: prefix + '/{id}',
            options: {
                cors: true,
                tags: ['api'],
                description: 'Get an element by it\'s id',
            },
            handler: (request, h) => {
                return model.findOne({
                    _id: request.params.id
                }).then(object => object).catch(e => {
                    return {error: "There is a problem !"};
                });
            }
        },
        {
            method: 'GET',
            path: prefix,
            options: {
                cors: true,
                tags: ['api'],
                description: 'Get all elements',
            },
            handler: (request, h) => {
                return model.find().then(object => object).catch(e => {
                    return {error: "There is a problem !"};
                });
            }
        },
        {
            method: 'POST',
            path: prefix,
            options: {
                cors: true,
                tags: ['api'],
                description: 'Add a new element',
            },
            handler: (request, h) => {
                // TODO peut-être faire un mapping sauf d'une éventuelle propriétée id ou _id suivant le sgbd qui est derrière ?
                return request.payload.save().then(object => object).catch(e => {
                    return {error: "There is a problem !"};
                })
            }
        },
        /*{
            method: 'PUT',
            path: prefix + '/{id}',
            options: {
                cors: true,
                tags: ['api'],
                description: 'Update an element by id',
            },
            handler: (request, h) => {
                return Survey.findOne({
                    _id: request.params.id
                }).then(object => {
                    // TODO completer !
                    return object.save().then(object => object).catch(e => {
                        return {error: "There is a problem !"};
                    })
                }).catch(e => {
                    return {error: "There is a problem !"};
                });
            }
        },*/
        {
            method: 'DELETE',
            path: prefix + '/{id}',
            options: {
                cors: true,
                tags: ['api'],
                description: 'Delete an element by it\'s id',
            },
            handler: (request, h) => {
                return model.deleteOne({
                    _id: request.params.id
                }).then(object => object).catch(e => {
                    return {error: "There is a problem !"};
                });
            }
        }
    ]

    return routes;
}