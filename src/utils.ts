const urlPrefix = '/api'

const createXHR = (url: string, method: string, data: any, sussCallback?: any, failCallback?: any, complete?: any) => {
    const xhr = new XMLHttpRequest()
    let formData
    if (method === 'POST') {
        formData = new FormData()
        for (let key in data) {
            formData.append(key, data[key])
        }
    }
    let urlData = ""
    if (method === 'GET') {
        urlData = '?'
        for (let key in data) {
            urlData += `${key}=${data[key]}&`
        }
        urlData = urlData.slice(0, -1)
    }
    xhr.timeout = 15 * 1000
    xhr.onerror = function (e) {
        failCallback && failCallback('error')
    }
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState == 4) {
            complete && complete()
            if (xhr.status == 200) {
                const message = JSON.parse(xhr.responseText)
                sussCallback && sussCallback(message)
            }
        }
    }
    xhr.open(method, urlPrefix + url + urlData, true)
    xhr.setRequestHeader('version', 'v1.0.0');
    method === 'POST' ? xhr.send(formData) : xhr.send()
    return xhr
}

export { createXHR }