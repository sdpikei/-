// 在ajex发起请求前，此JQury方法拦截ajxe，将api接口添加url再发送至服务器
$.ajaxPrefilter(function (option) {
    option.url = 'http://www.liulongbin.top:3008' + option.url
    // 如果api里有my则需要添加heads头
    if (option.url.indexOf('/my/') !== 0) {
        option.headers = { Authorization: localStorage.getItem('token') || "" }
    }
    option.complete = function (res) {
        console.log(res);
        if (res.statusText !== 'OK') {
            localStorage.clear('token')
            // 强制跳转至登录页面
            window.location.href = "http://127.0.0.1:5500/%E5%A4%A7%E4%BA%8B%E4%BB%B6%E9%A1%B9%E7%9B%AE/login.html"
            window.parent.location.href = "http://127.0.0.1:5500/%E5%A4%A7%E4%BA%8B%E4%BB%B6%E9%A1%B9%E7%9B%AE/login.html"

            // 清空本地储存token

        }


    }
})