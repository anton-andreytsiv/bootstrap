export function incrementIndex(i) {
    return i + 1;
}
export function addAnswer(index){
    const idQuestion = this.data.questions[index].id
    this.data.questions[index].answers.push({answer:"", idQuestion})
}
export function addQuestion(){
    const idList = this.data.id
    this.data.questions.push({title:"", idList, answers:[{answer:""}]})
}
export function saveAns(qIndex, aIndex){
  this.data.questions[qIndex].answers[aIndex].answer = this.$refs["answer"+qIndex+"_"+aIndex][0].value
}
export function saveQuest(qIndex){
  this.data.questions[qIndex].title = this.$refs["question"+qIndex][0].value
}

export default { incrementIndex, addAnswer, addQuestion, saveAns, saveQuest }