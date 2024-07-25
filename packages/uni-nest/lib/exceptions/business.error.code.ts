export const BUSINESS_ERROR_CODE = {
  /**
   * 公共错误码
   */
  COMMON: {
    code: 5000,
    msg: '非正常请求'
  },

  /**
   * 无效或过期token
   */
  INVALID_TOKEN: {
    code: 1401,
    msg: '无效身份或身份已过期'
  }
};
