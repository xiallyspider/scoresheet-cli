

var Student = require("./student.js");
var DataBase =  require("./database.js");
const readlineSync = require('readline-sync');

module.exports = () => {
 
  let result = mainSelection()
  let selections = [1, 2, 3]
  if (selections.includes(result)) {
    switchFunc(result)
  }
}

function mainSelection(){
  let selection = `1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`
 // console.log(selection)
  return Number(readlineSync.question(selection)) 
}

function switchFunc(result){
         //初始化数据库
  var database = new DataBase()
  switch (result) {
    case 1:
      append()
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
function append() {
  let studentInfoFormer = [
    { name:'姓名', value:'name' },
    { name:'学号', value:'id' },
    { name:'民族', value:'region' },
    { name:'班级', value:'class' },
    { name:'语文成绩', value:'chinese' },
    { name:'数学成绩', value:'mathmatic' },
    { name:'英语成绩', value:'english' },
    { name:'编程成绩', value:'programming' }]
  //拼接输入信息，成绩数据使用对象数组存储[{},{},{}...]
  let studentInfos = []
  let appendTip = '请输入学生姓名（必填）,按回车提交：'
  let studentInfo =  readlineSync.question(appendTip)
  studentInfos.push({attr:'name', value:studentInfo })
  for (let x = 1; x < studentInfoFormer.length; x++) {
    appendTip = '请输入学生' + studentInfoFormer[x].name +'：'
    studentInfo =  readlineSync.question(appendTip)
    if( deternimeformat(studentInfoFormer[x].value, studentInfo)) {
      studentInfos.push({attr:studentInfoFormer[x].value, value:studentInfo })
    } else {
      appendTip = '请输入学生' + studentInfoFormer[x].name +'：'
      studentInfo =  readlineSync.question(appendTip)
    }
  }
  let student = new Student(studentInfos)
  let success = database.appendInfo(student)
  if (success) {
    console.log('学生' + student.name + '的成绩被添加')
    mainSelection()
  } else {
    console.log('请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：')
    studentInfo =  readlineSync.question(appendTip)
  }
}
function deternimeformat(studentInfoFormer,studentInfo){
  switch(studentInfoFormer){
    case 'name':
    case 'region':
      let reg = [\u4e00-\u9fa5]
      if(!reg.test(studentInfo)){
        return false
      }
      break;
    case 'id':
    case 'class':
    case 'chinese':
    case 'mathmatic':
    case 'english':
    case 'programming':
      let reg = [0-9]
      if(!reg.test(studentInfo)){
        return false
      }
      break;
  }
}
