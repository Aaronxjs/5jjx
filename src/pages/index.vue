<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 15:48:35
 * @LastEditTime: 2019-08-22 18:57:27
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="index">
    <Slider :sliderArr='sliderArr'/>
    <div class="content">
      <List :title="intro.title" :class="'intro'">
        <div slot="content">
          {{intro.content}}
        </div>
      </List>
      <List :title="news.title" :class="'news'">
        <div slot="content">
          <li class="news" v-for="(item, index) in news.newsTitles" :key='index'>
            <a href="#">{{item}}</a>
          </li>
        </div>
      </List>
      <List :title="contact.title" :class="'contact'">
        <div slot="content">
          <div class="title">真诚为您服务</div>
          <div class="TEL">{{'TEL:'+contact.TEL}}</div>
          <img :src='contact.imgURL' @click="nextPage"/>
        </div>
      </List>
    </div>
  </div>
</template>

<script>
import Slider from '@/components/Slider'
import List from '@/components/List'
export default {
  name: 'index',
  components: {
    Slider,
    List
  },
  data () {
    return {
      sliderArr: [
        require('@/assets/images/index_banner_1.png'),
        require('@/assets/images/index_banner_1.png'),
        require('@/assets/images/index_banner_1.png'),
        require('@/assets/images/index_banner_1.png')
      ],
      intro: {
        title: '公司简介',
        content: '本公司座于中国品牌之都(晋江),靠近泉州 晋江机场。自公司创建以来，几经商海搏击，冲 破市场重重阻力，取得不断的发展。公司十分注 重产品质量与科技创新，并聘请高级工程师及技 术员数名，拥有雄厚的技术力量，是一家专业研 制橡胶塑料机械企业赢得用是一家专业研 制橡胶塑料机械企业赢得用是一家专业研 制橡胶塑料机械企业赢得用是一家专业研 制橡胶塑料机械企业赢得用是一家专业研 制橡胶塑料机械企业赢得用是一家专业研 制橡胶塑料机械企业赢得用是一家专业研 制橡胶塑料机械企业赢得用是一家专业研 制橡胶塑料机械企业赢得用是一家专业研 制橡胶塑料机械企业赢得用'
      },
      news: {
        title: '公司动态',
        newsTitles: [
          '本公司座于中国品牌之都(晋江),靠近泉州晋江机场。自公司创建以来，几经商海搏击，冲 破市场重重阻力',
          '本公司座于中国品牌之都(晋江),靠近泉州晋江机场。自公司创建以来，几经商海搏击，冲 破市场重重阻力',
          '本公司座于中国品牌之都(晋江),靠近泉州晋江机场。自公司创建以来，几经商海搏击，冲 破市场重重阻力',
          '本公司座于中国品牌之都(晋江),靠近泉州晋江机场。自公司创建以来，几经商海搏击，冲 破市场重重阻力',
          '本公司座于中国品牌之都(晋江),靠近泉州晋江机场。自公司创建以来，几经商海搏击，冲 破市场重重阻力',
          '本公司座于中国品牌之都(晋江),靠近泉州晋江机场。自公司创建以来，几经商海搏击，冲 破市场重重阻力'
        ]
      },
      contact: {
        title: '联系我们',
        TEL: '0595-0000000',
        imgURL: require('@/assets/images/index_feedback.jpg')
      }
    }
  },
  methods: {
    nextPage () {
      this.$router.push({path: '/contact'})
    }
  },
  watch: {
    '$route' (to, from) {
      console.log(this.$route.name)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.content{
  width: 980px;
  margin: 0px auto 20px;
  /deep/ .List{
    display: inline-block;
    vertical-align: top;
    width: 30%;
    padding: 10px;
    >.title{
      border-bottom: 1px dashed #ccc;
      width: 270px;
      height: 40px;
      line-height: 40px;
      color: #e61f1f;
      font-size: 14px;
    }
    .content{
      padding: 10px 0px;
      li{
        word-break: break-all;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 24px;
      }
      .title{
        color: #e61f1f;
        font-size: 16px;
        width: 270px;
        line-height: 36px;
        font-weight: bolder;
        padding: 0px 0px 10px;
      }
      .TEL{
        color: #666;
        width: 270px;
        font-size: 14px;
        text-align: right;
        padding: 10px 0px;
      }
      img{
        cursor: pointer;
      }
    }
  }
  .intro{
    .content div{
      text-indent: 2em;
      word-break: break-all;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 6;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 2
    }
  }
  &::after{
    content: '';
    vertical-align: top;
  }
}

</style>
