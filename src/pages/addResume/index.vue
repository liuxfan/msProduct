<template>
    <div>
        <div style="border-bottom:1px solid #ccc;">
            <span class='span'>面试简历</span>
            <img src="../../../static/查找.png" style="width:60rpx; height:60rpx; margin-top:10rpx;" />
            <img src="../../../static/添加.png" style="width:60rpx; height:60rpx; margin-top:10rpx; margin-left:30rpx;" @click="addClick()" />
        </div>
        <div>
            <view style="border-bottom:1px solid #ccc;" >
                <div class='inlineBlock' style="width:40%;border-right:1px solid #ccc;">
                    <textarea style="width:99%;" bindblur="bindTextAreaBlur" auto-height placeholder="请输入类别" />
                </div>
                <div class='inlineBlock' style="width:59%;">
                    <textarea style="width:99%;" bindblur="bindTextAreaBlur" auto-height placeholder="请输入" />
                </div>
            </view>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
               meg:'新增页'
            }
        },
        methods:{
            addClick:function () {
                console.log(1);
                
            }
        }
    }
</script>
<style>
    .span{
        width: 72%;
        padding: 1%;
        font-size:60rpx; 
        text-align: center;
        display:inline-block;
    }
    .inlineBlock{
        display: inline-block
    }
</style>