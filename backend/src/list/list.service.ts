import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { listOfQuestionsDto, updateList } from './dto/listOfQuestionsDto';
import { answers, questionsToSaveDto } from './dto/questionsToSaveDto';

@Injectable()
export class ListService {
    constructor(private prisma: PrismaService) {}

    async getListOfQuestions(): Promise<listOfQuestionsDto[]>{
        return await this.prisma.listOfQuest.findMany({
            orderBy:{
                id: 'asc'
            }
        })
    }
    async getQuestionsByListId(id:number): Promise<listOfQuestionsDto[]>{
        return await this.prisma.listOfQuest.findMany({
            where: {
                id
            },
            include:{
                questions:{
                    include:{
                    answers:true
                    }                
                }
            },
            orderBy: {
                id: 'asc'
            }
        })
    }
    async addQuestionsToList(title: string, questions:[questionsToSaveDto]): Promise<listOfQuestionsDto>{
        const newList = await this.prisma.listOfQuest.create({
            data:{
                title
                }
        })
        const trx =  questions.map(item => {
            return  this.prisma.questions.create({
                data:{
                    title: item.title,
                    idList: newList.id,
                    answers:{
                        createMany:{
                            data:
                                 item.answers                            
                        }
                    }
                }
            })     
        })

        await  this.prisma.$transaction(trx)
        return newList
        
    }
    async updateAnswer (id: number, answer: string, idQuestion: number): Promise<answers>{
        if(id){
                return await this.prisma.answers.update({
                    where:{
                        id
                    },
                    data:{
                        answer
                    }
                })
            } else{
                return await this.prisma.answers.create({
                    data:{
                        answer,
                        idQuestion
                    }
                })
            }   
    }

    async updateQuestion (id: number, idList: number, title: string): Promise<questionsToSaveDto>{
        if (id){
            return await this.prisma.questions.update({
                where:{
                    id
                },
                data:{
                    title, 
                    idList
                }
            })
        } else{
            return await this.prisma.questions.create({
                data:{
                    title,
                    idList
                }
            })
        }
    }
    async updateThemeInList(id:number, title: string): Promise<listOfQuestionsDto>{
        return await this.prisma.listOfQuest.update({
            where:{
                id
            },
            data:{
                title
            }
        })
    }
    
    async getQuestByTheme(id:number){
        return await this.prisma.questions.findMany({
            where:{
                idList: id
            },
            include:{
                answers:true  
            }
        })
    }
}
