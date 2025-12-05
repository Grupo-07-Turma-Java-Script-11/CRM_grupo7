import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Cliente } from "../entities/cliente.entity";
import { DeleteResult, ILike, Repository } from "typeorm";

@Injectable()
export class ClienteService{
    constructor(
        @InjectRepository(Cliente)
        private clienteRepository: Repository<Cliente>
    ){}
    
    async findAll(): Promise<Cliente[]>{
        return await this.clienteRepository.find();
    }

    async findById (id_cliente: number): Promise<Cliente>{
        const cliente = await this.clienteRepository.findOne({
            where: {id_cliente},
        });
        if(!cliente){
            throw new HttpException('Cliente não encontrada', HttpStatus.NOT_FOUND);
        }
        return cliente;
    }

    async findByName(nome: string): Promise<Cliente[]>{
        return await this.clienteRepository.find({
            where: {
                nome: ILike(`%${nome}%`)
            }
        })
    }

    async create (cliente: Cliente): Promise<Cliente>{
        return await this.clienteRepository.save(cliente);
    }

    async update(cliente: Cliente): Promise<Cliente>{
        let buscarCliente: Cliente = await this.findById(cliente.id_cliente);
        if(!buscarCliente){
            throw new HttpException('Cliente não encontrado', HttpStatus.NOT_FOUND);
        }
        return await this.clienteRepository.save(cliente);
    }

    async delete(id_cliente: number): Promise<DeleteResult>{
        await this.findById(id_cliente);
        return await this.clienteRepository.delete(id_cliente);
    }
}