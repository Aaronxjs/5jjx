<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 15:48:35
 * @LastEditTime: 2019-08-23 14:45:27
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="about">
    <Bread :breadArr='breadArr'/>
    <div class="text" v-html="content"></div>
  </div>
</template>

<script>
import Bread from '@/components/Bread'
var articleArr = [
  {
    title: '公司简介',
    content: '1本公司座于中国品牌之都(晋江),靠近泉州晋江机场。自公司创建以来，几经商海搏击，冲破市场重重阻力，取得不断 的发展。公司十分注重产品质量与科技创新，并聘请高级工程师及技术员数名，拥有雄厚的技术力量，是一家专业研制橡胶 塑料机械企业，特别（强力加压翻转式密炼机）赢得用户的广泛赞誉和信赖，公司严格按照ISO9001:2000国际标准建立实施 的持续改进管理体系，在市场竞争中更好的满足顾客当前和未来的需求和期望。宏圣将一如既往地格守"坚持科技创新、推行 名牌战略、提供优质产品、实施一流服务"的方针和承诺。欢迎各界友人光临惠顾，真诚合作，共创辉煌。'
  },
  {
    title: '企业文化',
    content: '1本公司座于中国品牌之都(晋江),靠近泉州晋江机场。自公司创建以来，几经商海搏击，冲破市场重重阻力，取得不断 的发展。公司十分注重产品质量与科技创新，并聘请高级工程师及技术员数名，拥有雄厚的技术力量，是一家专业研制橡胶 塑料机械企业，特别（强力加压翻转式密炼机）赢得用户的广泛赞誉和信赖，公司严格按照ISO9001:2000国际标准建立实施 的持续改进管理体系，在市场竞争中更好的满足顾客当前和未来的需求和期望。宏圣将一如既往地格守"坚持科技创新、推行 名牌战略、提供优质产品、实施一流服务"的方针和承诺。欢迎各界友人光临惠顾，真诚合作，共创辉煌。'
  },
  {
    title: '企业环境',
    content: '1本公司座于中国品牌之都(晋江),靠近泉州晋江机场。自公司创建以来，几经商海搏击，冲破市场重重阻力，取得不断 的发展。公司十分注重产品质量与科技创新，并聘请高级工程师及技术员数名，拥有雄厚的技术力量，是一家专业研制橡胶 塑料机械企业，特别（强力加压翻转式密炼机）赢得用户的广泛赞誉和信赖，公司严格按照ISO9001:2000国际标准建立实施 的持续改进管理体系，在市场竞争中更好的满足顾客当前和未来的需求和期望。宏圣将一如既往地格守"坚持科技创新、推行 名牌战略、提供优质产品、实施一流服务"的方针和承诺。欢迎各界友人光临惠顾，真诚合作，共创辉煌。'
  }
]

export default {
  name: 'about',
  components: {
    Bread
  },
  mounted () {
    this.init()
  },
  data () {
    return {
      title: '',
      content: '',
      breadArr: [
        {
          title: '企业概况',
          to: {path: '/about/about_info', name: 'about_info', params: {id: 0}}
        }
      ]
    }
  },
  methods: {
    init () {
      var id = this.$route.params.id
      this.title = articleArr[id]['title']
      this.content = articleArr[id]['content']
      var tempObj = {
        title: this.title,
        to: {path: '/about/about_info', name: 'about_info', params: {id}}
      }
      this.$set(this.breadArr, 1, tempObj)
    }
  },
  watch: {
    '$route' (to, from) {
      this.init()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/css/reset.scss";
.about {
  .text{
    padding: 5px;
    line-height: 2;
  }
}
</style>
