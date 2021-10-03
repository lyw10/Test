<template>
  <nav class="flex-around">
    <div class="grade">
      <span :xValue="[$route.params.id == undefined ? $store.state.xValue = 'X' : $store.state.xValue = $route.params.id ]">{{xValue}}</span>
      /Y
    </div>
    <div>
      <a
        class="about"
        v-bind:class="{'nav-active':$route.params.id  == undefined}"
        >
          <router-link to="/about">About</router-link>
        </a>
    </div>
    <ul class="flex">
        <router-link
        v-for="item,index in projectData.header"
        :key="index"
        :class="{'nav-active': $route.params.id == index+1}"
        :to="{name:'PROJECT',params:{id:index+1}}"> {{item.title}}/ </router-link>
    </ul>
  </nav>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return{
        }
    },
    computed:{
        ...mapState({
          xValue:'xValue',
          projectData:'projectData',
        })
    },
    created(){
        //navbar加载就获取header
        this.fetchHeader()
    },
    methods:{
      ...mapActions(['fetchHeader']),
    },
        //   
    
        
        //   // console.log('route num',num)
        //   this.currentId = parseInt(num)
        //   // console.log('route currentId',this.currentId)
        //   document.documentElement.scrollTop = 0;
        //   }
        // }

        //   this.$nextTick(()=>{
        //   let skewtimer = setTimeout(() => {
        //     let headertext = document.querySelectorAll(".wrapper");
    
        //     headertext.forEach((e) => {
        //       e.classList.add("skew");
        //       e.classList.remove("no-skew");
        //     });
        //   }, 0);
    
        //   let skewtime = setTimeout(() => {
        //     let headertext = document.querySelectorAll(".wrapper");
    
        //     headertext.forEach((e) => {
        //       e.classList.add("no-skew");
        //     });
        //   }, 100);

        //   setTimeout(() => {
        //     clearTimeout(skewtimer);
        //     clearTimeout(skewtime);
        //   }, 1000);
    
        //   })
          
        // },
    //  },
}
</script>

<style scoped>
    nav {
      font-size: var(--text-nav);
      padding-top: 1rem;
      margin-bottom: 10rem;
      width: 80%;
      letter-spacing: 0.3rem;
      display: flex;
    }
    nav .grade span {
      color: var(--important);
    }
    
    nav > ul {
      width: 50%;
      flex-wrap: wrap;
    }
    nav a:hover {
      text-decoration: line-through;
    }
    .nav-active {
      color: var(--important);
      text-decoration: line-through;
    }
    
    @media screen and (max-width: 480px) {
        nav {
      font-size: var(--sm-text);
      width: 90%;
    }
    nav > ul {
      width: 70%;
      flex-wrap: wrap;
    }
    .about{
        writing-mode:vertical-rl;
    }
      .grade {
        display: none;
      }
    }

</style>