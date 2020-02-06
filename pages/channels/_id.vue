<template>
 <div class="container">
   <div class="chats-layout">
     <messages :messages="messages"/>
   </div>
   <div class="input-layout">
     <ChatForm />
   </div>
 </div>
</template>

<script>
import { db } from '~/plugins/firebase'
import Messages from '~/components/Messages.vue'
import ChatForm from '~/components/ChatForm.vue'

export default {
  components: {
    Messages,
    ChatForm
  },
 data () {
   return {
     messages: []
   }
 },
  mounted () {
    const channelId = this.$route.params.id
    console.log(channelId)
    db.collection('channels').doc(channelId).collection('messages').orderBy('createdAt')
    .onSnapshot((snapshot) => {
       snapshot.docChanges().forEach((change) => {
         const doc = change.doc
         if (change.type === 'added') {
           this.messages.push({id: doc.id, ...doc.data()})
         }
       })
     })
   console.log(this.messages) // 開発用に
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
