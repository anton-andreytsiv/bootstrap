<template>
    <div class="container mt-5 col-7">
        <div class="row">
        <div class="list-group">
        <div class="row" v-for="item in listOfQuestions" :key="item.id">
            <div class="col-11 text-start" >
            <a  href="#" class="list-group-item list-group-item-action">
            <router-link :to="{ name: 'themePage', params: { themeId: item.id }}">{{item.title}} </router-link></a>
            </div>
            <div class="col-1">
                <button type="button" class="btn btn-success" @click="$router.push({path:'/edit/'+item.id})" >edit</button>
            </div>
       </div>
        </div>
        <div class="row py-2">
            <div class="col-2"><button type="button" class="btn btn-primary" @click="$router.push({path:'/add'})">Add new theme of questions</button></div>
        </div>
    </div>

</div>
</template>

<script>
import { ref } from 'vue'
import listService from '@/services/listService'

export default {
  name: 'listPage',
    
async setup(){
    const listOfQuestions = ref([])
    listOfQuestions.value = await listService.getListOfQuestions()
    return {listOfQuestions}
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>