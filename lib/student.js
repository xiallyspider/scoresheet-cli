module.exports = class Student {
  constructor(studentinfoarr){
    studentinfoarr.forEach(element => {
      switch(element.attr){
        case 'name':
          this.name = element.value
          break;
        case 'id':
          this.id = element.value
          break;
        case 'region':
          this.region = element.value
          break;
        case 'class':
          this.class = element.value
          break;
        case 'chinese':
          this.chinese = element.value
          break;
        case 'mathmatic':
          this.mathmatic = element.value
          break;
        case 'english':
          this.english = element.value
          break;
        case 'programming':
          this.programming = element.value
          break;
      }
   });
  }
}