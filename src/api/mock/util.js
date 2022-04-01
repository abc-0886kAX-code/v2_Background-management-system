import { isNull, isUndefined } from 'lodash';

const responseBody = {
    message: '',
    timestamp: 0,
    data: null,
    code: 0
}

export const builder = (data, message, code = 0, headers = {}) => {
    responseBody.data = data;
    if (!isUndefined(message) && !isNull(message)) {
        responseBody.message = message
    }
    if (!isUndefined(code) && code !== 0) {
        responseBody.code = code;
        responseBody._status = code;
    }
    if (!isNull(headers) && typeof headers === 'object' && Object.keys(headers).length > 0) {
        responseBody._headers = headers;
    }
    responseBody.timestamp = new Date().getTime();

    return responseBody;
}


export const getBody = (options) => {
    return options.body && JSON.parse(options.body);
}


