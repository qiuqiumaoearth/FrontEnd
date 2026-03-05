import { dayjs } from 'element-plus'

export const formatDate = (date) => {
  return dayjs(date).format('YYYY-MM-DD')
}
