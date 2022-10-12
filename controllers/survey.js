const surveyServices = require('../services/survey');

module.exports = {
    getSurveyByIdAndUser: async (request, h) => {
        let ret = await surveyServices.getSurveyByIdAndUser(request.params.id, request.params.user);
        if(Object.keys(ret).length)
            return h.response(ret);
        else
            return h.response({});
    },
    getSurveyById: async (request, h) => {
        let ret = await surveyServices.getSurveyById(request.params.id);
        if(Object.keys(ret).length)
            return h.response(ret);
        else
            return h.response({});
    },
    saveSurveyByIdAndUser: async (request, h) => {
        // TODO control the payload
        let ret = await surveyServices.saveSurveyByIdAndUser(request.params.id, request.params.user, request.payload)
        if(ret)
            return h.response({message: "modification done"});
        else
            return h.response({error: "no modification done"}).code(403);
    }
}