# admin

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### avue上传不发送请求
1.要声明Window 
```
import { AxiosStatic } from "axios";

declare global {
  interface Window {
      axios: AxiosStatic
  }
}

export { };
### avue发送请求，路径不对
在avue.js中给值
```
import axios from 'axios'
window.axios = axios.create({
    baseURL:'http://localhost:3009'
  })


### ts监听数据变化  resource 这个就是要监听的
```
@Watch('resource')
  getC(){
    this.getOption()
    console.log("resource:" + this.resource);
  }

### row报rany错误,在tsconfig.json中加上
"noImplicitAny": false,
