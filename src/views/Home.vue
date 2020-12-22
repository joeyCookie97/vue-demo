<template>
  <div class="home">this is home page</div>
  <input type="text" v-model="num" />
  <p>
    vuex中state定义的变量 ======> {{ num }} changeValue ===> {{ changeValue }}
  </p>
  <button @click="updateNum">修改变量</button>
  <button @click="clickHandle">看孩子</button>
  <button @click="testMockAxios">Mock模拟数据</button>
  <div>
    数据: {{mockData}}
    <img :src="mockData.img" alt="">
  </div>
</template>

<script>
import mixin from '@/mixins/index.js'
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      inputValue: '',
      mockData: {}
    }
  },
  computed: {
    ...mapState(['num']),
    ...mapGetters(['changeValue'])
  },
  mixins: [mixin],
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter')
    next()
  },
  beforeRouteUpdate (to, from, next) {
    console.log('beforeRouteUpdate')
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('beforeRouteLeave')
    // const leave = window.confirm("are you sure leave ?")
    // if (leave) {
    next()
    // }
  },
  methods: {
    ...mapMutations(['clickHandleBtn']),
    clickHandle () {
      this.$router.push({
        name: 'child',
        params: {
          user: '胡汉池'
        }
      })
    },
    updateNum () {
      this.clickHandleBtn(99)
    },
    testMockAxios () {
      this.axios.post('/testMockAxios',).then((response) => {
        console.log(response.data.data);
        this.mockData = response.data.data
      })
    }
  }
}
</script>
