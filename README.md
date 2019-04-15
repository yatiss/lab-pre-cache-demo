# 预加载服务接口 demo

## demo运行方式
```bash
$ yarn
$ yarn start
```
或
```bash
$ npm i
$ npm start
```
访问地址 http://localhost:5555/

访问请求(GET)
```bash
http://localhost:3000/start_package?from=XXX&&time=XXX&&sign=XXX&&type=XXX&&id=XXX&&email=XXX
```
请求参数
* from：来源id
* time：时间戳,精确到秒,如 new Date().getTime() / 1000 >> 0;
* sign：签名,生成规则为 md5(TOKEN + timestamp)
* type：学科类型: 1物理, 2化学 3初中生物 4高中生物
* id：实验id,多个实验id要用逗号隔开
* email：通知邮箱