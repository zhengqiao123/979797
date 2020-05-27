<template>
<div>
  <h2>
      标题是{{title}}
      <Mybutton :title="title"></Mybutton>
  </h2>
</div>
</template>

<script type="text/ecmascript-6">
import Mybutton from './Mybutton'
export default {
    props:['title'],
    components:{
        Mybutton
    }
}
</script>

<style scoped>


</style>
