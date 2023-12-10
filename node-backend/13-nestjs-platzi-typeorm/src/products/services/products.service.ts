import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; // 👈 import
import { Repository } from 'typeorm'; // 👈 import
import {
  ConflictException,
  NotFoundException,
} from '@nestjs/common/exceptions';

import { Product } from '../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>, // 👈 Inject
  ) {}

  findAll() {
    return this.productRepo.find(); // 👈 use repo
  }

  async findOne(id: number) {
    const product = await this.productRepo.findOne(id); // 👈 use repo
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }

  async create(data: CreateProductDto) {
    // * No es escalable
    // const newProduct = new Product();
    // newProduct.name = data.name;
    // newProduct.description = data.description;
    // newProduct.price = data.price;
    // newProduct.stock = data.stock;
    // newProduct.image = data.image;

    const newProduct = this.productRepo.create(data);

    return await this.productRepo.save(newProduct).catch((error) => {
      throw new ConflictException(error.detail);
    });
  }

  // Actualizar producto
  async update(id: number, changes: UpdateProductDto) {
    // buscamos el producto
    const product = await this.productRepo.findOne(id);
    // actualizamos el producto
    this.productRepo.merge(product, changes);
    // guardamos los datos
    return this.productRepo.save(product);
  }

  // Borrar producto
  remove(id: number) {
    return this.productRepo.delete(id);
  }
}
