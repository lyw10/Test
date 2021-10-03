<template>
    <div>
        <div>Login</div>
  
  <input ref="userName" type="text" placeholder="用户名"/>
  <input ref="userPassword" type="password" placeholder="密码"/>
  <button ref="loginBtn" type="submit" @click="post">登录</button>
    </div>
  
</template>

<script>
// const axios = require("axios");
import {mapActions} from 'vuex';
// import model from 'model'
export default {
    methods:{
        ...mapActions(['login']),
        post:function(e){
            e.preventDefault();
            //获取数据
            let username = this.$refs.userName.value
            let password = this.$refs.userPassword.value
            console.log(username,password)
            
            this.login({
                username,
                password
            })
            .then(
                // if(res.data.errno == 0){
                    this.$router.replace('/admin')
                // }
            )
            
            // axios({
            //     method: 'post',
            //     baseURL:'http://47.100.104.162:8000',
            //     url: '/user/login',
            //     withCredentials :true,
            //     data: {
            //         username,
            //         password
            //     }
            // })
            // .then((res) => {
            //     console.log(res.data.errno)
            //     if(res.data.errno !== 0){
            //         alert('密码错误！')
            //     }else{
            //         location.hash = '#/admin'
            //     }
            // })
            // .catch((error) => {
            //   console.log(error);
            // });
        }
    }
}
</script>

<style>

</style>