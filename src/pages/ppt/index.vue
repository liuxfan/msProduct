<template>
    <div>
        <div v-for="(insured,index) in dataList" :key="index">
            <div v-for="(insure,insureIndex) in insured.minTitleList" :key="insureIndex" class="list-item">
                <p class="titileName">{{insure.titileName}}</p>
                <div v-for="(attr,attrIndex) in insure.minContentList" :key="attrIndex" class="attribute">
                    {{attr.contentKey}}:{{attr.contentValue}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
   export default {
    data () {
        return {
            msg: 'PPT组件111',
            dataList:[]
        }
    },
    created () {
    // 调用应用实例的方法获取全局数据
        this.findListPPT()
  },
    methods: {
        findListPPT:function () { 
           wx.request({
              url: 'https://www.zihaoapi.cn/resume/min-intro/findListForPPT',
              data: {},
              header: {'content-type':'application/json'},
              method: 'GET',
              dataType: 'json',
              responseType: 'text',
              success: (res)=>{
                console.log("fff",res)
                  if (res.data.code == 1) {
                      console.log("dddd",res.data.data)
                      this.dataList=res.data.data;
                  }
              },
              fail: ()=>{},
              complete: ()=>{}
          })
        }
  },
  
    
}
</script>
<style scoped>
.list-item{
    font-size:40rpx;
    border:1px solid #999;
    margin:30rpx;
    font-family: "微软雅黑";
}
.list-item .titileName{
    color:#000;
    font-weight: bold;
    margin:20rpx;
}
.list-item .attribute{
    line-height: 60rpx;
    padding:15rpx 70rpx;
}

</style>
