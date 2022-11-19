import{ questionsToSaveDto} from './questionsToSaveDto'
export class listOfQuestionsDto  {
    id?: number
    title: string
}
export class updateList {
    id: number
    title:string
    questions: [questionsToSaveDto]
}