const boom = require('@hapi/boom');

const sequelize = require('../libs/sequelize');

class ProductsService {

  constructor(){
    this.products = [];
  }


  // async create(data) {
  //   const newProduct = {
  //     id: faker.datatype.uuid(),
  //     ...data
  //   }
  //   this.products.push(newProduct);
  //   return newProduct;
  // }

  async find() {
    const query = 'SELECT * FROM tasks';
    // const [data] = await sequelize.query(query);
    const [data, metadata] = await sequelize.query(query);
    return {data, metadata};
  }

  async findOne(id) {
    const product = this.products.find(item => item.id === id);
    if (!product) {
      throw boom.notFound('product not found');
    }
    if (product.isBlock) {
      throw boom.conflict('product is block');
    }
    return product;
  }

  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }

}

module.exports = ProductsService;
