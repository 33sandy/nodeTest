# 个人博客

## web端

1. 创建vue项目

vue create web (选择默认配置)

### 1.1添加路由
 vue add router（不使用history模式的路由，先y，后选择n）

### 1.2 添加页面
1.2.1. web端先引入jquery

npm i jquery

1.2.2. 引入layer

npm i layui-layer

import layer from "layui-layer";

1.2.3 index.html引入外面jQuery
<script src="https://cdn.staticfile.org/jquery/2.0.0/jquery.min.js"></script>

### 1.3对接


# serve端

## mongo 启动

mongod --dbpath D:\worksoft\MongoDBServer4.2\data

### 初始化server服务端 ---npm init -y

在package.json scripts里，自定义命令

"serve":"nodemon index.js",   //用serve启用nodemon

没有安装可以先全局安装nodemon

npm i -g nodemon

npm i express@next mongoose cors

1.1 安装mongoose

1.2 创建db.js数据库插件  (server/plugins/db.js)

1.3 创建接口 创建routes文件放， 

1.3.1 创建后台接口文件admin，index.js(server/routes/admin/index.js)，这里写接口（增删改查）

1.3.2 创建模型 modules,前台，后台通用

# admin端，后台管理（1.基于Element UI后台，admin文件夹下操作）

# 1.创建vue项目

vue create admin

###  1.vue add element (完全引用y,都直接回车)
###  2.添加路由
 vue add router（默认配置，不使用history模式的路由，先y，后选择n）
### 3. 添加页面
 main.vue 主页面  src/views
### 3.1创建分类
 el-menu router :default-openeds="['1', '3']">  router 开启路由

    1.广告位管理 （AdEdit.vue）

    1.广告位列表  （AdList.vue）

    2. 创建心情随笔

    1.1 ***通用 CRUD 接口*** (create,remove,update,delet)

    1.2 创建个人作品

    1.3 图片上传

     npm i multer

     1.4 韶华追忆管理

    1.5  文章管理

    详情用富文本编辑器

    npm install vue-quill-editor –save
    npm install vue2-editor

    1.6 管理员

    密码散列加密
    npm i bcrypt

    ## 登录接口 （admin端做）

    1.返回token

      npm i jsonwebtoken (server文件夹下)

   1.1 服务器端检验

   1.2 服务器端检验 (http-assert) 抛出报错信息

   npm i http-assert (server文件夹下)

   1.3登录校验 中间件

   middleware

   1.4路由限制

   安装moment，处理时间格式问题


   # 项目放到服务器上运行
   ## 1.生产环境编译
   
   




