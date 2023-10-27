import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { FirestoreModule } from './firestore/firestore.module';

@Module({
  imports: [FirestoreModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
