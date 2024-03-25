
const ErrorHandler = (err, req, res, next) => {
    console.error(err.message, err.stack);
    const errStatus = err.statusCode || 500;
    const errMsg = err.message || err.msg || 'Something went wrong';
    res.status(errStatus).json({
        success: false,
        status: errStatus,
        message: errMsg,
        stack: process.env.NODE_ENV === 'development' ? err.stack : {}
    })
}

module.exports = ErrorHandler;