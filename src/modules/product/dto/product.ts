import { ObjectType, Field } from '@nestjs/graphql'

@ObjectType()
export class Product {
  @Field({ nullable: true })
  id: number

  @Field({ nullable: true })
  product: string

  @Field({ nullable: true })
  price: number
}
