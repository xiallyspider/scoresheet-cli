

var Student = require("./student.js");
var DataBase =  require("./database.js");
const readlineSync = require('readline-sync');
   //初始化数据库
var database = new DataBase()
const selection = `1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`
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
  console.log(selection)
}

function init(){
  let result =  Number(readlineSync.question(selection)) 
  let selections = [1, 2, 3]
  if (selections.includes(result)) {
    switchFunc(result)
  }
}

function switchFunc(result){
  switch (result) {
    case 1:
      append()
      break;
    case 2:
      printInfoController()
      break;
    case 3:
      Logout()
      break;
    default:
      return console.log("欢迎使用学生信息管理系统！") 
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
    init()
  } else {
    console.log('请按正确的格式输入（格式：姓名, 学号, 学科: 成绩, ...）：')
    studentInfo =  readlineSync.question(appendTip)
  }
}

function Logout () {
  console.log("退出系统")
  return false 
}

function printInfoController (student) {
  let printTip = '请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：'
  let ids =  readlineSync.question(printTip)
  var idsArr = ids.split(',')
  while ( idsArr.length < 1 ) {
    printTip = '请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：'
    ids =  readlineSync.question(printTip)
  }
  printInfo(idsArr)
  init()
}

function printInfo (idsArr) {
  var result = `成绩单
姓名|数学|语文|英语|编程|平均分|总分 
========================
`
  var mean = []
  var sum = []
  console.log(idsArr)
  for(x in idsArr){
  var info = database.getStudentInfo(idsArr[x])
  mean[x] = studentMean(info)
  sum[x] = studentSum(info)
  result += info.name +"|"+ info.mathmatic +"|"+ info.chinese +"|"+ info.english +"|"+ info.programming +"|"+ mean[x] +"|"+ sum[x] + `
`
  }
  result +=`========================
`
  result +=`全班总分平均数：` + ((sum.reduce((a,b) => a + b))/sum.length).toFixed(0) + `
`
  result +=`全班总分中位数：` + computeMedian(sum) + `
`
  console.log(result)
}
function studentSum(info){
  return Number(info.mathmatic) + Number(info.chinese) + Number(info.english) + Number(info.programming)
}
function studentMean(info){
  return ( (Number(info.mathmatic) + Number(info.chinese) + Number(info.english) + Number(info.programming))/4).toFixed(2)
}
function computeMedian(collection) {
  let median = 0
  let index = 0
  collection = collection.sort(function(a,b){
    return a-b
  })
  if(collection.length%2 != 0){
    index = parseInt(collection.length/2)
    median = collection[index]
  } else {
    index = collection.length/2
    median =(collection[index - 1] + collection[index])/2
  }
  return Number(median)
}

init()