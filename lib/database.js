module.exports = class DataBase {
  constructor(){
    this.data = []
  }
  appendInfo(student){
    this.data.push(student)
    return true
  }
  printInfo(studentsId){
    let ids = studentsId.split(',')
    this.data.forEach(element => {
      if(element.id === studentId){
        return true
      }
    });
  }
}