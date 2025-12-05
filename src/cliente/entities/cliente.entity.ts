import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_clientes"})
export class Cliente {
    @PrimaryGeneratedColumn()
    id_cliente: number;

    @Column({ length: 100, nullable: true})
    nome: string;

    @Column({ length: 100, nullable: true })
    email: string;

    @Column({ length: 20, nullable: true })
    telefone: string;

    @Column({ length: 100, nullable: true })
    endereco: string;

    @Column({ length: 20, nullable: true })
    status_cliente: string;
}
