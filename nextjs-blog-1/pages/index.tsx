import Link from 'next/link'
import { GetServerSideProps, NextPage } from 'next'
import {UAParser} from 'ua-parser-js'
//服务端渲染就是服务端渲染字符串，再用模板替换成html
type Props = {
  browser:{
    name:string,
    version:string,
    major:string
  }
}
const index:NextPage<Props>=(props)=>{
  const {browser} = props
  return (
    <div className="container">
      <h1>你的浏览器是{browser.name}</h1>
    </div>
  )
}
export default index
export const getServerSideProps:GetServerSideProps = async(context)=>{
  const us = context.req.headers['user-agent']
  const result = new UAParser(us).getResult()
  return {
    props:{
      browser:result.browser
    }
  }
}
