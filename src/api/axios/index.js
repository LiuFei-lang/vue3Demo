import {post} from "./request"

    // 请求名:param=>请求方式('url',param)
export const getUser= ()=>post("/api/api011/user/index")
