// Copyright 2024 hacxy
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

export const BUSINESS_ERROR_CODE = {
  /**
   * 公共错误码
   */
  COMMON: {
    code: 5000,
    msg: '非正常请求',
  },

  /**
   * 无效或过期token
   */
  INVALID_TOKEN: {
    code: 401,
    msg: '无效身份或身份已过期',
  },

  /**
   * 禁止访问
   */
  ACCESS_FORBIDDEN: {
    code: 403,
    msg: '抱歉哦，您无此权限！',
  },

  /**
   * 字段错误
   */
  FIELD_INCORRECT: {
    code: 1001,
    msg: '字段不合法',
  },

  /**
   * 数据已被保护
   */
  DATA_PROTECTED: {
    code: 1005,
    msg: '该数据已被保护',
  },
};
