<template>
    <div class="card">
      <pv-tab-menu :model="items" @click="changeInterface" />
    </div>
    <div v-show="popularPosts" >
      <PopularPostsComponent></PopularPostsComponent>
    </div>
    <div v-show="ourPosts" >
      <OurPostsComponent></OurPostsComponent>
    </div>

</template>

<script>
import OurPostsComponent from "../publishing/our-posts.component.vue";
import PopularPostsComponent from "../publishing/popular-posts.component.vue";
export default {
  components:{
    OurPostsComponent,
    PopularPostsComponent
  },
  data() {
    return {
      items: [
        {
          label: 'Popular posts',
          icon: 'pi pi-fw pi-home'
        },
        {
          label: 'Our Posts',
          icon: 'pi pi-fw pi-calendar'
        }
      ],
      popularPosts:true,
      ourPosts:false
    }

  },
  methods:{
    changeInterface(){
      if(this.popularPosts===true){
        this.ourPosts=true
        this.popularPosts=false
      }else {
        this.popularPosts=true
        this.ourPosts=false
      }

    }
  }
}
</script>

<style scoped>
::v-deep(.tabmenudemo-content) {
  padding: 2rem 1rem;
}
</style>