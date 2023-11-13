import { Injectable, Inject } from '@nestjs/common';
import { CreateMovementDto } from './dto/create-movement.dto';
import { UpdateMovementDto } from './dto/update-movement.dto';
import { Firestore } from '@google-cloud/firestore';
import * as dayjs from 'dayjs';

@Injectable()
export class MovementService {
  constructor(
    @Inject('FirestoreInstance') private readonly firestore: Firestore,
  ) {}

  async create(createMovementDto: CreateMovementDto) {
    const { idProduct, type, quant, date } = createMovementDto;
    const prodRef = this.firestore.collection('products').doc(idProduct);
    const product = await prodRef.get();
    const DateMillis = dayjs(date).valueOf();

    if (type.toLowerCase() == 'doacao') {
      await prodRef.update({
        quant: product.data().quant + quant,
      });
    } else if (type.toLowerCase() == 'compra') {
      await prodRef.update({
        quant: product.data().quant + quant,
      });
    } else {
      if (product.data().quant < quant) {
        throw new Error('O estoque não pode ser negativo!');
      } else {
        await prodRef.update({
          quant: product.data().quant - quant,
        });
      }
    }

    const docRef = await this.firestore.collection('movement').add({
      idProduct,
      nameProduct: product.data().name,
      type,
      quant,
      date: DateMillis,
    });

    const movementDoc = await docRef.get();
    const movement = movementDoc.data();
    return movement;
  }

  async findAll() {
    const docRef = await this.firestore.collection('movement').get();

    const movements = [];

    docRef.forEach((doc) => {
      movements.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return movements;
  }

  async findOne(id: string) {
    const docRef = this.firestore.collection('movement').doc(id);

    const movement = await docRef.get();

    return movement.data();
  }

  async findPerIdProduct(id: string) {
    const docRef = this.firestore.collection('movement');
    const movement = await docRef.where('idProduct', '==', id).get();
    const movements = [];

    if (movement.empty) {
      throw new Error('Não existe movimentações com este Produto!');
    }

    movement.forEach((doc) => {
      movements.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return movements;
  }

  async update(id: string, updateMovementDto: UpdateMovementDto) {
    const docRef = this.firestore.collection('movement').doc(id);
    const DateMillis = dayjs().valueOf();

    await docRef.update({
      idProduct: updateMovementDto.idProduct,
      type: updateMovementDto.type,
      date: DateMillis,
    });

    const movement = await docRef.get();

    return movement.data();
  }

  async remove(id: string) {
    const docRef = this.firestore.collection('movement').doc(id);

    const movement = await docRef.get();

    if (!movement.exists) {
      throw new Error('Movimentação inexistente!');
    } else {
      const res = await docRef.delete();
      return `Movimentação excluída com sucesso!`;
    }
  }
}
