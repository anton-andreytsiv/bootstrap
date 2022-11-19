<template>
  <div class="container m-3">
  <div class="row">
    <div class="col-6">
      <div class="mb-3 row">
          <label for="tittle" class="col-form-label text-start col-3">Title</label>
          <div class="col-9">
            <input type="text" class="form-control col-5" v-model="title" placeholder="tittle of questions theme" />
          </div>
      </div>

      <div v-for="(question, index) in questions" :key="'question'+index" class="border mb-2 p-2">
        <div class="mb-3 row" >
          <label for="question" class="col-form-label text-start col-3">Question #{{incrementIndex(index)}}</label>
          <div class="col-9">
            <input type="text" class="form-control" :ref="'question'+index" placeholder="Question" @input="saveQuest(index)">
          </div>
        </div>
        <div class="mb-3 row" v-for="(answer, aIndex) in question.answers" :key="aIndex">
           <label for="answer" class="col-form-label text-start col-3">Answer #{{incrementIndex(aIndex)}}</label>
           <div class="col-7">
             <textarea class="form-control" :ref="'answer' + index + '_' + aIndex" rows="3" v-model="answer.answer" @input="saveAns(index,aIndex)" ></textarea>
           </div> 
           <div class="col-1 m-1">
            <button type="button" class="btn btn-primary" @click="addAnswer(index)">Add</button>
           </div>         
        </div>
      </div>
   
  
  <div class=" d-grid gap-3 col-6 mx-auto">
    <button type="button" class="btn btn-primary" @click="addQuestion()">Add question</button>      
    <button type="button" class="btn btn-primary" @click="saveToList()">Save to List</button>
  </div>
    </div>
  </div>
   </div> 

</template>

<script>
import listService from '@/services/listService'
import { ref } from 'vue'

export default {
  name: 'addPage',
  data(){
    return {
      title:''
    }
  },

  async setup(){

    let questions = ref([{title:"",
                    answers: [{answer:""}]}])

    return { questions}

  },
  methods:{
    incrementIndex(i) {
        return i + 1;
    },
    addAnswer(index){
     this.questions[index].answers.push({answer:""})
    },
    addQuestion(){
      this.questions.push({title:"", answers:[{answer:""}]})
    },
    saveAns(qIndex, aIndex){
      this.questions[qIndex].answers[aIndex].answer = this.$refs["answer"+qIndex+"_"+aIndex][0].value
    },
    saveQuest(qIndex){
      this.questions[qIndex].title = this.$refs["question"+qIndex][0].value
    },
    async saveToList(){
      const res = await listService.saveToList(this.title, this.questions)
      if(res){
        alert("questions are saved")
        this.$router.push({path:'/'})
      } else {
        alert ("error of saving")
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>