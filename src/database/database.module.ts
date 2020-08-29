import { Global, Module, DynamicModule } from '@nestjs/common'
import { MySQLProvider } from './mysql.provider'

@Global()
@Module({})
export class DatabaseModule {
  static forRoot(): DynamicModule {
    const connectionFactory = {
      provide: 'DATABASE',
      useFactory: () => {
        return new MySQLProvider()
      },
    }
    return {
      module: DatabaseModule,
      providers: [connectionFactory],
      exports: ['DATABASE'],
    }
  }
}
