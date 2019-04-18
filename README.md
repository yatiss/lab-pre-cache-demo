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
http://pack.nobook.com/start_package?from=XXX&&time=XXX&&sign=XXX&&type=XXX&&id=XXX
// 返回值
{
    code: 0 // 0成功, 1001 失败
    msg: "启动打包,请耐心等待"
}
```
查询请求(GET)
```bash
http://pack.nobook.com/test_check_package?time=XXX&&sign=XXX&&type=XXX&&id=XXX
// 返回值
{
    code: 0 // 0成功, 1001 失败
     data: {
               "_id" : "edf26bf0b9d27bcbd814d540e66a1de1",  // id列表md5值
               "idlist" : [ // 实验id列表
                   "95aa47b97ebf654b1d093306139d5a61"
               ],
               "type" : 3, // 1物理, 2化学 3初中生物 4高中生物
               "status" : 1,  // 0打包状态, 1打包成功, 2打包失败
               "nums" : 1,   // 打包次数
               "email" : null,
               "from" : "zuoyebang",  // 来源
               "time" : 1555584408142.0,
               "cdn" : "http://nobookcourse.oss-cn-qingdao.aliyuncs.com/zuoyebang/edf26bf0b9d27bcbd814d540e66a1de1.zip"
           }
}
```

请求参数
* from：来源id
* time：时间戳,精确到秒,如 new Date().getTime() / 1000 >> 0;
* sign：签名,生成规则为 md5(TOKEN + timestamp)
* type：学科类型: 1物理, 2化学 3初中生物 4高中生物
* id：实验id,多个实验id要用逗号隔开