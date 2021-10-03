<template>
    <div>
        <div>Admin</div>
        <input ref="newheadertitle" type="text" placeholder="header title"/>
        <input ref="newheadervideo" type="text" placeholder="header video link"/>
        <input ref="newheadercontent" type="text" placeholder="header content"/>
        <button  type="submit" @click="newHeaderPost">Submit</button>
    </div>
  
</template>

<script>
import {mapState,mapActions} from 'vuex'
// const axios = require("axios");
export default {
    computed:{
        // ...mapState({
        //   projectData:'projectData',
        // })
    },
    created(){
        console.log('admin created');
        
    },
    mounted(){
        //navbar加载就获取header
        // this.fetchHeader(),
        // this.fetchMain()
    },
    methods:{
    //   ...mapActions(['fetchHeader','fetchMain']),
    ...mapActions(['newHeader']),
      newHeaderPost:function(){
        let title = this.$refs.newheadertitle.value;
        let video = this.$refs.newheadervideo.value;
        let content = this.$refs.newheadercontent.value;
        console.log(title,video,content)
          
          this.newHeader({
                title,
                video,
                content
          })
        title = ''
        video = ''
        content = ''
        //   .then((res)=>console.log(res))
        //   .catch((error)=>console.log(error))
        //   axios({
        //         method: 'post',
        //         baseURL:'http://47.100.104.162:8000',
        //         url: '/newHeader',
        //         // withCredentials: false,
        //         data: {
        //             "title":newHeaderTitle,
        //             "video":newHeaderVideo,
        //             "content":newHeaderContent
        //         }
        //     })
        //     .then((res) => {
        //         console.log(res.data.errno)
        //         if(res.data.errno !== 0){
        //             alert('请登录再操作！')
        //             // location.hash = '#/login'
        //         }
        //     })
        //     .catch((error) => {
        //       console.log(error);
        //     });
        }
    }
}
</script >

<style scoped>
 button{
        background:red;
    }

</style>