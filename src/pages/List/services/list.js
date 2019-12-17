import Request from '@/utils/fetch'

export function queryProjectNotice(params) {
  return Request.post(`/engine/search/keyword`, params);
}
