// declare module 'vue-ele-form'{
//     export const install:()=>any
// }

// bingo  此时window.axios有提示啦
import { AxiosStatic } from "axios";

declare global {
  interface Window {
      axios: AxiosStatic
  }
}

export { };