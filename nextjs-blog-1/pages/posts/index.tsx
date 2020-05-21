import { NextPage, GetStaticProps } from "next";
import { getPosts } from "lib/posts";
import Link from "next/link";
//SSG:静态页面生成
//Props就是props的类型
type Props = {
  posts:Post[]
}
const PostsIndex:NextPage<Props> = (props)=>{
  const {posts} = props
  return (
    <div>
      <h1>文章列表</h1>
      {
        posts.map(p => <h2 key={p.id}>
          <Link href={`/posts/${p.id}`}><a>{p.id}</a></Link>
          </h2>)
      }
    </div>
  )
}
export default PostsIndex

//别忘记加export
export const getStaticProps = async()=>{
  const posts= await getPosts()
  return {
    props:{
      posts
    }
  }
}
