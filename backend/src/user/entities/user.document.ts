import { Timestamp } from '@google-cloud/firestore';

export class UserDocument {
  static collectionName = 'users';

  name: string;
  email: string;
  password: string;
  dueDate: Date;
}
