import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_clientes"})
export class Cliente {
    @PrimaryGeneratedColumn()
    id_cliente: number;

    @Column({ length: 100, nullable: true})
    @IsNotEmpty()
    nome: string;

    @Column({ length: 100, nullable: true })
    @IsNotEmpty()
    email: string;

    @Column({ length: 20, nullable: true })
    @IsNotEmpty()
    telefone: string;

    @Column({ length: 100, nullable: true })
    @IsNotEmpty()
    endereco: string;

    @Column({ length: 20, nullable: true })
    @IsNotEmpty()
    status_cliente: string;
}
