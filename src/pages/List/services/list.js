import request from '@/utils/request';

export async function queryProjectNotice() {
  return request('/engine/find/weather/');
}
