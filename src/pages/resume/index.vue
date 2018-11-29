<template>
    <div>
        <i-button bind:click="handleClick" type="success">Success</i-button>
        <i-button bind:click="handleClick" type="warning">Warning</i-button>
        <i-button bind:click="handleClick" type="error">Error</i-button>
        <i-cell-group>
            <i-cell title="只显示箭头" is-link></i-cell>
            <i-cell title="跳转到首页" is-link url="/pages/dashboard/index"></i-cell>
            <i-cell title="只有 footer 点击有效" is-link url="/pages/dashboard/index" only-tap-footer></i-cell>
            <i-cell title="开关">
                <switch slot="footer" checked />
            </i-cell>
        </i-cell-group>

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
            msg: '简历组件'
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
