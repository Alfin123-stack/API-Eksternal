const errorHandler = (err, req, res, next) => {
  const statusCode = err.status || err.statusCode || 500;
  const isProduction = process.env.NODE_ENV === "production";

  // Log error (bisa diganti Winston nanti)
  console.error({
    message: err.message,
    statusCode,
    path: req.originalUrl,
    method: req.method,
  });

  res.status(statusCode).json({
    status: "error",
    message:
      statusCode === 500 && isProduction
        ? "Internal Server Error"
        : err.message || "Internal Server Error",
    ...(isProduction
      ? {}
      : {
          stack: err.stack,
        }),
  });
};

export default errorHandler;
