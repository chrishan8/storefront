<template>
  <b-collapse :open="false" aria-id="login-dropdown">
    <b-button aria-controls="login-dropdown" icon-pack="fas" icon-left="user" slot="trigger"></b-button>
    <div class="notification">
      <b-tabs v-model="activeTab">
        <b-tab-item label="Login">
          <form>
            <b-field>
              <b-input type="email" placeholder="Email" :value="loginForm.email"></b-input>
            </b-field>
            <b-field>
              <b-input type="password" placeholder="Password" :value="loginForm.password"></b-input>
            </b-field>
            <div class="options">
              <b-field>
                <b-radio v-model="loginForm.rememberMe" :native-value="true">
                  Remember Me
                </b-radio>
              </b-field>
              <b-field>
                <a href="#" class="btn-forgot-password">
                  Forgot Password!
                </a>
              </b-field>
            </div>
            <b-button type="is-primary" @submit="handleLogin">
              Login
            </b-button>
          </form>
        </b-tab-item>

        <b-tab-item label="Register">
          <form>
            <b-field>
              <b-input type="email" placeholder="Email" :value="loginForm.email"></b-input>
            </b-field>
            <b-field>
              <b-input type="password" placeholder="Password" :value="loginForm.password"></b-input>
            </b-field>
            <b-field>
              <b-input type="password" placeholder="Confirm Password" :value="loginForm.passwordConfirm"></b-input>
            </b-field>
            <b-button type="is-primary" @submit="handleRegister">
              Create Account
            </b-button>
          </form>
        </b-tab-item>
      </b-tabs>
    </div>
  </b-collapse>
</template>

<script>
  export default {
    data() {
      return {
        activeTab: '',
        loginForm: {
          email: '',
          password: '',
          passwordConfirm: '',
          rememberMe: false
        }
      }
    },
    methods: {
      handleLogin() {
        console.log('submitted login form! (not really)')
      },
      handleRegister() {
        console.log('submitted registration form! (not really)')
      }
    }
  }
</script>

<style scoped lang="scss">
  .notification {
    position: absolute;
    width: 350px;
    right: calc(100% - 50px);
    padding: 1rem;
  }
  .notification .options {
    display: flex;
    justify-content: space-between;
  }
</style>