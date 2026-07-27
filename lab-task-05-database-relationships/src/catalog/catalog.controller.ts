import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { CreateCategoryDto, CreateProductDto } from './dto/catalog.dto';
@Controller()
export class CatalogController {
  constructor(private service: CatalogService) {}
  @Post('categories') createCategory(@Body() dto: CreateCategoryDto) { return this.service.createCategory(dto); }
  @Get('categories') categories() { return this.service.findCategories(); }
  @Post('products') createProduct(@Body() dto: CreateProductDto) { return this.service.createProduct(dto); }
  @Get('products') products() { return this.service.findProducts(); }
  @Patch('products/:id/category/:categoryId') change(@Param('id', ParseIntPipe) id: number, @Param('categoryId', ParseIntPipe) categoryId: number) { return this.service.changeCategory(id, categoryId); }
}
