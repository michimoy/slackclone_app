<template>
  <div class="container">
  </div>
</template>

<script>
import { firebase } from '~/plugins/firebase'
export default{
  mounted () {
    console.log(this.$store.state.user)
  },
  methods:{
    login(){
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider)
        .then((result)=>{
          const user = result.user
          console.log(user)
        }).catch((error)=>{
          window.alert(error)
        })
    }
  }
}
</script>

<style scoped>
.container {
 height: 100%;
}

.chats-layout {
 overflow: scroll;
 height: 90%;
}

.input-layout {
 height: 10%;
}

</style>
