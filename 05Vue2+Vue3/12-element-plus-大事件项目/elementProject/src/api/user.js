import request from '@/utils/request'

export const userRegisterService = ({ username, password, confirmPassword }) =>
  request.post('/api/reg', {
    username,
    password,
    repassword: confirmPassword,
  })

export const userLoginService = ({ username, password }) =>
  request.post('/api/login', {
    username,
    password,
  })

export const userGetInfoService = () => request.get('/my/userinfo')
