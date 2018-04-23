<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/*@import "./static/sass/home.scss";*/
  #app{
    width: 100%;
    height: 100%;
  }
  .fade-enter-active,.fade-leave-active {
    transition: all .5s ease;
  }

  .fade-enter,.fade-leave-active {
    opacity: 0;
  }

</style>
