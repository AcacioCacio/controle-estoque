import { Module } from '@nestjs/common';
import * as admin from 'firebase-admin';

@Module({
  providers: [
    {
      provide: 'FirestoreInstance',
      useFactory: async () => {
        const serviceAccount = require('../../SA_KEY.json');
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
