<template>
    <div class="container m-3">
    <div class="row">
      <div class="col-8">
        <div class="mb-3 p-2 row">
            <label for="tittle" class="col-form-label text-start col-3">Title</label>
            <div class="col-7">
              <input type="text" class="form-control col-5" v-model="data.title" placeholder="tittle of questions theme" />
            </div>
            <div class="col-2 d-grid">
                <button type="button" class="btn btn-info"  @click="saveTheme()">update</button>
            </div>
        </div>
  
        <div v-for="(question, index) in data.questions" :key="'question'+index" class="border mb-2 p-2">
          <div class="mb-3 row" >
            <label for="question" class="col-form-label text-start col-3">Question #{{incrementIndex(index)}}</label>
            <div class="col-7">
              <input type="text" :value="question.title" class="form-control" :ref="'question'+index" placeholder="Question" @input="saveQuest(index)">
            </div>
            <div class="col-2 d-grid">
                <button type="button" class="btn btn-info" :ref="'saveQ' + index" @click="updateQuestion(index)">update</button>
            </div>
          </div>
          <div class="mb-3 row" v-for="(answer, aIndex) in question.answers" :key="aIndex">
             <label for="answer" class="col-form-label text-start col-3">Answer #{{incrementIndex(aIndex)}}</label>
             <div class="col-7">
               <textarea class="form-control" :ref="'answer' + index + '_' + aIndex" rows="3" v-model="answer.answer" @input="saveAns(index,aIndex)" ></textarea>
             </div> 
             <div class="col-2 d-grid gap-2">
              <button type="button" class="btn btn-primary" @click="addAnswer(index)">Add</button>
              <button type="button" class="btn btn-info" :ref="'saveQ' + index"  @click="updateAnswer(index, aIndex)">update</button>
             </div>         
          </div>
        </div>
     
    
    <div class="row py-2">
      <div class="col-5"><button type="button" class="btn btn-primary" @click="addQuestion()">Add question</button></div>        
    </div>
      </div>
    </div>
     </div> 
  
  </template>
  
  <script>
  import listService from '@/services/listService'
  import { incrementIndex, addAnswer, addQuestion, saveAns, saveQuest } from '../services/modules'
  import { ref } from 'vue'
  
  export default {
    name: 'editPage',
    props: ['themeId'],

    async setup(props){
      let data = ref()
      if(props.themeId){
        const list = await listService.getQuestionsByListId(props.themeId)
        data.value =  list[0]
      }
    return { data, incrementIndex, addAnswer, addQuestion, saveAns, saveQuest }
    },
  methods:{
    async saveTheme(){
        const res = await listService.updList(this.data.id, this.data.title)
        if (res){
            this.data.title = res.title
            alert('title updated')
        } else {
            alert('error of update')
        }
    },

    async updateQuestion(qIndex){
        const newQuestion = this.data.questions[qIndex]
        const res = await listService.updQuestion(newQuestion.id, newQuestion.idList, newQuestion.title)
        if (res){
            this.data.questions[qIndex].id = res.id
            this.data.questions[qIndex].title = res.title
            alert('question updated')
        } else {
            alert('error of update')
        }
    },

    async updateAnswer(qIndex, aIndex){
      let newAnsw = this.data.questions[qIndex].answers[aIndex]
      newAnsw.idQuestion = this.data.questions[qIndex].id
      if (newAnsw.idQuestion){
          const res = await listService.updAnswer(newAnsw.id, newAnsw.answer, newAnsw.idQuestion)
          if (res){
              this.data.questions[qIndex].answers[aIndex] = res
              alert('answer updated')
          } else {
              alert('error of update')
          }
      } else {
          alert ('Please save question before saving an answer')
      }
      
    }
  }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style>
  </style>