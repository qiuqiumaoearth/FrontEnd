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

export const getProDetail = (id) => {
  return request.get('/goods/detail', {
    params: {
      goodsId: id
    }
  })
}

// 获取商品评价
export const getProComments = (goodsId, limit) => {
  return request.get('/comment/listRows', {
    params: {
      goodsId,
      limit
    }
  })
}
