<template>
  <div class="container m-3">
  <div class="row">
    <div class="col-6">
      <div class="mb-3 row">
          <label for="tittle" class="col-form-label text-start col-3">Title</label>
          <div class="col-9">
            <input type="text" class="form-control col-5" v-model="data.title" placeholder="tittle of questions theme" />
          </div>
      </div>

      <div v-for="(question, index) in data.questions" :key="'question'+index" class="border mb-2 p-2">
        <div class="mb-3 row" >
          <label for="question" class="col-form-label text-start col-3">Question #{{incrementIndex(index)}}</label>
          <div class="col-9">
            <input type="text" class="form-control" v-model="question.title" placeholder="Question">
          </div>
        </div>
        <div class="mb-3 row" v-for="(answer, aIndex) in question.answers" :key="aIndex">
           <label for="answer" class="col-form-label text-start col-3">Answer #{{incrementIndex(aIndex)}}</label>
           <div class="col-7">
             <textarea class="form-control" rows="3" v-model="answer.answer" ></textarea>
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
import { incrementIndex, addAnswer, addQuestion} from '../services/modules'
import { ref } from 'vue'

export default {
  name: 'addPage',
  data(){
    return {
      title:''
    }
  },

  async setup(){

    let data = ref({title:"",
                  questions: [{title:"",
                              answers: [{answer:""}]}]})

    return { data, incrementIndex, addAnswer, addQuestion}

  },
  methods:{    
    async saveToList(){
      const res = await listService.saveToList(this.data.title, this.data.questions)
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