<template>
    <div>
        
        <span class="mess">{{msg}}</span>
        <button @click="run()">触发事件</button>
        <ul>
            <li v-for="(item,index) in list" :key="index">
                {{item}}
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                msg:"我是用户组件",
                list:[]
            }
        },
        created(){
            for(var i=0;i<5;i++){
                this.list.push("我是第"+i)
            }
        },
        methods:{
            run(){
                console.log("执行方法")
            }
        }
    }
</script>
<style scoped>
.mess{
    display: block;
    width:100%;
    height:30px;
    color:red;
}
</style>
