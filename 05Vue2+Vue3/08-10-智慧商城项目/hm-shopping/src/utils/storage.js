const INFO_KEY = 'hm_shopping_info'
const HIS_KEY = 'hm_history_list'

// 获取个人信息
export const getInfo = () => {
  const result = localStorage.getItem(INFO_KEY)
  return result ? JSON.parse(result) : { token: '', userId: '' }
}

// 设置个人信息
export const setInfo = (info) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(info))
}

// 移出个人信息
export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}

// 获取历史记录
export const getHis = () => {
  const history = localStorage.getItem(HIS_KEY)
  return history ? JSON.parse(history) : []
}

// 设置历史记录
export const setHis = (arr) => {
  localStorage.setItem(HIS_KEY, JSON.stringify(arr))
}
