<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
         <Add :addComment = "addComment"/>
         <List :comments="comments" :deleteComment= "deleteComment"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Add from './components/Add'
import List from './components/List'
export default {
  components:{
    Add,List
  },
  data(){
    return{
      comments:[
        {id:1,username:'小白',conent:'vueNB'},
        {id:1,username:'小黑',conent:'vueNB'},
        {id:1,username:'小蓝',conent:'vueNB'}
      ]
    }
  },
  methods:{
    addComment(obj){
           this.comments.unshift(obj)  
    },
     deleteComment(index){
         this.comments.splice(index,1)
     }
  }

}
</script>

<style scoped>
.reply {
  margin-top: 0px;
}
</style>
