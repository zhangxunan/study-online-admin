<template>
  <div class="container">
    <!-- <h1>在线学习平台</h1> -->
    <!-- <form v-if="!$store.state.authUser" @submit.prevent="login">
      <p v-if="formError" class="error">{{ formError }}</p>
      <p>
        <i>
          To login, use
          <b>demo</b> as username and
          <b>demo</b> as password.
        </i>
      </p>
      <p>Username:
        <el-input
          v-model="formUsername"
          name="username"
          type="text"
          placeholder="用户名"
          prefix-icon="el-icon-info"
          clearable
          autocomplete="on"
          size="small"
        ></el-input>
      </p>
      <p>Password:
        <el-input
          v-model="formPassword"
          name="password"
          type="password"
          placeholder="密码"
          prefix-icon="el-icon-info"
          clearable
          autocomplete="on"
          size="small"
        ></el-input>
      </p>
      <el-button @click="login">登录</el-button>
    </form>-->
    <!-- <div v-else>
      Hello {{ $store.state.authUser.username }}!
      <pre>您已经登录</pre>
      <el-button @click="logout">重新登录</el-button>
      <el-button @click="link2Home">进入首页</el-button>
      <NuxtLink to="/home/index">进入首页</NuxtLink>
    </div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      formError: null,
      formUsername: 'demo',
      formPassword: 'demo'
    }
  },
  mounted: function() {
    const APP = this
    if (!APP.$store.state.authUser) {
      APP.$router.push('/login')
    } else {
      APP.$router.push('/home')
    }
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch('login', {
          username: this.formUsername,
          password: this.formPassword
        })
        this.formUsername = ''
        this.formPassword = ''
        this.formError = null
      } catch (e) {
        this.formError = e.message
      }
    },
    async logout() {
      try {
        await this.$store.dispatch('logout')
      } catch (e) {
        this.formError = e.message
      }
    },
    link2Home() {
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="less">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #4498c4;
  .container-form {
    width: 375px;
    height: 400px;
    padding: 30px;
    background-color: white;
    text-align: left;
    border-radius: 4px;
    position: relative;
    margin-left: 0;
    margin-right: 0;
    zoom: 1;
    display: block;
    .container-header {
      text-align: center;
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 20px;
    }
  }
}
</style>
