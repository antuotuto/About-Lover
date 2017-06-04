<template>
  <div class="register">
    <header>
    <h1 class="title">
      注册
    </h1>
  </header>
  <main>
    <form class="form-register" action="/login" method="post" enctype="application/x-www-form-urlencoded">
      <label for="username">用户名:</label>
      <input type="text" name="username" value="" placeholder="注册邮箱或用户名" required id="username" class="form-control">
      <label for="password">密码:</label>
      <input type="password" name="password" value="" placeholder="设置密码" required id="password" class="form-control">
      <label for="password-confirm">确认密码:</label>
      <input type="password" name="password-confirm" value="" placeholder="再次输入密码" required id="password-confirm" class="form-control">
      <input type="submit" name="" value="注册" class=" btn-block btn-register">
    </form>
  </main>




  </div>
</template>

<script>


export default {
  name: 'register',
  data () {
    return {

    }
  },
  components:{  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped   lang="scss">
.register{
  padding: 30px;
  height:100%;
  width:100%;
}
.title {
    font-size: 20px;
    line-height: 30px;
}
.form-login {
    width:100%;
    box-sizing: border-box;
    label {
        line-height: 20px;
    }
}

main{
  width:100%;
}
label{
  display: block;
}
input{
  display: block;
  border: 1px solid #eee;
  line-height: 30px;
  margin:  10px  0;
  padding: 5px;
  width:100%;
}
input:focus{
  outline: none;
  border: 1px solid #000;
}
.form-control {
    margin-bottom: 15px;
}
.btn-register {
    background-color: #C84771;
    color: white;
    border: 0;
    line-height: 35px;
    padding: 5px;
    width:100%;
    margin: 30px 0;
}


</style>
