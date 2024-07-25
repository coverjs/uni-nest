import * as crypto from 'crypto';
/**
 * 生成随机盐
 */
export function makeSalt(): string {
  return crypto.randomBytes(3).toString('base64');
}

/**
 * 使用盐对密码进行 sha1 加密
 * @param password 密码
 * @param salt 加盐
 */
export function encryptPassword(password: string, salt: string): string {
  if (!password || !salt) return '';
  const tempSalt = Buffer.from(salt, 'base64');
  return (
    // 10000 代表迭代次数 16代表长度 sha1 表示加密方式
    crypto.pbkdf2Sync(password, tempSalt, 10000, 16, 'sha1').toString('base64')
  );
}
