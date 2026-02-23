import request from '@/utils/request'

export const getProduce = (obj) => {
  const { categoryId, goodsName, page } = obj
  return request.get('/goods/list', {
    params: {
      categoryId,
      goodsName,
      page

    }
  })
}
