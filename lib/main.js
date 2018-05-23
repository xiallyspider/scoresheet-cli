

var Student = require("./student.js");
var DataBase =  require("./database.js");
const readlineSync = require('readline-sync');

module.exports = () => {
  //初始化数据库
  let database = new DataBase()
  mainSelection();
}

function mainSelection(){
  let selection = `1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`
  return Number(readlineSync.question(selection)) 
  let result = mainSelection()
  let selections = [1, 2, 3]
  if (selections.includes(result)) {
    switchFunc(result)
  }
}

function switchFunc(result){
  switch (result) {
    case 1:
      let appendTip = '请输入学生信息（格式：姓名, 学号, 民族, 班级, 学科: 成绩, ...），按回车提交：'
      let studentInfo =  readlineSync.question(appendTip)
      let student = new Student(studentInfo)
      let success = database.appendInfo(student)
      if (success) {
        console.log('学生' + student.name + '的成绩被添加')
        mainSelection()
      } else {
        console.log('请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：')
        studentInfo =  readlineSync.question(appendTip)
      }
      break;
    case 2:
      break;
    case 3:
      break;
    default:
      console.log("出错啦！")
      break;
  }
}