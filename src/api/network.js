import axios from 'axios'
// // import vue from 'vue'
//
// export function network (config) {
//   const instance = axios.create({
//     // baseURL: 'http://music.it666.com:3666/',
//     baseURL: 'http://127.0.0.1:3000',
//     timeout: 5000
//   })
//
//   instance.interceptors.request.use(config => {
//     return config
//   }, error => {
//     console.log(error)
//   })
//   instance.interceptors.response.use(res => {
//     return res.data
//   }, error => {
//     console.log(error)
//   })
//   return instance(config)
// }

axios.defaults.baseURL = 'http://127.0.0.1:3000/'
axios.defaults.timeout = 5000
export default {
  get (path = '', data = {}) {
    return new Promise((resolve, reject) => {
      axios.get(path, {
        params: data
      }).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  post (path = '', data = {}) {
    return new Promise((resolve, reject) => {
      axios.post(path, data).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
