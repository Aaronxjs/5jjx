<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 15:48:35
 * @LastEditTime: 2019-08-23 18:32:28
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="news">
    <Bread :breadArr='breadArr'/>
    <div class="text" v-show="!!content" v-html="content"></div>
    <div class="newList text" v-show="!content">
      <li v-for="(item, index) in currentNewList" :key='index' @click="renderInfo(index)">
        <span>{{item.title}}</span>
        <span>{{'['+item.time+']'}}</span>
      </li>
    </div>
  </div>
</template>

<script>
import Bread from '@/components/Bread'
var newsList = [
  [
    {title: '11本公司座于', time: '2019-08-23', content: '11本公司座于中国品牌之都(晋江),靠近泉州晋江机场。自公司创建以来，几经商海搏击，冲破市场重重阻力，取得不断 的发展。公司十分注重产品质量与科技创新，并聘请高级工程师及技术员数名，拥有雄厚的技术力量，是一家专业研制橡胶 塑料机械企业，特别（强力加压翻转式密炼机）赢得用户的广泛赞誉和信赖，公司严格按照ISO9001:2000国际标准建立实施 的持续改进管理体系，在市场竞争中更好的满足顾客当前和未来的需求和期望。宏圣将一如既往地格守"坚持科技创新、推行 名牌战略、提供优质产品、实施一流服务"的方针和承诺。欢迎各界友人光临惠顾，真诚合作，共创辉煌。'},
    {title: '12本公司座于', time: '2019-08-23', content: '21本公司座于中国品牌之都(晋江),靠近泉州晋江机场。自公司创建以来，几经商海搏击，冲破市场重重阻力，取得不断 的发展。公司十分注重产品质量与科技创新，并聘请高级工程师及技术员数名，拥有雄厚的技术力量，是一家专业研制橡胶 塑料机械企业，特别（强力加压翻转式密炼机）赢得用户的广泛赞誉和信赖，公司严格按照ISO9001:2000国际标准建立实施 的持续改进管理体系，在市场竞争中更好的满足顾客当前和未来的需求和期望。宏圣将一如既往地格守"坚持科技创新、推行 名牌战略、提供优质产品、实施一流服务"的方针和承诺。欢迎各界友人光临惠顾，真诚合作，共创辉煌。'}
  ],
  [
    {title: '21本公司座于', time: '2019-08-23', content: '21本公司座于中国品牌之都(晋江),靠近泉州晋江机场。自公司创建以来，几经商海搏击，冲破市场重重阻力，取得不断 的发展。公司十分注重产品质量与科技创新，并聘请高级工程师及技术员数名，拥有雄厚的技术力量，是一家专业研制橡胶 塑料机械企业，特别（强力加压翻转式密炼机）赢得用户的广泛赞誉和信赖，公司严格按照ISO9001:2000国际标准建立实施 的持续改进管理体系，在市场竞争中更好的满足顾客当前和未来的需求和期望。宏圣将一如既往地格守"坚持科技创新、推行 名牌战略、提供优质产品、实施一流服务"的方针和承诺。欢迎各界友人光临惠顾，真诚合作，共创辉煌。'},
    {title: '22本公司座于', time: '2019-08-23', content: '22本公司座于中国品牌之都(晋江),靠近泉州晋江机场。自公司创建以来，几经商海搏击，冲破市场重重阻力，取得不断 的发展。公司十分注重产品质量与科技创新，并聘请高级工程师及技术员数名，拥有雄厚的技术力量，是一家专业研制橡胶 塑料机械企业，特别（强力加压翻转式密炼机）赢得用户的广泛赞誉和信赖，公司严格按照ISO9001:2000国际标准建立实施 的持续改进管理体系，在市场竞争中更好的满足顾客当前和未来的需求和期望。宏圣将一如既往地格守"坚持科技创新、推行 名牌战略、提供优质产品、实施一流服务"的方针和承诺。欢迎各界友人光临惠顾，真诚合作，共创辉煌。'}
  ]
]
var newsType = [
  {title: '企业动态'},
  {title: '行业动态'}
]
export default {
  name: 'news',
  components: {
    Bread
  },
  mounted () {
    this.init()
  },
  data () {
    return {
      content: '',
      breadArr: [
        {
          title: '新闻动态',
          to: {path: '/news/news_info', name: 'news_info', params: {id: 0, aid: 1}}
        }
      ],
      currentNewList: []
    }
  },
  methods: {
    init () {
      console.log(1222)
      this.content = ''
      var id = this.$route.params.id
      for (let i = 0; i < newsList[id].length; i++) {
        let temp = newsList[id][i]
        this.$set(this.currentNewList, i, temp)
      }
      var aid = Number(this.$route.params.aid)
      this.breadArr = [
        {
          title: '新闻动态',
          to: {path: '/news/news_info', name: 'news_info', params: {id: 0, aid: aid === 1 ? 2 : 1}}
        }
      ]
      var tempObj = {
        title: newsType[id]['title']
      }
      this.$set(this.breadArr, 1, tempObj)
    },
    renderInfo (index) {
      var id = this.$route.params.id
      var aid = Number(this.$route.params.aid)
      console.log(this.$route.params.aid)
      var tempObj1 = {
        title: newsType[id]['title'],
        to: {path: '/news/news_info', name: 'news_info', params: {id, aid: aid === 1 ? 2 : 1}}
      }
      this.$set(this.breadArr, 1, tempObj1)
      this.content = this.currentNewList[index]['content']
      var tempObj2 = {
        title: this.currentNewList[id]['title']
      }
      this.$set(this.breadArr, 2, tempObj2)
    }
  },
  watch: {
    '$route' (to, from) {
      this.init()
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/reset.scss";
.news {
  li{
    padding: 20px;
    margin: 20px auto;
    border: 1px solid #cccccc;
    border-radius: 10px;
    span{
      &:last-child{
        float: right;
      }
    }
    &:hover{
      border: 1px solid #ff0000;
    }
  }
  .text{
    padding: 5px;
    line-height: 2;
  }
}
</style>
