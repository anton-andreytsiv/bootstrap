import axios from "axios";


const url = "http://localhost:8000/list/";


class listService {


static async getListOfQuestions() {

  return axios.get(url,{
    withCredentials: true
  }).then (response => { 
    if (response.status == 200) {      
      return response.data;
    }
    else {
      alert ("data fetch error");
      return null
    }    
  }).catch(error => console.log(error));
}

static async getQuestionsByListId(themeId) {

  return axios.get(url + themeId,{
    withCredentials: true
  }).then (response => { 
    if (response.status == 200) {      
      return response.data;
    }
    else {
      alert ("data fetch error");
      return null
    }    
  }).catch(error => console.log(error));
}

static async saveToList(title, listOfQuestions){
  
  return axios.post(url + "addQuestionList", {
    title,
    listOfQuestions
  }, {
    headers: {
      "Content-Type": "application/json"
    },
    withCredentials: true
    
  }).then (response => { 
    if (response.data) {
     return response.data;
    }
    else {
      console.log ("error of saving list");
      return null
    }    
  }).catch(error => console.log(error));
}

static async updAnswer(id, title, qId){
  return axios.put(url + 'answer/', {
    id,
    title,
    qId
  }, {
    headers: {
      "Content-Type": "application/json"
    },
    withCredentials: true
    
  }).then (response => { 
    if (response.data) {
     return response.data;
    }
    else {
      console.log ("error of update answer");
      return null
    }    
  }).catch(error => console.log(error));

}
static async updQuestion(id, idList, title){
  return axios.put(url + 'question/', {
    id,
    idList,
    title
  }, {
    headers: {
      "Content-Type": "application/json"
    },
    withCredentials: true
    
  }).then (response => { 
    if (response.data) {
     return response.data;
    }
    else {
      console.log ("error of update question");
      return null
    }    
  }).catch(error => console.log(error));

}
static async updList(id, title){
  return axios.put(url + 'list/', {
    id,
    title
  }, {
    headers: {
      "Content-Type": "application/json"
    },
    withCredentials: true
    
  }).then (response => { 
    if (response.data) {
     return response.data;
    }
    else {
      console.log ("error of update list");
      return null
    }    
  }).catch(error => console.log(error));

}

static async addQuestionToList(title) {
  return axios.post(url +"addQuestionList",{
    title
  },
  {
    withCredentials: true
  }).then (response => { 
    if (response.data) {      
      return response.data;
    }
    else {
      alert ("data add name error");
      return null
    }    
  }).catch(error => console.log(error));
}



}

export default listService;
