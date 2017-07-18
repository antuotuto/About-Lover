<template>
<div class="life">
  <list-life></list-life>
</div>
</template>

<script>
import ListLife from '@/pages/list-life.vue';

export default {
  name: 'life',
  data() {
    return {

    }
  },
  components: {
    ListLife
  }
}
</script>

<style scoped lang="scss">
.life {}
</style>
