import { ClienteService } from './../services/cliente.service';
import { Cliente } from './../entities/cliente.entity';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";


@Controller("/cliente")
export class ClienteController {
    constructor(private readonly clienteService: ClienteService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Cliente[]> {
        return this.clienteService.findAll();
    }
    
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Cliente> {
        return this.clienteService.findById(id);
    }

    @Get('nome/:nome')
    @HttpCode(HttpStatus.OK)
    findByName(@Param('nome') nome: string): Promise<Cliente[]> {
        return this.clienteService.findByName(nome);
    }
    
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() cliente: Cliente): Promise<Cliente> {
        return this.clienteService.create(cliente);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() cliente: Cliente): Promise<Cliente> {
        return this.clienteService.update(cliente);
    }    

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.clienteService.delete(id);
    }
}