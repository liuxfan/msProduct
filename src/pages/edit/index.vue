<template>
    <div>
        <span>{{labelName}}</span>
        <form  @submit="formSubmit" v-for="(insure,insureIndex) in minTitleList" :key="insureIndex"> 
            <view class="section" v-for="(attr,attrIndex) in insure.minContentList" :key="attrIndex" :v-model="from">
                <input :name="'['+attrIndex+']contentKey'" contentKey="contentKey" :value="attr.contentKey" autofocus placeholder="请输入" />
                <input :name="'['+attrIndex+']contentValue'" contentValue="contentValue" :value="attr.contentValue" autofocus placeholder="请输入" />
            </view>
            <view class="btn-area">
                <button form-type="submit">Submit</button>
            </view>
        </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
        labelName:'',
        minTitleList:[],
        from:{
            contentKey:'',
            contentValue:''
        }
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
    formSubmit:function(e){
        console.log('form发生了submit事件，携带数据为：', e.mp.detail.value)
        var arr = []
        for (let i in e.mp.detail.value) {
            arr.push(e.mp.detail.value[i])
        }
        console.log(arr)
    }
  }
 
  
}
</script>
<style scoped>

</style>