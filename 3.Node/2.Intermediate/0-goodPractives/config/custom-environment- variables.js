module.exports = {
    server: {
        port: 80,
        domain: 'PORT',
    },
    redis: {
        // redis
    },
    email: {
        provider: 'sendgrid',
        user: 'X',
        password: 'Y',
    },

    logger: ':method :url :status :res[content-length] :response-time ms',
    mongodb: {
        port: 27017,
        host: 'localhost',
    },
}