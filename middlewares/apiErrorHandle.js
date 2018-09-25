

function apiErrorHanle (err, req, res, next) {
    if (typeof res.apiError === 'function') {
        return res.apiError(err);
    }

    next();
}

module.exports = apiErrorHanle;