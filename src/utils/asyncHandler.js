const asyncHandler = (requesthendler) => {
    return (req, res, next) => {
        Promise.resolve(requesthendler(req, res, next)).catch((err) => next(err))
    }

}

export { asyncHandler }