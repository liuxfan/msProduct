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
    export default{
        data(){
            return {
                msg:"我是PPT组件",
                list:[]
            }
        },
        created(){
            this.requestData();
            
        },
        methods:{
            gocontent(aid){
                // console.log(aid)
                const url = '../newscontent/main?aid='+aid
                wx.navigateTo({ url })


            },
            requestData(){
                var that=this;
                var api="http://www.phonegap100.com/appapi.php"
                wx.request({
                url: api, 
                data: {
                    a: 'getPortalList',
                    catid: '20',
                    page:1
                },
                header: {
                    'content-type': 'application/json' // 默认值
                },
                success (res) {
                    console.log(res.data)
                    that.list=res.data.result
                }
                })                                                      
            }
           
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
