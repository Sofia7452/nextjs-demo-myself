import { NextPage } from "next";
import { usePosts } from "hooks/usePosts";

// useHooks可以将hooks放在一个hooks里面
//客户端渲染就是数据一开始没在页面上，是通过Ajax请求而来的
const PostsIndex:NextPage = ()=>{
  const {isLoading,isEmpty,posts} = usePosts()
  return (
    <div>
      <h1>文章列表</h1>
      {isLoading?<div>加载中</div>
      :
        isEmpty?<div>没有文章</div>
        :
        posts.map(p=><div key={p.id}>
          {p.id}
        </div>)}
    </div>
  )
}
export default PostsIndex
