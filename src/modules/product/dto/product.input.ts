import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class ProductInput {
  @Field({ nullable: true })
  id: number

  @Field({ nullable: true })
  product: string

  @Field({ nullable: true })
  price: number
}
