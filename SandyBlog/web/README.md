# SandyBlog

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## 出现的问题
### 1.error  Delete `␍`  prettier/prettier
关掉prettier格式化，在.eslintrc.js rules中加上
"prettier/prettier": "off"
### 2. Enable vuex store by creating `store/index.js`. 
在store中创建index.js