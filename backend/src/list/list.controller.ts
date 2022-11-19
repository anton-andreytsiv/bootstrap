import { Body, Controller, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { listOfQuestionsDto } from './dto/listOfQuestionsDto';
import { answers, questionsToSaveDto } from './dto/questionsToSaveDto';
import { ListService } from './list.service';

@Controller('list')
export class ListController {
    constructor (private listService: ListService){}
   
    @Get()
    async getListOfQuestions(): Promise<listOfQuestionsDto[]>{
        return await this.listService.getListOfQuestions()
    }
    @Get(':id')
    @HttpCode(200)
    async getQuestionsByListId(@Param() params): Promise<listOfQuestionsDto[]>{
        return await this.listService.getQuestionsByListId(Number(params.id))
    }

    @Post('addQuestionList')
    @HttpCode(200)
    async addQuestionList(@Body() data: {title: string, listOfQuestions:[questionsToSaveDto]}): Promise<listOfQuestionsDto>{
    return await this.listService.addQuestionsToList(data.title, data.listOfQuestions)
    }

    @Put('answer/')
    async updateAnswer( @Body() data: {id:number, title: string, qId: number}): Promise<answers>{
      return await this.listService.updateAnswer(Number(data.id), data.title, data.qId)
    }
    @Put('question/')
    async updateQuestion( @Body() data: {id:number, idList: number, title: string }): Promise<questionsToSaveDto>{
      return await this.listService.updateQuestion(data.id, data.idList, data.title)
    }
    @Put('list/')
    async updateList( @Body() data: {id:number, title: string }): Promise<listOfQuestionsDto>{
      return await this.listService.updateThemeInList(data.id, data.title)
    }

    
}
