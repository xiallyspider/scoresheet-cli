module.exports = class DataBase {
  constructor(){
    this.data = []
  }
  appendInfo(studentInfo){
    this.data.push(studentInfo)
  }
  printInfo(studentsId){
    let ids = studentsId.split(',')
    this.data.forEach(element => {
      if(element.id === studentId){
        return 
      }
    });
  }
}