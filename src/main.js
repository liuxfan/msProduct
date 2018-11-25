import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
    config:{
        // ^为首页
        pages: ['pages/logs/main', '^pages/index/main', "pages/counter/main"
          ,'pages/addResume/main'
        ],
        window:{
            backgroundTextstyle:'light',
            navigationBarBackgroundColor:'#fff',
            NavigationBarTitleText:'WeChat',
            navigationBarTextStyle:'black'
        }
    }
}