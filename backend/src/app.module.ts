import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { FirestoreModule } from './firestore/firestore.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [FirestoreModule, UserModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
