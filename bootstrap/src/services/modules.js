
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


export default { incrementIndex, addAnswer, addQuestion }