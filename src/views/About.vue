<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <router-view/>
</template>
<script>
import mixin from '@/mixins/index.js'
export default {
  mixins: [
    mixin
  ]
}
</script>
