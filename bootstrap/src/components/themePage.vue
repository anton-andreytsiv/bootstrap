<template>
  <div class="container m-3">
  <div class="row">
    <div class="col-6">
      <div class="mb-3 row">
          <div class="col-12">
            <h2 class="text-start ml-3">{{questions.title}}</h2>
          </div>
      </div>

      <div v-for="(question, index) in questions.questions" :key="'question'+index" class="border mb-2 p-2">
        <div class="mb-3 row" >
          <div class="col-12 text-start">
          <label for="question" class="form-label">{{question.title}}</label>
          <select class="form-select m-1" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option v-for="(answer, aIndex) in question.answers" :key="aIndex" :value="answer.id">{{answer.answer}}</option>
          </select>
        </div>
        </div>
    
      </div>
    </div>
  </div>
   </div> 

</template>

<script>
import listService from '@/services/listService'
import { ref } from 'vue'

export default {
  name: 'themePage',
  props: ['themeId'],

  async setup(props){
    let questions = ref()
    if(props.themeId){
      const list = await listService.getQuestionsByListId(props.themeId)
      questions.value =  list[0]
    }
    return { questions}


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>