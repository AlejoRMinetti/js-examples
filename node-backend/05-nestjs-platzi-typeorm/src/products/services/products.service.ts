import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; // 👈 import
import { Repository } from 'typeorm'; // 👈 import
import { NotFoundException } from '@nestjs/common/exceptions';

import { Product } from '../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>, // 👈 Inject
  ) {}

  findAll() {
    return this.productRepo.find();  // 👈 use repo
  }

  findOne(id: number) {
    const product = this.productRepo.findOne(id);  // 👈 use repo
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  // create(payload: CreateProductDto) {
  //   const newProduct = {
  //     id: this.counter,
  //     ...payload,
  //   };
  //   this.counter++;
  //   this.products.push(newProduct);
  //   return {
  //     message: 'Product created',
  //     newProduct,
  //   };
  // }

  // update(id: number, changes: UpdateProductDto) {
  //   const product = this.findOne(id);
  //   if (product) {
  //     const index = this.products.findIndex((item) => item.id == id);
  //     this.products[index] = {
  //       ...product,
  //       ...changes,
  //     };
  //     return this.products[index];
  //   }
  //   return null;
  // }

  // delete(id) {
  //   const index = this.products.findIndex((item) => item.id == id);
  //   this.products.splice(index, 1);
  //   return { message: true };
  // }
}
