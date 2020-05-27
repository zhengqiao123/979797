<template>
<div>
   <Myblog v-for="blog in blogs" :key="blog.id" :title="blog.title"></Myblog>
</div>
</template>

<script type="text/ecmascript-6">
import Myblog from './components/Myblog'
export default {
    components:{
        Myblog
    },
    data(){
        return{
            blogs:[
                {id:1,title:'blogone'},
                {id:2,title:'blogtwo'},
                {id:3,title:'blogthree'}
            ]
        }
    }
}
</script>

<style scoped>


</style>
