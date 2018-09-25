

exports.createApiError = function (code, msg) {
    const err = new Error(msg);
    err.error_code = code;
    err.error_message = msg;
    return err;
}

