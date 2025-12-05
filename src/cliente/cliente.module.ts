import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cliente } from "./entities/cliente.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Cliente])],
    controllers: [],
    providers: [],
    exports: []
})
export class ClienteModule {}