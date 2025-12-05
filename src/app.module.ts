import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './cliente/entities/cliente.entity';
import { ClienteModule } from './cliente/cliente.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port:  3306,
      username: 'root',
      password: 'root', // Mudar a senha do banco de dados
      database: 'db_crm',
      entities: [Cliente],
      synchronize: true,
      logging: true
    }),
    ClienteModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
