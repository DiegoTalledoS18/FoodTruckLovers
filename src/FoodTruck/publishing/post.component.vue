<template>
  <div style="display: flex;justify-content: end">
    <pv-button label="Go back" @click="goRoute('home')"></pv-button>
  </div>
  <div style="display: flex;justify-content: center">
    <pv-card style="width: 25em;">
      <template #header>
        <pv-image alt="user header" :src="post.photoUrl" imageClass="product-image"
                  imageStyle="height: 15rem;border-radius: 1rem"></pv-image>
      </template>
      <template #title>
        <h3>{{post.title}}</h3>
      </template>
      <template #subtitle>
        <h5 style="margin: 0">{{post.summary}}</h5>
      </template>
      <template #content>
        <p style="margin: 0">{{post.content}}</p>
      </template>
      <template #footer>
        <div style="display: flex; justify-content: space-between">
          <p style="margin: 0">Likes: {{post.likes}}</p>
          <pv-button icon="pi pi-check" label="Like" @click="like(post.id)" />
        </div>

      </template>
    </pv-card>
  </div>


</template>

<script>
import {PostServices} from "../services/post-services";
export default {
  name: "post",
  data(){
    return{
      post:{}
    }
  },
  methods:{
    goRoute(route){
      this.$router.push("/"+route)
    },
    like(id){
      this.post.likes=this.post.likes+1
      new PostServices().editPost(id,this.post)
    }
  },
  created() {
    new PostServices().getPost(sessionStorage.getItem("postId")).then(response=>{
      this.post=response.data
    })
  }
}
</script>

<style scoped>

</style>