// Centralized error handling middleware
const errorHandler = (err, req, res, next) => {
   console.error(err.stack);
   res.status(500).json({ message: 'Something went wrong!', status: 'error' });
};

export default errorHandler;