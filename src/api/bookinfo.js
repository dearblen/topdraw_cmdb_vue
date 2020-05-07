import request from '../utils/request'
export function fetchList(query) {
  return request({
    url: 'http://10.100.6.214:8083/getbookinfo/',
    method: 'get',
    params: query
  })
}
