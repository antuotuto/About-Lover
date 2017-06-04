<template>
  <div class="login">
    <header>
      <h1 >登录</h1>
      <main>
        <form class="form-login" action="/login" method="post" enctype="application/x-www-form-urlencoded" @submit.prevent="submitLogin">
          <label for="username">用户名:</label>
          <input type="text" name="username" value="" v-model="username"  placeholder="邮箱或用户名" required id="username" class="form-control" @input="submitLogin">
          <label for="password">密码:</label>
          <input type="password" name="password" value=""  v-model="password" placeholder="您的密码" required id="password" class="form-control" @input="">
          <p class="mistake" :class=" active = mistakeFasle ">{{login}}</p>
          <input type="submit" name="" value="登录" class="btn-login" >
        </form>
      </main>
    </header>
  </div>
</template>
<script>


export default {
  name: 'login',
  data () {
    return {
      username:'wangan',
      password:'qq1010100',
      login:'密码正确',
      mistakeFasle: false,
    }
  },
  methods: {
    submitLogin : function(e){
      if(username == 'wanganan' & password == 'qq1010100'){
        this.login = '密码正确';
      }else{
        this.login = '密码错误';
        this.mistakeFasle = 'true';
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped   lang="scss">
  .login{
    overflow: hidden;
    height:100%;
    width:100%;
  }
  .title {
      font-size: 20px;
      line-height: 30px;
      padding: 30px;
      text-align: center;
  }
  .form-login {
      width:100%;
      box-sizing: border-box;
      label {
          line-height: 20px;
      }
      input{
        display: block;
        border: 1px solid #eee;
        line-height: 30px;
        margin: 10px  0;
        padding: 5px;
        width:100%;
      }
  }
  header{
    height:100%;
    width:100%;
    h1{
      padding: 15px;
    }
  }
  main{
    width:100%;
    padding: 15px;
  }

  input:focus{
    outline: none;
    border: 1px solid #000;
  }
  .form-control {
      margin-bottom: 15px;
  }
  .btn-login {
    background-color: #C84771;
    color: white;
    border: 0;
    line-height: 35px;
    width:100%;
    margin: 0;
  }

  .mistake{
    color:#000;
    &.active{
      color:red;
    }
  }
</style>
