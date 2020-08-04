### 初始化server服务端 ---npm init -y

在package.json scripts里，自定义命令

"serve":"nodemon index.js",   //用serve启用nodemon

没有安装可以先全局安装nodemon

npm i -g nodemon

npm i express@next mongoose cors

1.1 安装mongoose

npm i mongoose

1.2 创建db.js数据库插件  (server/plugins/db.js)

1.3 创建接口 创建routes文件放， 

1.3.1 创建后台接口文件admin，index.js(server/routes/admin/index.js)，这里写接口（增删改查）

1.3.2 创建模型 modules,前台，后台通用

## nodejs获取前台传的请求头header信息

nodejs 获取请求头方法

router.post('/user_list', function (req, res, next) {
	// 获取前端请求头发送过来的sessiontoken 
 	var token=req.headers.sessiontoken 
 	// 如果想要查看一下请求头都包含哪些信息，可以log一下header
 	console.log(req.headers)
})
## Assignment to constant variable.

const一般是声明常量,let声明的变量可以改变，值和类型都可以改变，没有限制,const定义变量必须赋初始值，let不需要赋初始值
可以把const 改为let

# .解决Moment格式化时间出现时区差的问题

例如，要格式的时间中带有GMT标志（GMT是零时区），要格式化为北京时间

Moment(date).utcOffset(480).format('YYYY-MM-DD HH:mm:ss');
 北京时间东八区时间，比零时区早8个小时（480分钟），所以应该加上480分钟

 ## 格式化时间
 items.forEach(function(item){
        //     moment().utcOffset(8).format()
             console.log(item.updated)
            item.updated= moment(item.updated).format("YYYY-MM-DD HH:mm:ss")
            console.log("dd:"+item.updated )
         })

# Vue中no-mixed-spaces-and-tabs错误处理
禁止使用空格和tab混合缩进；
大多数代码约定要求使用空格或 tab 进行缩进。因此，一行代码同时混有 tab 缩进和空格缩进，通常是错误的；
做法是删除报错地方的空格，再进行编译，成功通过。
