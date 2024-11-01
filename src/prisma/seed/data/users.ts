import { Prisma } from '@prisma/client';
import { USR } from '../../../constants/abbreviations';
import { uniqueId } from '../../../utils/unique-id';

export const users: (Prisma.UserCreateInput & { id: string })[] = [
  {
    id: uniqueId(USR),
    email: 'tonystark@yopmail.com',
    name: 'Tony Stark',
  },
];
