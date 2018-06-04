

var Student = require("./student.js");
var DataBase =  require("./database.js");
const readlineSync = require('readline-sync');
   //初始化数据库
const database = new DataBase()
const studentInfoFormatter = [
  { name:'姓名', value:'name' },
  { name:'学号', value:'id' },
  { name:'民族', value:'region' },
  { name:'班级', value:'class' },
  { name:'语文成绩', value:'chinese' },
  { name:'数学成绩', value:'mathmatic' },
  { name:'英语成绩', value:'english' },
  { name:'编程成绩', value:'programming' }]

module.exports = function main(){
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
  switch (result) {
    case 1:
      append()
      break;
    case 2:
      break;
    case 3:
      Logout()
      break;
    default:
      let selection = `1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`
      return Number(readlineSync.question(selection)) 
      break;
  }
}
function append() {
  //拼接输入信息，成绩数据使用对象数组存储[{},{},{}...]
  let studentInfos = []

  let appendTip = '请输入学生姓名, 按回车提交：'
  let studentInfo =  readlineSync.question(appendTip)
  studentInfos.push({attr:'name', value:studentInfo })
  for (let x = 1; x < studentInfoFormatter.length; x++) {
    appendTip = '请输入学生' + studentInfoFormatter[x].name +'：'
    studentInfo =  readlineSync.question(appendTip)
    while(studentInfo == '')
    {
      appendTip = '请输入学生' + studentInfoFormatter[x].name +'：'
      studentInfo =  readlineSync.question(appendTip)
    }
    if(studentInfo != ''){
      studentInfos.push({attr:studentInfoFormatter[x].value, value:studentInfo })
    }
  }

  let student = new Student(studentInfos)
  let success = database.appendInfo(student)
  if (success) {
    console.log('学生 ' + String(student.name) + ' 的成绩被添加')
    printInfo(student)

    main()
    // let result = mainSelection()
    // let selections = [1, 2, 3]
    // if (selections.includes(result)) {
    //   switchFunc(result)
    // }
  } else {
    console.log('请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：')
    studentInfo =  readlineSync.question(appendTip)
  }
}

function Logout () {
  console.log("退出系统")
  return false 
}
function printInfo (student) {
  
}
