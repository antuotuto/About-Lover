<template>
<div class="article">
  <main>
    <p class="content">{{article.content}}</p>
  </main>
</div>
</template>
<script>
export default {
  name: 'article',
  data() {
    return {
      article: {}
    }
  },
  created() {
    this.getArticle()
  },
  methods: {
    getArticle() {
      var that = this
      var xhr = new XMLHttpRequest()
      xhr.open('GET', '/articles/' + that.$route.params.id, false)
      xhr.onreadystatechange = function(e) {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            var resData = JSON.parse(xhr.responseText)
            that.article = resData
          } else {
            console.log('error')
          }
        }
      }
      xhr.send()
    }
  }
}
</script>
