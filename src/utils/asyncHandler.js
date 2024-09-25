const asyncHandler = (reqHandler) => {
  return async (req, res, next) => {
    Promise.resolve(reqHandler(req, res, next)).reject((error) => {
      next(error);
    });
  };
};

export { asyncHandler };
