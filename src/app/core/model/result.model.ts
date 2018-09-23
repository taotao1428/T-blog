/**
 * 用于接收返回的数据
 */
export interface Result {
  code: number; // 状态码
  msg: string; // 信息
  data: any; // 返回的数据
}
