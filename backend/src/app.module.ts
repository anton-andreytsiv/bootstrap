import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListController } from './list/list.controller';
import { ListService } from './list/list.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController, ListController],
  providers: [AppService, ListService, PrismaService],
})
export class AppModule {}
