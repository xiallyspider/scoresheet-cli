module.exports = class DataBase {
  constructor(){
    this.data = []
  }
  appendInfo(student){
    var studentInfo = student;
    this.data.push(studentInfo)
    return true
  }
  getStudentInfo(studentId){
    if(this.data.length < 1){
      return "数据库中暂无数据！请添加后再进行查询。。。"
    } else {
      let result = {}
      this.data.forEach(element => {
        if(element.id === studentId){
          result = element
        }
      })
      return result
    }
  }
}