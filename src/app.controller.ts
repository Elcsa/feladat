import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() 
  {let szam=Math.floor((Math.random() * 13) + 1);
    return { message: 'Hello world!' };
  }
}