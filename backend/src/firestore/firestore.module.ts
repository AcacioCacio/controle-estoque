import { Module } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as dotenv from 'dotenv';

dotenv.config(); // Load environment variables

@Module({
  providers: [
    {
      provide: 'FirestoreInstance',
      useFactory: async () => {
        const saKeyString = process.env.SA_KEY;
        const serviceAccount = JSON.parse(saKeyString);
        admin.initializeApp({
          credential: admin.credential.cert(serviceAccount),
        });

        return admin.firestore();
      },
    },
  ],
  exports: ['FirestoreInstance'],
})
export class FirestoreModule {}
