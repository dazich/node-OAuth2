// 定义接口返回格式
function extendAPIOutput (req, res, next) {
    res.apiSuccess = function (data) {
        res.json({
            status: 'OK',
            result: data
        })
    }

    res.apiError = function (err) {
        res.json({
            status: 'Error',
            error_code: err.error_code || -1,
            error_message: err.error_message || err.toString()
        })
    }

    next();
}
module.exports = extendAPIOutput;