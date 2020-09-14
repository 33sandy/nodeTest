# 视频网站，vue+nestjs+nodejs

## 1.服务端
### 1.1创建
```
$ nest new server
```

### 1.2创建子项目,在server文件夹下
```
$ nest g app admin
```
启动并监听子项目admin变化,开发加-w
```
nest start -w admin
```
### 安装包,在server文件夹下
npm i nestjs-typegoose
npm i @typegoose/typegoose
npm i mongoose
npm i @types/mongoose
npm i nestjs-mongoose-crud
npm install --save @nestjs/swagger swagger-ui-express

## mongo 启动

```
$ mongod --dbpath D:\worksoft\MongoDBServer4.2\data
```
### 创建公用库db，然后名字可以为@libs,server文件夹
```
nest g lib db
```
创建模型,user.model.ts,course.model.ts,episode.model.ts

server文件夹，在子项目下安装模块,安装users，courses，episodes
```
nest g mo -p admin users
nest g co -p admin users
```

## 2.后台管理界面
### 1.1创建后台,server同级
```
vue create admin
```
### 添加库
```
vue add element 
vue add router
vue add typescript(先y,一直默认)
```
### 1.2.3.使用avue做通用
npm i @smallwei/avue -S

### nest做环境变量
```
npm i --save @nestjs/config
```
1.创建通用模块
nest g lib common

## 3.创建web端
### 1.1用nuxt创建项目(选js,vuetifyjs,选择axios 3个都勾上，按空格，ESlint,perttier可以选上，测试框架不需要，然后一直回车 )
```
npx create-nuxt-app web
```

### 1.2 搭建页面

### 弄服务端API
跟弄admin端API一样

### 登录，注册
#### 1.1创建auth

#### 1.2密码加密
安装
```
npm i bcryptjs
npm i -D @types/bcryptjs            //在ts中提示
```
登录验证，用passport,安装，及ts提示
```
npm i @nestjs/passport passport passport-local passport-jwt
npm i -D @types/passport @types/passport-local @types/passport-jwt
```
### 返回token,按钮jwt
```
npm i @nestjs/jwt
```

### web端登录
```
npm i @nuxtjs/auth










