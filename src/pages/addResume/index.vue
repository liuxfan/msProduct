<template>
    <div>
        
            <picker @change="bindPickerChange" :value="index" :range="labelList">
                <div class="picker">
                    <i-tag color="red">
                        {{labelList[index]}}
                    </i-tag>
                    <i-icon type="unfold" size="25" color="#80848f" />
                </div>
            </picker>
        
        <button  @click="addLabelTitle" class="addLabelTitle">{{current}}</button>
        <i-modal title="编辑标题" :visible="visible"  @ok="handleConfirm" @cancel="handleClose">
             <i-radio-group  :current="current"  @change="handleChange">
                <i-radio v-for="item in titleList"  :key="item.id" :value="item.titileName">
                    {{item.titileName}}
                </i-radio>
                <i-radio>
                    <input/>
                </i-radio>
            </i-radio-group>
        </i-modal>
        <!-- <button  @click="contentTitle" class="addTitle">内容</button>
        <i-modal title="编辑内容" :visible="visible" @ok="confirm" @cancel="close">
             <i-radio-group  :current="current"  @change="change">
                <i-radio v-for="item in contentList"  :key="item" :value="item">
                    {{item}}
                </i-radio>
            </i-radio-group>
        </i-modal> -->
    </div>
</template>

<script>
export default {
  data () {
    return {
      list:'',
      inputValue:'',
      labelList:[],//标签列表
      index: 0, //下拉菜单默认项
      visible: false,
      titleList:[],//标题列表
      current:'标题',
      contentList:[],//内容列表
    }
  },
  mounted(){
      //标签列表
      wx.request({
            url: 'https://www.zihaoapi.cn/resume/min-lable/findList',
            data: {
            },
            header: {'content-type':'application/json'},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (res)=>{
                console.log("uuuuuuuuu",res)
                if (res.data.code == 1) {
                    let array=[];
                    for(var i=0;i<res.data.data.length;i++){
                        array.push(res.data.data[i].labelName);
                        this.labelList=array;
                    }
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
    // 新增标题列表
    addLabelTitle:function () {
        this.visible=true;
         wx.request({
            url: 'https://www.zihaoapi.cn/resume/min-title/findList',
            data: {
            },
            header: {'content-type':'application/json'},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (res)=>{
                console.log("qqqqqqqqqqq",res)
                if (res.data.code == 1) {
                    this.titleList=res.data.data;
                }
            },
            fail: ()=>{},
            complete: ()=>{}
        })
      
    },
    // 新增内容列表
    contentTitle:function () {
        this.visible=true;
         wx.request({
            url: 'https://www.zihaoapi.cn/resume/min-content/findFieldNameList',
            data: {
            },
            header: {'content-type':'application/json'},
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            success: (res)=>{
                console.log("内容2222222222",res.data.data)
                if (res.data.code == 1) {
                    this.contentList=res.data.data;
                    console.log(this.contentList)
                }
            },
            fail: ()=>{},
            complete: ()=>{}
        })
      
    },

    handleClose(){
        this.visible=false;
    },
    handleConfirm(){
        this.visible=false;
        // this.titleList.push(this.inputValue); 
        // console.log("77777777777",this.titleList)   
    },
    handleChange(e){
        this.current= e.mp.detail.value
    },
    bindPickerChange: function(e) {
        console.log('picker发送选择改变，携带值为', e)
        this.index=e.mp.detail.value;
    }
  },
  
}
</script>
<style scoped>
.picker{
    position: fixed;
    right:40rpx;
    top:10rpx;

}
.addLabelTitle{
    position: absolute;
    height:80rpx;
    line-height: 80rpx;
    top:80rpx;
    right:60rpx;
    font-size:38rpx;
}
.addTitle{
    position: absolute;
    width:150rpx;
    height:80rpx;
    line-height: 80rpx;
    top:180rpx;
    right:60rpx;
    font-size:38rpx;

}
</style>