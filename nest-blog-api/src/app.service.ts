import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  index() {
    var a=[{name:'zhangsan',age:12},{name:'linda',age:12}]
    return a;
  }
  user() {
    var a=[{name:'zhangsan1',age:13},{name:'linda1',age:13}]
    return a;
  }
}
