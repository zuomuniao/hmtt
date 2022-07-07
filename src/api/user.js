import request from '@/utils/request'
// 只有在vue组件文件中才能用this.$store 在js中没有这个this 所以只能
import store from '@/store'

/**
 * 获取短信验证码
 * @param {number} mobile
 * @returns promise
 */
export const getSmsCode = (mobile) => {
  return request({
    url: `/sms/codes/${mobile}`
  })
}

/**
 * 登录
 * @param {mobile,code} param0
 * @return promise
 */
export const login = ({ mobile, code }) => {
  return request({
    method: 'POST',
    url: '/authorizations',
    data: {
      mobile,
      code
    }
  })
}

/**
 * 获取用户个人资料 windows + v
 * @returns
 */
export const getUserInfo = () => {
  return request({
    url: 'user',
    headers: {
      Authorization: 'Bearer ' + store.state.user.token
    }
  })
}

// export const 接口名 = () => {
//   return request({
//     url,
//     method,
//     headers,
//     data,
//     params
//   })
// }

// function fn (obj) {
//   console.log(obj.a)
//   console.log(obj.b)
// }

// fn({ a: 2, b: 3 })

// function fn ({ a, b }) {
//   console.log(a)
//   console.log(b)
// }
// fn({ a: 2, b: 3 })

// 拦截器：一堆的ajax都要写的就可以提取到拦截器里面

/**
 * 刷新token
 * @param {String} refreshToken - 保存的refresh_token
 * @returns
 */

/**
 *
 * @returns 用户个人资料
 */
export const getUserProfile = () => {
  return request({
    url: 'user/profile'
  })
}

// 获取 get
// 添加 post
// 删除 delete
// 修改 put(完全覆盖) patch(部分替换)
// get,delete -> params
// put,patch,post -> data

/**
 *
 * @param {对象 用户个人资料} profile
 * @returns 更新用户个人资料
 */
export const updateUserProfile = profile => {
  return request({
    method: 'PATCH',
    url: 'user/profile',
    data: profile
  })
}

/**
 * 更新头像
 * @param {裁剪之后的头像数据} data
 */
export const updateAvatar = data => {
  return request({
    method: 'PATCH',
    url: 'user/photo',
    data
  })
}
