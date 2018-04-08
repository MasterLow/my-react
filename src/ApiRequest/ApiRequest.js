const xmlNative = (opt={async:true}) => {
    opt = opt || {};
    opt.method = opt.method.toUpperCase() || 'POST';
    opt.url = "http://192.168.1.55:81/"+opt.url || '';
    opt.async = opt.async;            //默认异步true，可改同步false
    opt.data = opt.data || null;
    opt.success = opt.success || function () {
    };
    console.log(opt.async);
    let xmlHttp = new XMLHttpRequest();
    if (opt.method.toUpperCase() === 'POST') {
        xmlHttp.open(opt.method, opt.url, opt.async);
        xmlHttp.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        xmlHttp.send(JSON.stringify(opt.data));
    }
else if (opt.method.toUpperCase() === 'GET') {
let params = [];
        for (let key in opt.data) {
            params.push(key + '=' + opt.data[key]);
        }
let postData = params.join('&');
        xmlHttp.open(opt.method, opt.url + '?' + postData, opt.async);
        xmlHttp.send(null);
    }
    xmlHttp.onreadystatechange = () => {
if (xmlHttp.readyState === 4) {
if (xmlHttp.status === 200) {
                opt.success(JSON.parse(xmlHttp.responseText), xmlHttp.status);
            } else {
                opt.error(JSON.parse(xmlHttp.responseText), xmlHttp.stats);
            }
        }
    };
};
const ajax = (url, method, data, async, successCB, errorCB) => {
let dataJson = {
        version: "1.0.0", //版本号
        data: data
    };
    return xmlNative({
method: method,
        url: url,
        async: async,
        data: dataJson,
        success: (data, status) => {
if (data.code === 0) {
                successCB && successCB(data, status)
            } else {
if (errorCB) {
                    errorCB(data, status)
                } else {
console.log(data, status);
                }
            }
        },
        error: (data, status) => {
console.log(status, status)
        }
    });
};
const apiRequest = {       //注意data:{A;'',B''};格式
    get: (url, data, async,successCB, errorCB) => {
return ajax(url, "get", data, async,
            (data, status, xhr) => successCB && successCB(data.data, data.systemDate),
            errorCB);
    },
    post: (url, data, async,successCB, errorCB) => {
return ajax(url, "post", data, async,
            (data, status, xhr) => successCB && successCB(data.data, data.systemDate),
            errorCB);
    }
};
export default apiRequest;