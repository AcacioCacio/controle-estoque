import { Module } from '@nestjs/common';
import { MovementService } from './movement.service';
import { MovementController } from './movement.controller';
import { FirestoreModule } from 'src/firestore/firestore.module';

@Module({
  imports: [FirestoreModule],
  controllers: [MovementController],
  providers: [MovementService],
})
export class MovementModule {}
