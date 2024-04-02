import { SetMetadata } from '@nestjs/common';
import { IS_PUBLIC_KEY } from '../constants';

export const UniPublic = () => SetMetadata(IS_PUBLIC_KEY, true);
