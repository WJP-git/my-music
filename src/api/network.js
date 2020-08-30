import axios from 'axios'
// import vue from 'vue'

export function network (config) {
  const instance = axios.create({
    baseURL: 'http://music.it666.com:3666/',
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    return config
  }, error => {
    console.log(error)
  })
  instance.interceptors.response.use(res => {
    return res.data
  }, error => {
    console.log(error)
  })
  return instance(config)
}
