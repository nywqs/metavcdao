import Vue from 'vue'
import VueI18n from 'vue-i18n'
// 引入自定义中文包
import customZH from './zh' 
// 引入自定义英文包
import customEN from './en' 

Vue.use(VueI18n)

// 创建国际化插件的实例
export default new VueI18n({
  // 指定语言类型
  locale: 'en',
  messages: {
    en: {
      ...customEN   // 将自定义英文包加入
    },
    zh: {
      ...customZH   // 将自定义中文包加入
    }
  }
})