import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('process_data')
  handleData(data: any): any {
    // Process data and return a response
    return { received: true, original: data };
  }
}
