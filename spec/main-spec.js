let sinon = require("sinon");
let main = require("../lib/main");
let Grade = require("../lib/grade.js");
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
        let student = new Student('小敏','20180523','汉族',2)
        let name = student.name
        let id = student.id
        let nation = student.nation
        let klass = student.klass
        expect(name).toEqual('小敏');
        // expect(id).notEqual('20180523');
        expect(nation).toEqual('汉族');
        expect(klass).toEqual(2);
    });
});