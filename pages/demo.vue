<template>
  <div>
    Hello {{ $store.state.authUser.username }}!
    <pre>I am the secret content, I am shown only when the use is connected.</pre>
    <p>
      <i>You can also refresh this page, you'll still be connected!</i>
      <nuxt-link to="/">返回登录</nuxt-link>
    </p>
    <el-button @click="logout">退出登录</el-button>
  </div>
</template>
<script>
export default {
  methods: {
    async logout() {
      try {
        await this.$store.dispatch('logout')
        this.$router.push('/')
      } catch (e) {
        this.formError = e.message
      }
    }
  }
}
</script>
