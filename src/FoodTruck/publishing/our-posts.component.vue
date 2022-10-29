<template>
  <div style="display: flex;justify-content: space-between;margin: 0 3rem">
    <div v-for="post in posts" >
      <pv-card style="width: 25em">
        <template #header>
          <pv-image alt="user header" :src="post.photoUrl" imageClass="product-image"
                    imageStyle="height: 15rem;border-radius: 1rem"></pv-image>
        </template>
        <template #title>
          {{ post.title}}
        </template>
        <template #footer>
          <pv-button icon="pi pi-eye" label="See more" @click="goId(post.id)" />
        </template>
      </pv-card>
    </div>
  </div>
</template>

<script>
import {PostServices} from "../services/post-services";
export default {
  name: "our-posts",
  data(){
    return{
      posts:[],
    }
  },
  methods:{
    filterMostViewedPosts(){
      let maxViews=this.posts[0].views
      let position=0
      for(let j=0;j < 3;j++){
        for(let i=0;i<this.posts.length;i++){
          if(this.posts[i].views>maxViews){
            maxViews=this.posts[i].views
            position=i
          }
        }
        this.posts.splice(position,1)
        maxViews=0
      }
    },
    goId(id){
      this.$router.push("post/"+id)
      sessionStorage.setItem("postId",id)
    }
  },
  created() {
    new PostServices().getPosts().then(response=>{
      console.log(response.data)
      this.posts=response.data
      this.filterMostViewedPosts()
    })
  }
}
</script>

<style scoped>

</style>