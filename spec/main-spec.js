let sinon = require("sinon");
let main = require("../lib/main");
let Grade = require("./grade.js");
let Student = require("./student.js");

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
        let student = new Student('小敏','20180523','汉族',2)
        let name = student.name
        let id = student.id
        let region = student.region
        let klass = student.klass
        expect(name).to.Equal('小敏');
        expect(id).not.equal(20180523);
        expect(region).to.Equal('汉族');
        expect(klass).to.Equal(2);
    });
});