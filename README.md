git add . 把代码从工作区添加到暂存区
git commit -m "提交说明" 把代码从暂存区提交到仓库
git push -u origin master(第一次这样写)
git push

1. 写一行看一下控制台 打印一行
2. ajax 看 network 载荷 如果是 404 一般是地址写错了
3. 多打印看代码执行到哪一行

找一种最好的方式 没有好的样式 效果有就行

flex 不行就上 postion:absolute;
margin 或 padding 挤一挤

1. 写一行看一行 console.log 一行
2. 尽量 CV
3. ajax 要看载荷 参数有没有传对 状态码

先静后动 先布局再考虑 js

哪些样式可以继承 color font 开头 line-开头

持久化
页面打开拿频道数据 1. 没有登录 第一次安装好 app,第一次打开的时候 只能去 ajax 中拿 2. 没有登录，但是第二次打开，有可能频道被用编辑或删除过，这样的话，从本地拿 3. 登录过 直接从 ajax 拿
编辑 删除的时候 持久化数据 1. 没有登录 把数据放本地存储 2. 登录过 用 ajax

为什么要同时使用 vuex 和本地存储?

1. vuex 数据是响应式 这个数据在项目 10 个地方要使用 如果用本地存储,需要自己手动更新所有的地方
   但是用 vuex 只要数据变了,这 10 个地方会自动更新 也有缺点 数据不能刷新
2. 本地存储可以实现持久化 使用的时候全部要手动做 麻烦

内存 硬盘

搜索是由三部分组成 : 搜索历史记录 不前搜索的关键字的相联想词列表 搜索结果 只会显示一个

基础性架构性代码

<book>
   <bookname>三国</bookname>
   <author>作者</author>
</book>

{
bookname:'三国',
author:'作者'A
}

data 英文 数据 -> data-一般是用来存数据

<div myid="123"></div>

第一点 第二点

1.先说这是什么东西 2. 好处 3. 使用场景

url?id=100 $route.query.id
url/100 $route.params.id

$router.push('/article/110')
$router.push({path:'/article/110'})
$router.push({name:article,params:{id:110},query:{id:1110}})

props 是双向的
<组件名 v-model="abc" :a.sync="a" :b.sync="b"></组件名>

打包一下 -> 变成 app

1. 项目写完了，我们就开始打包 yarn build 打包一下得到一个 dist，到时候把 dist 给公司后台
