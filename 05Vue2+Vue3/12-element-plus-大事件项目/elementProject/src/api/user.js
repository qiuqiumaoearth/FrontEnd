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

//修改信息
export const userUpdateInfoService = ({ id, username, nickname, email }) =>
  request.put('/my/userinfo', {
    id,
    username,
    nickname,
    email,
  })

//修改用户头像
export const userUpdateAvatarService = (avatar) => request.patch('/my/update/avatar', { avatar })

// 重置用户密码
export const userUpdatePassService = ({ old_pwd, new_pwd, re_pwd }) =>
  request.patch('/my/updatepwd', { old_pwd, new_pwd, re_pwd })
