const { logEvents } = require('./logger-middleware');

const errorHandler = (err, req, res, next) => {
    logEvents(`${err.name}:${err.message}`, 'errLog.txt');
    console.log(err.stack)
    res.status(500).send(err.message);
}
module.export = errorHandler;