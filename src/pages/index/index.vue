<template>
  <div class="container" >
       <div class='resume'>
            <span>面试简历</span>
            <img src="../../../static/search.png"/>
            <img src="../../../static/add.png" style="margin-left:30rpx;" @click="addClick()" />
        </div>
        <ul class="list">
            <li v-for="(item,index) in titleList" :key="index" class="nameList">
                <span class="labelName">[{{item.labelName}}]</span>
                <span class="titleName">{{item.titleName}}</span>
                <span calss="createTime">{{item.createTime}}</span>
                <i-icon type="brush" size="24" color="#80848f" />
            </li>
        </ul>
          
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      titleList:[]
    }
  },

  components: {
    card
  },

  methods: {
    addClick:function () {
      console.log(1);
       const url = '../addResume/main'
       wx.navigateTo({ url })
                
    },
     doFindAll:function () { 
      //  var that=this;
           wx.request({
              url: 'https://zihaoapi.cn/resume/min-intro/findList',
              data: {},
              header: {'content-type':'application/json'},
              method: 'GET',
              dataType: 'json',
              responseType: 'text',
              success: (res)=>{
                console.log("aaa",res)
                  if (res.data.code == 1) {
                    this.titleList=res.data.data;
                    console.log(this.titleList)  
                  }
              },
              fail: ()=>{},
              complete: ()=>{}
          })
    }
    // bindViewTap () {
    //   const url = '../logs/main'
    //   wx.navigateTo({ url })
    // },
    // getUserInfo () {
    //   // 调用登录接口
    //   wx.login({
    //     success: () => {
    //       wx.getUserInfo({
    //         success: (res) => {
    //           this.userInfo = res.userInfo
    //         }
    //       })
    //     }
    //   })
    // },
    // clickHandle (msg, ev) {
    //   console.log('clickHandle:', msg, ev)
    // },
    // loginSuccess: function(e) {
    //   console.log(e.detail.code) // wx.login 的 code
    //   console.log(e.detail.userInfo) // wx.getUserInfo 的 userInfo
    // },
    
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.doFindAll()
  }
}
</script>

<style scoped>
.resume{
    width: 90%;
    font-size:55rpx; 
    text-align: center;
    display:inline-block;
}
.resume span{
    width: 65%;
    display: block;
    float:left;
}
.resume img{
  width:60rpx; 
  height:60rpx; 
  margin-top:10rpx;
  display: inline-block;
}
.list{
  margin-top:70rpx;
  border:1px solid#999;
  border-bottom:none;
}
.nameList{
  padding:15rpx 10rpx;
  height:110rpx;
  line-height: 110rpx;
  border-bottom:0.5rpx solid #999;
}
.labelName{
  width:190rpx;
  float: left;
  /* height: 110rpx; */
}
.titleName{
  padding:0 30rpx;
  width:190rpx;
  float: left;
  /* height: 100rpx; */
}
.createTime{
  width:190rpx;
  /* height: 100rpx; */
  float: right;
}

</style>
