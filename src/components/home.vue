<template>
  <div id="home">
  	<p class="text_color">
  		{{ msg }}
  	</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'hello cxl'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import "./static/scss/home.scss";

</style>
