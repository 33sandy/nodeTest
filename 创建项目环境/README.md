1.安装node
 二、node.js的环境变量的新建。  //我安装的路径是 D:\soft\nodejs

    其实安装完node，就自动在path里增加环境变量，但是为了以后的本地部署项目，我们需要找到node.js的安装根目录，在当中新建“node_global”和"node_cache"两个文件夹。

1、 启动cmd依次执行以下两条命令

　　npm config set prefix " D:\soft\nodejs\node_global"
　　npm config set cache " D:\soft\nodejs\node_cache"

2、 设置环境变量

　　说明：设置环境变量可以使得住任意目录下都可以使用cnpm、vue等命令，而不需要输入全路径

　　1．鼠标右键"此电脑"，选择“属性”菜单，在弹出的“系统”对话框中左侧选择“高级系统设置”，弹出“系统属性”对话框。

　　2．点击环境变量弹出下列对话框：

　　3．新增系统变量NODE_PATH：把变量值设置成“D:\soft\nodejs\node_global\node_modules” （这样就可以把后面全局安装的装到global里并且可以直接用命令使用。）

4． 修改用户变量PATH：选中PATH，点击编辑，把“D:\soft\nodejs\node_global;”加到前面

三、安装淘宝的npm镜像

　　输入npm install -g cnpm –registry=https://registry.npm.taobao.org，即可安装npm镜像，以后再用到npm的地方直接用cnpm来代替就好了。

　　这个其实看个人爱好吧，因为npm在国内下载速度是很慢，所以就用npm下载安装cnpm可以更快的下载后面的依赖等等。

四、安装全局vue-cli脚手架、webpack

命令输入

　　cnpm install vue –g  //全局安装vue

 　cnpm install -g vue-cli                        //全局安装vue-cli

　　cnpm install -g webpack                          //全局安装webpack

       cnpm install -g webpack-dev-server             //安装webpack的本地webserver

　　安装完成后，vue-cli脚手架其实就已经把vue也装掉了，所以只需输入vue  -V 和 webpack  -v  等等就可以查看安装成功与否。

# MongoDB安装
## 建议下载server型的MongoDB ms的安装版 https://www.mongodb.com/try/download/community

# 安装vue cli3
1、首先卸载旧版本（如果事先安装了vue cli1.x或者vue cli2.x，要先卸载掉）
cnpm uninstall vue-cli -g

2、node版本要要求
You are using Node v6.11.0, but this version of vue-cli requires Node >=8.9.
2.1、node版本管理
nvm 或者 n
参考：n
参考：nvm

3、安装Vue cli
cnpm install -g @vue/cli

4、查看Vue cli的版本
vue --version
应该是3.xxx
一：零配置启动/打包一个.vue文件
1、首先安装扩展
cnpm install -g @vue/cli-service-global
或者
yarn global add @vue/cli-service-global

2、安装完之后，创建一个App.vue，执行命令
vue serve App.vue
这样就可以启动这个App.vue文件了

3、打包命令
cnpm run build

二：创建一个项目
1、创建项目
vue create project（这里的project是文件名，可以根据需求自己起）

一开始只有两个选项: default(默认配置)和Manually select features(手动配置)
默认配置只有babel和eslint其他的都要自己另外再配置，所以我们选第二项手动配置。
在每次选择手动配置之后，会询问你是否保存配置，也就是图片中的koro选项，这样以后我们在进行创建项目的时候只需使用原先的配置就可以了，而不用再进行配置。
3. 选择配置：
根据项目需要来选择配置,空格键是选中与取消，A键是全选

? Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection) 
// 检查项目所需的功能:(按<space>选择，<a>切换所有，<i>反转选择）
>( ) TypeScript                                 // 支持使用 TypeScript 书写源码
 ( ) Progressive Web App (PWA) Support          // PWA 支持
 ( ) Router                                     // 支持 vue-router
 ( ) Vuex                                       // 支持 vuex
 ( ) CSS Pre-processors                         // 支持 CSS 预处理器。
 ( ) Linter / Formatter                         // 支持代码风格检查和格式化。
 ( ) Unit Testing                               // 支持单元测试。
 ( ) E2E Testing  
4. 选择css预处理器:
如果你选择了Css预处理器选项，会让你选择这个

? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default):
// 选择CSS预处理器（默认支持PostCSS，Autoprefixer和CSS模块）：
> SCSS/SASS
  LESS
  Stylus    
5. 是否使用路由的history模式：
这里我建议选No，这样打包出来丢到服务器上可以直接使用了，后期要用的话，也可以自己再开起来。选yes的话需要服务器那边再进行设置。

Use history mode for router? (Requires proper server setup for index fallback in production) 
// 路由使用history模式?(在生产环境中需要适当的服务器设置以备索引)
6. 选择Eslint代码验证规则：

> ESLint with error prevention only
  ESLint + Airbnb config
  ESLint + Standard config
  ESLint + Prettier
7. 选择什么时候进行代码规则检测：

建议选保存就检测，等到commit的时候，问题可能都已经积累很多了。
? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)
>( ) Lint on save // 保存就检测
  ( ) Lint and fix on commit // fix和commit时候检查
8. 选择e2e测试:

? Pick a E2E testing solution: (Use arrow keys)
❯ Cypress (Chrome only) 
  Nightwatch (Selenium-based) 
** 9. 把babel,postcss,eslint这些配置文件放哪：**

通常我们会选择独立放置，让package.json干净些
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? (Use arrow keys)
> In dedicated config files // 独立文件放置
  In package.json // 放package.json里
10. 是否保存配置：

Save this as a preset for future projects? (Y/n) // 是否记录一下以便下次继续使用这套配置
// 选保存之后，会让你写一个配置的名字：
Save preset as:  name // 然后你下次进入配置可以直接使用你这次的配置了
三：使用图像化界面创建/管理/运行项目
1、首先启动图形化界面
vue ui（全局命令，可以在任何文件夹下打开）


## mongo 启动

mongod --dbpath D:\worksoft\MongoDBServer4.2\data

## npm install全局卸载和本地卸载
npm uninstall -g webpack //删除全局包模块
npm uninstall webpack //删除本地包模块

## 查看本地安装的包的版本信息
npm ls webpack    //查看某个目录下的包pkg的版本信息------注意该命令一定要在某个项目下执行

npm ls webpack -g    //查看本地全局安装的包pkg的版本信息