const Survey = require('../models/survey');

module.exports = {
    getSurveyByIdAndUser: (id, user) => {
        return Survey.findOne({
            _id: id,
            "tokens.token": user
        }).select('-_id -tokens').then(object => object).catch(e => {
            return {error: "There is a problem !"};
        });
    },
    getSurveyById: (id) => {
        return Survey.findOne({
            _id: id
        }).then(object => object).catch(e => {
            return {error: "There is a problem !"};
        });
    },
    saveSurveyByIdAndUser: (id, user, answers) => {
        return Survey.findOne({
            _id: id,
            "tokens.token": user
        }).then(object => {
            object.tokens.forEach(token => {
                if (token.token === user) {
                    token.answers = answers
                    object.markModified('tokens')
                }
            })
            return object.save().then(object => object).catch(e => {
                return {error: "There is a problem !"};
            })
        }).catch(e => {
            return {error: "There is a problem !"};
        });
    }
}