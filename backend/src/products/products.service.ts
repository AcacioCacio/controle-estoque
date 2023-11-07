import { Injectable, Inject } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Firestore } from '@google-cloud/firestore';
import * as dayjs from 'dayjs';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('FirestoreInstance') private readonly firestore: Firestore,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const { name, quant, date } = createProductDto;
    const DateMillis = dayjs(date).valueOf();

    const docRef = await this.firestore.collection('products').add({
      name,
      quant,
      date: DateMillis,
    });

    const productDoc = await docRef.get();
    const product = productDoc.data();
    return product;
  }

  async findAll() {
    const docRef = await this.firestore.collection('products').get();

    const products = [];

    docRef.forEach((doc) => {
      products.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return products;
  }

  async findOne(id: string) {
    const docRef = this.firestore.collection('products').doc(id);

    const product = await docRef.get();

    return product.data();
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const docRef = this.firestore.collection('products').doc(id);
    const DateMillis = dayjs().valueOf();

    await docRef.update({
      name: updateProductDto.name,
      quant: updateProductDto.quant,
      date: DateMillis,
    });

    const product = await docRef.get();

    return product.data();
  }

  async remove(id: string) {
    const docRef = this.firestore.collection('products').doc(id);

    const product = await docRef.get();

    if (!product.exists) {
      throw new Error('Produto não existe!');
    } else {
      const res = await docRef.delete();
      return `Produto excluído com sucesso!`;
    }
  }
}
