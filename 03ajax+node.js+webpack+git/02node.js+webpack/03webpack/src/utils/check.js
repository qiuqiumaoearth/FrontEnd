//封装校验手机号长度和验证码长度的函数

export const cheackPhone = phone => phone.length === 11
export const cheackCode = code => code.length === 6
