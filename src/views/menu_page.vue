<template>
  <div>
    <a-menu>
      <a-menu-item>1111</a-menu-item>
      <a-menu-item>2222</a-menu-item>
    </a-menu>
    <a-submenu>
      <template v-slot:title>
        <div>333</div>
      </template>
      <a-menu-item>333-1</a-menu-item>
      <a-menu-item>333-2</a-menu-item>
    </a-submenu>
  </div>
</template>

<script>
import MenuPage from '_c/menu'
const { AMenu, AMenuItem, ASubMenu } =  MenuPage
export default {
  components: {
    AMenu,
    AMenuItem,
    ASubMenu
  }
}

</script>
<style scoped>
</style>
