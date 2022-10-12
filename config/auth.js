// TODO : ckeck the security conf
module.exports = {
    keys: 'some_shared_secret',
    verify: {
        aud: 'urn:audience:test',
        iss: 'urn:issuer:test',
        sub: false,
        nbf: true,
        exp: true,
        maxAgeSec: 14400, // 4 hours
        timeSkewSec: 15
    },
    // TODO : Does the validate function is useful ?
    validate: (artifacts) => {
        return {
            isValid: true,
            credentials: { user: artifacts.decoded.payload.user }
        };
    }
};
