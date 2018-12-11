<template>
  <div class="container">
       <div class='resume'>
            <span>面试简历</span>
            <img src="../../../static/search.png"/>
            <!-- <picker @change="bindPickerChange" :range="fruit" style="display:inline-block" >
                <img src="../../../static/add.png" style="margin-left:30rpx;"/>
            </picker> -->
            <img src="../../../static/add.png" @click="open=true" class="add" />
            <div class="page_select" @click="open=false">
                <navigator url="../addResume/main">
                    <div :class="open?'display_show':'display_none'">添加简介</div>
                </navigator>
                <navigator url="../counter/main">
                    <div :class="open?'display_show':'display_none'">扫一扫</div>
                </navigator>
                <navigator url="../addResume/main">
                    <div :class="open?'display_show':'display_none'">面试流程图</div>
                </navigator>
            </div>
        </div>
        <ul class="list" @click="open=false">
            <li v-for="(item,index) in titleList" :key="index" class="nameList" @click="listClick(item)">
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
      userInfo: {},
      titleList:[],
      open:false
    }
  },

  components: {
    card
  },

  methods: {
    listClick:function (val) {
      const url = '../edit/main'
      wx.navigateTo({ 
        url:`${url}?id=${val.id}`
      })
    },
    // bindPickerChange: function(e) {
    //   if (e.mp.detail.value == 0) {
    //       const url = '../addResume/main'
    //       wx.navigateTo({ url })
    //   }
    // },
    findList:function () { 
           wx.request({
              url: 'https://www.zihaoapi.cn/resume/min-intro/findList',
              data: {},
              header: {'content-type':'application/json'},
              method: 'GET',
              dataType: 'json',
              responseType: 'text',
              success: (res)=>{
                  if (res.data.code == 1) {
                    this.titleList=res.data.data;
                  }
              },
              fail: ()=>{},
              complete: ()=>{}
          })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    // clickHandle (msg, ev) {
    //   console.log('clickHandle:', msg, ev)
    // },
    loginSuccess: function(e) {
      console.log(e.detail.code) // wx.login 的 code
      console.log(e.detail.userInfo) // wx.getUserInfo 的 userInfo
    },
    
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.findList()
    wx.showShareMenu({
      withShareTicket: true
    })
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
.resume .add{
  margin-left:30rpx;
  position: relative;
}
.page_select{
  position: absolute;
  margin:10rpx;
  right: 32rpx;
  background-color:#666;
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
  border-bottom:0.5rpx solid #ccc;
}
.labelName{
  width:190rpx;
  float: left;
}
.titleName{
  padding:0 30rpx;
  width:190rpx;
  float: left;
}
.createTime{
  width:190rpx;
  float: right;
}

.display_show{
  width:300rpx;
  height:70rpx;
  display:block;
  line-height: 70rpx;
  color:#fff;
  font-size:35rpx;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /* font-weight: 600; */
  border-bottom:1px solid gray;

}
.display_none{
  display: none;

}
</style>
