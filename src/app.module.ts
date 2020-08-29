import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ProductModule } from './modules/product/product.module'
import { DatabaseModule } from './database/database.module'
import { GraphQLModule } from '@nestjs/graphql'

@Module({
  imports: [
    DatabaseModule.forRoot(),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
