import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { PartialUpdateProductDto } from './dto/partial-update-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Products } from './entities/products.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private readonly productsRepo: Repository<Products>,
  ) {}

  async create(dto: CreateProductDto) {
    const product = this.productsRepo.create(dto);
    const data = await this.productsRepo.save(product);
    return { message: 'Product created successfully', data };
  }

  async findAll() {
    const data = await this.productsRepo.find({ order: { createdAt: 'DESC' } });
    return { message: 'All products fetched successfully', count: data.length, data };
  }

  async findOne(id: number) {
    const product = await this.productsRepo.findOne({ where: { id } });
    if (!product) throw new NotFoundException(`Product with id ${id} not found`);
    return { message: 'Product fetched successfully', data: product };
  }

  async update(id: number, dto: PartialUpdateProductDto) {
    const { data: product } = await this.findOne(id);
    Object.assign(product, dto);
    const data = await this.productsRepo.save(product);
    return { message: 'Product updated successfully', data };
  }

  async replace(id: number, dto: UpdateProductDto) {
    const { data: product } = await this.findOne(id);
    Object.assign(product, dto);
    const data = await this.productsRepo.save(product);
    return { message: 'Product replaced successfully', data };
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.productsRepo.delete(id);
    return { message: 'Product deleted successfully', id };
  }

  async findByCategory(category: string) {
    const data = await this.productsRepo.find({ where: { category } });
    return { message: 'Products fetched by category', count: data.length, data };
  }

  async search(keyword: string) {
    const data = await this.productsRepo.find({
      where: { name: ILike(`%${keyword}%`) },
    });
    return { message: 'Product search completed', count: data.length, data };
  }

  async toggleActive(id: number) {
    const { data: product } = await this.findOne(id);
    product.isActive = !product.isActive;
    const data = await this.productsRepo.save(product);
    return { message: 'Product active status toggled', data };
  }
}
