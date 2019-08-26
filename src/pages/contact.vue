<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 15:48:35
 * @LastEditTime: 2019-08-26 14:53:55
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="contact">
    <Bread :breadArr='breadArr'/>
    <div class="text" v-html="content" v-show="!!content"></div>
    <div class="feedback" v-show="!content">
      <div class="feedbackTxt">感谢大家对宏圣机械的支持，为了更好的服务客户，让我们更及时、准确、全方位、止于至善的为您服务， 您可以通过如下方式给我们留言：</div>
      <el-row>
        <el-col :span='2'>您的姓名：</el-col>
        <el-col :span='4'>
          <el-input
            placeholder="您的姓名"
            v-model="inputName"
            clearable>
          </el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span='2'>您的邮箱：</el-col>
        <el-col :span='4'>
          <el-input
            placeholder="您的邮箱"
            v-model="inputEmail"
            clearable>
          </el-input>
        </el-col>
      </el-row>
      <el-row>
        留言内容：
      </el-row>
      <el-row>
        <el-col :span='18'>
          <el-input
            type="textarea"
            placeholder="请输入内容"
            v-model="inputInfo"
            maxlength="200"
            show-word-limit
          >
          </el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="submit" :span='18'>
          <el-button @click="submitData">
            提交信息
          </el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Bread from '@/components/Bread'
var articleArr = [
  {
    title: '联系我们',
    content: '1本公司座于中国品牌之都(晋江),靠近泉州晋江机场。自公司创建以来，几经商海搏击，冲破市场重重阻力，取得不断 的发展。公司十分注重产品质量与科技创新，并聘请高级工程师及技术员数名，拥有雄厚的技术力量，是一家专业研制橡胶 塑料机械企业，特别（强力加压翻转式密炼机）赢得用户的广泛赞誉和信赖，公司严格按照ISO9001:2000国际标准建立实施 的持续改进管理体系，在市场竞争中更好的满足顾客当前和未来的需求和期望。宏圣将一如既往地格守"坚持科技创新、推行 名牌战略、提供优质产品、实施一流服务"的方针和承诺。欢迎各界友人光临惠顾，真诚合作，共创辉煌。'
  },
  {
    title: '留言反馈',
    content: '1本公司座于中国品牌之都(晋江),靠近泉州晋江机场。自公司创建以来，几经商海搏击，冲破市场重重阻力，取得不断 的发展。公司十分注重产品质量与科技创新，并聘请高级工程师及技术员数名，拥有雄厚的技术力量，是一家专业研制橡胶 塑料机械企业，特别（强力加压翻转式密炼机）赢得用户的广泛赞誉和信赖，公司严格按照ISO9001:2000国际标准建立实施 的持续改进管理体系，在市场竞争中更好的满足顾客当前和未来的需求和期望。宏圣将一如既往地格守"坚持科技创新、推行 名牌战略、提供优质产品、实施一流服务"的方针和承诺。欢迎各界友人光临惠顾，真诚合作，共创辉煌。'
  }
]

export default {
  name: 'contact',
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
          title: '联系我们',
          to: {path: '/contact/contact_info', name: 'contact_info', params: {id: 0}}
        }
      ],
      inputName: '',
      inputEmail: '',
      inputInfo: ''
    }
  },
  methods: {
    init () {
      var id = this.$route.params.id
      this.content = ''
      this.title = articleArr[id]['title']
      var tempObj = {
        title: this.title,
        to: {path: '/contact/contact_info', name: 'contact_info', params: {id}}
      }
      this.$set(this.breadArr, 1, tempObj)
      if (id === 0) {
        this.content = articleArr[id]['content']
      }
    },
    submitData () {
      console.log(this.inputName, this.inputEmail, this.inputInfo)
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
.contact {
  .text{
    padding: 5px;
    line-height: 2;
  }
  .feedback{
    padding: 5px;
    line-height: 2;
  }
  .submit{
    text-align: right;
  }
}
  /deep/ .el-row{
    margin-top: 10px;
    .el-col{
      line-height: 40px;
    }
  }
  /deep/ .el-button{
    color: #ff0000;
    border-radius: 0px 20px 0px 20px;
    border: 1px solid #ff0000;
  }
</style>
