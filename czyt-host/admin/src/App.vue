<template>
<div id="app">
  <header>
    <router-link to="/">海南残联管理系统</router-link>
  </header>

  <main>
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </main>

</div>
</template>

<script>
export default {
  data() {
    return {}
  },

  methods: {

  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}

.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity 0.3s;
}

.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}
</style>
