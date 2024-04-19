import { Delete, Get, Patch, Post, Put } from '@nestjs/common';

export enum Method {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Delete = 'DELETE',
  Patch = 'PATCH'
}

// 请求方法映射
export const MethodMap = {
  [Method.Get]: Get,
  [Method.Post]: Post,
  [Method.Put]: Put,
  [Method.Delete]: Delete,
  [Method.Patch]: Patch
};

export const BUSINESS_HTTP_CODE_KEY = 'HttpCode';
export const IS_PUBLIC_KEY = 'isPublic';

export const DEFAULT_PORT = 3000;
