import request from '@/utils/request'

// 购物车结算，需要两个参数
// ① mode="cart"
// ② cartIds="cartId, cartId"

// 立即购买结算，需要三个参数
// ① mode="buyNow"
// ② goodsId="商品id"
// ③ goodsSkuId="商品skuId"
export const checkOrder = (mode, obj) => {
  return request.get('/checkout/order', {
    params: {
      mode,
      delivery: 20, // 配送方式 10: 到店自提
      couponId: 0, // 优惠券id
      isUsePoints: 0, // 是否使用积分
      ...obj
    }
  })
}

// 提交订单
export const submitOrder = (mode, obj) => {
  return request.post('/checkout/submit', {

    mode,
    delivery: 20, // 配送方式 10: 快递
    couponId: 0, // 优惠券id
    isUsePoints: 0, // 是否使用积分
    payType: 10, // 支付方式 10: 余额支付
    ...obj

  })
}

// 订单列表
export const getMyOrderList = (dataType, page) => {
  return request.get('/order/list', {
    params: {
      dataType,
      page
    }
  })
}
