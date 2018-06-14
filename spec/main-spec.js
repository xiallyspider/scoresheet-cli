let sinon = require("sinon");
let main = require("../lib/main.js");
let Student = require("../lib/student.js");

describe('main()', () => {

    it('should display main menu once started', () => {
        sinon.spy(console, 'log');
        main();
        expect(console.log.args.join()).toBe(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`);
    });
});
describe('student', () => {
    it('学生基本信息应该包含：姓名、学号、民族、班级', () => {
        let student = new Student([
            {attr:'name',value:'min'},
            {attr:'id',value:'20180523'},
            {attr:'region',value:'han'},
            {attr:'class',value:2}])
        let name = student.name
        let id = student.id
        let region = student.region
        let klass = student.class
        expect(name).toEqual('min');
        expect(id).toEqual('20180523');
        expect(region).toEqual('han');
        expect(klass).toEqual(2);
    });
});