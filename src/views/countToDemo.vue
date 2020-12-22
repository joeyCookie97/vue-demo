<template>
  <div class="count_class">
    <count-to ref="countTo" :end-val="endVal" :className="getClass">
      <template v-slot:left>
        <span class="prefix-style">总金额： </span>
      </template>
      <template v-slot:right>
        <span> 元</span>
      </template>
    </count-to>
  </div>
</template>
<script>
import CountTo from "@/components/count/count.vue";
export default {
  name: "count_to",
  components: {
    CountTo,
  },
  data() {
    return {
      endVal: 1000.65265,
    };
  },
  computed: {
    // 返回自定义样式
    getClass() {
      return ["count-to-number"];
    },
  },
};
</script>
<style>
.count_class {
  margin-top: 50px;
}

.count-to-number {
  font-size: 8em;
  color: #4d63bc;
  font-weight: 300;
}

.prefix-style {
  font-size: 2em;
}
</style>
