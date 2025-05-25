import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Controller("app")
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Client({
    transport: Transport.REDIS,
    options: {
      host: '161.97.128.140',
      port: 30769,
      username: 'default',
      password: 'admin',
    },
  })
  client: ClientProxy;

  @Post('send-data')
  async sendData(@Body() data: any) {
    console.log(data);
    const response:any = await lastValueFrom(this.client.send('process_data', data));
    console.log(response);
    return response;
  }
}
