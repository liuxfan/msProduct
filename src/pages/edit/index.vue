<template>
    <div>
        <span>{{labelName}}</span>
        <div v-for="(insure,insureIndex) in minTitleList" :key="insureIndex">
            <div v-for="(attr,attrIndex) in insure.minContentList" :key="attrIndex">
                 <input :value="attr.contentKey" autofocus placeholder="请输入" />
                 <input :value="attr.contentValue"  autofocus placeholder="请输入" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
        labelName:'',
        minTitleList:[]
    }
  },
  onLoad:function (options) {
    wx.request({
            url: 'https://www.zihaoapi.cn/resume/min-intro/findById',
            data: {
                id:options.id
            },
            header: {'content-type':'application/json'},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (res)=>{
                console.log("uuuuuuuuu",res)
                if (res.data.code == 1) {
                    this.labelName=res.data.data.labelName;
                    this.minTitleList=res.data.data.minTitleList;
                }
            },
            fail: ()=>{},
            complete: ()=>{}
        })


      
 },
  created () {
    // 调用应用实例的方法获取全局数据
  },
  methods: {
      
    
  },
  mounted(){
     
    
    
  },
 
  
}
</script>
<style scoped>

</style>