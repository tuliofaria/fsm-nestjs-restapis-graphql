import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { Product } from './dto/product'
import { ProductService } from './product.service'
import { ProductInput } from './dto/product.input'

@Resolver(of => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query(returns => [Product], { name: 'getAllProducts' })
  async getAllProducts(): Promise<Product[]> {
    const products = await this.productService.findAll()
    const productsToReturn: Product[] = products.map(product => {
      const productToReturn = new Product()
      productToReturn.id = product.id
      productToReturn.product = product.product
      productToReturn.price = product.price
      return productToReturn
    })
    return productsToReturn
  }

  @Mutation(returns => Product, { name: 'createProduct' })
  async create(@Args('input') input: ProductInput): Promise<Product> {
    return this.productService.create(input)
  }
}
