import axios from "axios"
//服务器域名
const baseURL = "https://kkbhoutai.herentongkang.com"
//请求token
const token = "a28bb515-cafb-4465-b2f0-a3fe91fadffa"
//响应拦截器
axios.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        return error
    }
)

//请求拦截器
axios.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)
//请求头
const headers = {
    'Content-Type':'application/json',
    'token':token,
    'request-ajax':true
}

//请求
const request = (query) => {
    return axios.request(query).then(res => {
        return Code(res)
    }).catch((e) => {
        return Promise.reject(e)
    })
}

//code验证
const Code = (res) => {
    switch (res.data.code) {
        case 1:
        case 200:
            //请求成功
            break;
        case 302:
            //接口重定向了！
            break;
        case 400:
            // 发出的请求有错误，服务器没有进行新建或修改数据的操作
            break;
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。                
        case 401: //重定向
            // token:登录失效
            break;
        // 403 token过期
        // 清除token并跳转登录页
        case 403:
            //登录过期,用户得到授权，但是访问是被禁止的
            break;
        case 404:
            //网络请求不存在
            break;
        case 406:
            //请求的格式不可得
            break;
        case 408:
            // 请求超时！")
            break;
        case 410:
            //请求的资源被永久删除，且不会再得到的
            break;
        case 422:
            //当创建一个对象时，发生一个验证错误
            break;
        case 500:
            //服务器发生错误，请检查服务器
            break;
        case 502:
            //网关错误
            break;
        case 503:
            //服务不可用，服务器暂时过载或维护
            break;
        case 504:
            //网关超时
            break;
        default:
            //其他错误错误
    }
    return Promise.resolve(res.data)
}

//请求方式
export const post = (url,param={})=>{
    console.log(url)
    const query = {
        url:baseURL+url,
        method:"post",
        data:param,
        withCredentials:true,//跨域允许携带tookie
        timeout:30000,
        headers:headers
    }
    return request(query)
}
//请求方式
export const get = (url,param={})=>{
    const query = {
        url:baseURL+url,
        method:"get",
        data:param,
        withCredentials:true,//跨域允许携带tookie
        timeout:30000,
        headers:headers
    }
    return request(query)
}
 