import { SetMetadata } from '@nestjs/common';
import { IS_PUBLIC_KEY } from '../constants';

export const UniPublic = (isPublic: boolean) => {
  return SetMetadata(IS_PUBLIC_KEY, isPublic);
};
