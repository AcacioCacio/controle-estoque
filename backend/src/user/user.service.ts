import { Inject, Injectable } from '@nestjs/common';
import { Firestore } from '@google-cloud/firestore';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import * as dayjs from 'dayjs';
import { UnauthorizedError } from 'src/auth/err/unauthorized.error';
import { randomStringGenerator } from '@nestjs/common/utils/random-string-generator.util';

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
      password: await bcrypt.hash(password, 10),
      name,
      dueDate: dueDateMillis,
    });
    const userDoc = await docRef.get();
    const users = userDoc.data();
    return users;
  }

  async findAll() {
    const docRef = this.firestore.collection('users');
    const queryUsers = await docRef.get();

    if (queryUsers.empty) {
      console.log('No matching documents.');
      return;
    }

    const users = queryUsers.docs.map((doc) => doc.data());

    return users.map((user) => {
      const { password, ...rest } = user;
      return {
        ...rest,
        id: randomStringGenerator(),
      };
    });
  }

  async findEmail(email: string) {
    const docRef = this.firestore.collection('users');
    const queryUsers = await docRef.where('email', '==', email).get();
    if (queryUsers.empty) {
      console.log('User not found with email:', email);
      throw new UnauthorizedError(
        'Email address or password provided is incorrect.',
      );
    }

    const user = queryUsers.docs[0].data();

    return user;
  }
}
