const logger = (message) => console.log(message)

function loggerDecorator(logger) {
    return function(message) {
        logger.call(this, message)
        console.log("message logged at:", new Date().toLocaleString())
    }
}
//We have decorated the logger function by using the loggerDecorator function.
// The returned function — now stored in the decoratedLogger variable —
//  does not modify the logger function.Instead, the returned function decorates
// it with the ability to print the time a message is logged.
const decoratedLogger = loggerDecorator(logger);