import request from '@/utils/request'
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
