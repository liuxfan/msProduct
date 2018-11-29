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
   export default {
    data () {
        return {
        msg: '用户组件'
        }
    },
    methods: {
    
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
