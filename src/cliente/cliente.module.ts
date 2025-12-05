import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cliente } from "./entities/cliente.entity";
import { ClienteService } from "./services/cliente.service";
import { ClienteController } from "./controller/cliente.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Cliente])],
    controllers: [ClienteController],
    providers: [ClienteService],
    exports: []
})
export class ClienteModule {}