<template>
    <div>
        <picker @change="bindPickerChange" :value="index" :range="array">
            <div class="picker">
                {{array[index]}}<i-icon type="unfold" size="28" color="#80848f" />
            </div>
        </picker>
        <i-button  @click="addTitle" class="addTitle">新增标签</i-button>
        <i-modal title="编辑标题" :visible="visible" @ok="handleConfirm" @cancel="handleClose">
             <i-radio-group  :current="current"  @change="handleChange">
                <i-radio v-for="item in country"  :key="item.id" :value="item.value">{{item.name}}</i-radio>
                 <i-radio style="display:inline-block;"></i-radio>
                 <i-radio for="autoPay">ddd</i-radio>
                 <input style="display:inline-block;" v-model="inputValue" name="autoPay" type="text" autofocus placeholder="自定义添加" />
                 
                <!-- <div>你输入的是：{{inputValue}}</div> -->
                <!-- <input class="check-input" type="radio" id="autoPay" name="autoPay" value="1" v-model="epolicy.transfer.autoPay"/> -->
        <!-- <label for="autoPay">是</label> -->
                 
            </i-radio-group>
        </i-modal>
    </div>
</template>

<script>
export default {
  data () {
    return {
      inputValue:'',
      visible: false,
      current: '中国',
      country: [ 
        {id:0,name: 'CHN', value: '中国'},
        {id:1,name: 'USA', value: '美国'},
        {id:2,name: 'BRA', value: '巴西'},
        {id:3,name: 'JPN', value: '日本'}
      ],
    //   array: ['美国', '中国', '巴西', '日本'],
      array: [],
      objectArray: [
      {
        id: 0,
        name: '美国'
      },
      {
        id: 1,
        name: '中国'
      },
      {
        id: 2,
        name: '巴西'
      },
      {
        id: 3,
        name: '日本'
      }
    ],
    index: 1 //下拉菜单
    }
  },
  methods: {
    addTitle:function () {
        this.visible=true;
    },
    handleClose(){
        this.visible=false;
    },
    handleConfirm(){
        this.visible=false;
    },
    handleChange(e){
        this.current= e.mp.detail.value
    },
    bindPickerChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.mp.detail.value)
        this.index=e.mp.detail.value
    },
    bindKeyInput(e){
        console.log(e.mp.detail.value)
         this.inputValue=e.mp.detail.value;
         
    },
    doFindAll:function () { 
           wx.request({
              url: 'https://zihaoapi.cn/main/min-intro/findAll',
              data: {},
              header: {'content-type':'application/json'},
              method: 'GET',
              dataType: 'json',
              responseType: 'text',
              success: (res)=>{
                  if (res.data.code == 1) {
                      console.log(res.data.data.minTitleList);
                    //   this.array = res.data.data.minTitleList
                  }
              },
              fail: ()=>{},
              complete: ()=>{}
          })
       }
  },
  mounted(){
      
  },
  created () {
    // 调用应用实例的方法获取全局数据
    this.doFindAll()
  }
}
</script>
<style scoped>

</style>