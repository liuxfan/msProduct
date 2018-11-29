<template>
    <div>
        <i-button bind:click="handleClick" type="success">Success</i-button>
        <i-button bind:click="handleClick" type="warning">Warning</i-button>
        <i-button bind:click="handleClick" type="error">Error</i-button>
        <span class="mess">{{msg}}</span>
        <ul class="list">
            <li v-for="(item,index) in list" :key="index" @click="gocontent(item.aid)">
                {{item.title}}
            </li>
        </ul>
    </div>
</template>
<script>
   export default {
    data () {
        return {
        msg: 'PPT组件'
        }
    },
    methods: {
    
  }
}
</script>
<style scoped>
.list{
    padding:15px;
}
.list li{
    height:40px;
    line-height: 40px;
    text-decoration: underline;
    overflow: hidden;

}

</style>
