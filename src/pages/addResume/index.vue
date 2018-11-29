<template>
    <div>
        <i-button  @click="addTitle">新增标签</i-button>
        <i-modal title="编辑标题" :visible="visible"  @click="handleClose">
            
            <view>一些文本</view>
            <view>一些文本</view>
            <view>一些文本</view>
            <view>一些文本</view>
            <view>一些文本</view>
            <view>一些文本</view>
            <view>一些文本</view>
            <view>一些文本</view>
            <view>一些文本</view>
        </i-modal>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello World',
      visible: false
    }
  },
  methods: {
    addTitle:function () {
        this.visible=true;
    },
    handleClose(){
        this.visible=false;

    }
  }
}
</script>
<style scoped>
</style>