/// <reference types="next" />
/// <reference types="next/types/global" />
// declare module "*.png"{
//   const value:string;
//   export default value;
// }
//把内容放在这里，其他所有文件都可以看见
type Post = {
  id:string;
  date:string;
  title:string;
  content:string
}
