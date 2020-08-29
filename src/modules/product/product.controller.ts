import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common'
import { ProductService } from './product.service'
import { Product } from './product.entity'

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll()
  }
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Product> {
    return this.productService.findById(id)
  }
  @Post()
  async create(@Body() product: Product): Promise<Product> {
    return this.productService.create(product)
  }
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<boolean> {
    return this.productService.remove(id)
  }
}
