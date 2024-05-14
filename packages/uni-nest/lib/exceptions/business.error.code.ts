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
    code: 401,
    msg: '无效身份或身份已过期'
  },

  /**
   * 禁止访问
   */
  ACCESS_FORBIDDEN: {
    code: 403,
    msg: '抱歉哦，您无此权限！'
  },

  /**
   * 字段错误
   */
  FIELD_INCORRECT: {
    code: 1001,
    msg: '字段不合法'
  },

  /**
   * 数据已被保护
   */
  DATA_PROTECTED: {
    code: 1005,
    msg: '该数据已被保护'
  }
};
