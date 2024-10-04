import request from '@/utils/request'

export const artGetChannelsService = () => {
  return request.get('/my/cate/info')
}
