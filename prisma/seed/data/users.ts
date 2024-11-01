import { Prisma } from '@prisma/client';
import { USR } from '../../../src/constants/abbreviations';
import { uniqueId } from '../../../src/utils/unique-id';

export const users: (Prisma.UserCreateInput & { id: string })[] = [
  {
    id: uniqueId(USR),
    email: 'tonystark@yopmail.com',
    name: 'Tony Stark',
  },
];
