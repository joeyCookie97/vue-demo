export default {
  data () {
    return {
      msg: '我是mixins里面的msg'
    }
  },
  mounted () {
    this.mixinsHello()
  },
  methods: {
    mixinsHello () {
      console.log(this.msg)
    }
  }
}
