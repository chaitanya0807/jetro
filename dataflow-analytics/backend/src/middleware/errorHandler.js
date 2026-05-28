function errorHandler(err, req, res, next) {
  console.error(`[Error] ${err.name}: ${err.message}`);
  
  const statusCode = err.statusCode || 500;
  const response = {
    error: {
      message: err.message || 'Internal Server Error',
      status: statusCode,
    }
  };

  // Include stack trace in non-production environments
  if (process.env.NODE_ENV !== 'production') {
    response.error.stack = err.stack;
  }

  res.status(statusCode).json(response);
}

module.exports = errorHandler;
