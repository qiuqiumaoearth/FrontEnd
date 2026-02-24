import request from '@/utils/request'

export const getAddressList = () => {
  return request.get('/address/list')
}

export const editAddress = () => {
  return request.post('/address/edit', {
    addressId: '10012',
    form: {
      name: '张小',
      phone: '18999292999',
      region: [
        {
          label: '上海',
          value: 782
        },
        {
          label: '上海市',
          value: 783
        },
        {
          label: '徐汇区',
          value: 785
        }
      ],
      detail: '北京路1号楼8888室'
    }
  })
}
