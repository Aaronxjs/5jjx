/* eslint-disable semi */
/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-25 15:55:53
 * @LastEditTime: 2019-08-23 19:01:51
 * @LastEditors: Please set LastEditors
 */
export default {
  data () {
    return {
      sliderArr: [],
      titleHtml: '',
      menuArr: []
    }
  },
  mounted () {
    console.log(this.$route.name)
    this.pushData(this.$route.name)
    this.$router.push(this.menuArr[0])
  },
  methods: {
    pushData (name) {
      // console.log(name)
      name = name.split('_')[0]
      var path = '/' + name + '/' + name + '_info'
      var data = {
        about: {
          sliderArr: [
            require('@/assets/images/about_banner.jpg')
          ],
          titleHtml: '<span>ABOUT</span>企业概况',
          menuArr: [
            {path, title: '企业简介', name: name + '_info', params: {id: 0}},
            {path, title: '企业文化', name: name + '_info', params: {id: 1}},
            {path, title: '企业环境', name: name + '_info', params: {id: 2}}
          ]
        },
        news: {
          sliderArr: [
            require('@/assets/images/news_banner.jpg')
          ],
          titleHtml: '<span>NEWS</span>新闻动态',
          menuArr: [
            {path, title: '企业动态', name: name + '_info', params: {id: 0, aid: 1}},
            {path, title: '行业动态', name: name + '_info', params: {id: 1, aid: 1}}
          ]
        },
        product: {
          sliderArr: [
            require('@/assets/images/product_banner.jpg')
          ],
          titleHtml: '<span>PRODUCT</span>产品中心',
          menuArr: [
            {path, title: '加压式密炼机', name: name + '_info', params: {id: 0, aid: 1}},
            {path, title: '下落料式密炼机', name: name + '_info', params: {id: 1, aid: 1}},
            {path, title: '开放式炼塑炼胶机', name: name + '_info', params: {id: 2, aid: 1}},
            {path, title: '塑料切片机', name: name + '_info', params: {id: 3, aid: 1}},
            {path, title: '冷水式出片机', name: name + '_info', params: {id: 4, aid: 1}},
            {path, title: '开放式炼胶机', name: name + '_info', params: {id: 5, aid: 1}},
            {path, title: '加电热式接片机', name: name + '_info', params: {id: 6, aid: 1}}
          ]
        },
        core: {
          sliderArr: [
            require('@/assets/images/core_banner.jpg')
          ],
          titleHtml: '<span>CORE</span>核心竞争力',
          menuArr: [
            {path, title: '服务理念', name: name + '_info', params: {id: 0}},
            {path, title: '服务承诺', name: name + '_info', params: {id: 1}},
            {path, title: '售后服务', name: name + '_info', params: {id: 2}}
          ]
        },
        human: {
          sliderArr: [
            require('@/assets/images/human_banner.jpg')
          ],
          titleHtml: '<span>HUMAN</span>人才招聘',
          menuArr: [
            {path, title: '人才战略', name: name + '_info', params: {id: 0}},
            {path, title: '招贤纳士', name: name + '_info', params: {id: 1}}
          ]
        },
        contact: {
          sliderArr: [
            require('@/assets/images/contact_banner.jpg')
          ],
          titleHtml: '<span>CONTACT</span>联系我们',
          menuArr: [
            {path, title: '联系我们', name: name + '_info', params: {id: 0}},
            {path, title: '留言反馈', name: name + '_info', params: {id: 1}}
          ]
        }
      }
      name = name.split('_')[0]
      this.sliderArr = []
      for (let i = 0; i < data[name]['sliderArr'].length; i++) {
        let tempData = data[name]['sliderArr'][i]
        this.$set(this.sliderArr, i, tempData)
      }
      this.menuArr = {}
      for (let i = 0; i < data[name]['menuArr'].length; i++) {
        let tempData = data[name]['menuArr'][i]
        this.$set(this.menuArr, i, tempData)
      }
      this.titleHtml = data[name]['titleHtml']
    }
  }
}
