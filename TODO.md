1. 无感刷新

```js
//user.js
import axios from 'axios'

export const refreshTokenAPI = (refreshToken) => {
  return axios({
    baseURL: 'http://toutiao.itheima.net/v1_0',
    url: 'authorizations',
    method: 'put',
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  })
}
```

```js
import { refreshTokenAPI } from '@/api/user'
if (error.response && error.response.status === 401) {
  try {
    const res = await refreshTokenAPI(store.state.user.refresh_token)
    store.commit('setUser', { ...store.state.user, token: res.data.data.token })
    location.reload()
  } catch (err) {
    console.log(err)
  }
}
```
