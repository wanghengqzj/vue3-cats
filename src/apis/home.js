import httpInstance from "@/utils/http";

//封装获取banner
export function getBannerAPI() {
    return httpInstance({
        url:'/home/banner'
    })
}

/**
 * @description: 获取新鲜好物
 * @return {*}
 */
export const findNewAPI = () => {
    return httpInstance({
        url:'/home/new'
    })
}
