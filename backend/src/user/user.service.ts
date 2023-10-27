import { Injectable, Inject } from '@nestjs/common';
import { Firestore, Timestamp } from '@google-cloud/firestore';
import { CreateUserDto } from './dto/create-user.dto';
import * as dayjs from 'dayjs';

@Injectable()
export class UserService {
  constructor(
    @Inject('FirestoreInstance') private readonly firestore: Firestore,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { email, password, name, dueDate } = createUserDto;
    const dueDateMillis = dayjs(dueDate).valueOf();

    const docRef = await this.firestore.collection('users').add({
      email,
      password,
      name,
      dueDate: dueDateMillis,
    });
    const userDoc = await docRef.get();
    const users = userDoc.data();
    return users;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
