import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto, CreateProductDto } from './dto/catalog.dto';
import { Category } from './entities/category.entity';
import { Product } from './entities/product.entity';
@Injectable()
export class CatalogService {
  constructor(@InjectRepository(Category) private categories: Repository<Category>, @InjectRepository(Product) private products: Repository<Product>) {}
  createCategory(dto: CreateCategoryDto) { return this.categories.save(this.categories.create(dto)); }
  findCategories() { return this.categories.find({ relations: { products: true } }); }
  async createProduct(dto: CreateProductDto) {
    const category = await this.categories.findOneBy({ id: dto.categoryId });
    if (!category) throw new NotFoundException(`Category ${dto.categoryId} not found`);
    return this.products.save(this.products.create({ name: dto.name, price: dto.price, category }));
  }
  findProducts() { return this.products.find({ relations: { category: true } }); }
  async changeCategory(productId: number, categoryId: number) {
    const product = await this.products.findOneBy({ id: productId });
    const category = await this.categories.findOneBy({ id: categoryId });
    if (!product || !category) throw new NotFoundException('Product or category not found');
    product.category = category; return this.products.save(product);
  }
}
