import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cliente } from "./entities/cliente.entity";
import { ClienteService } from "./services/cliente.service";

@Module({
    imports: [TypeOrmModule.forFeature([Cliente])],
    controllers: [],
    providers: [ClienteService],
    exports: []
})
export class ClienteModule {}