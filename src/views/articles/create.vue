<template>
  <el-form ref="form" @submit.native.prevent="saveArticle" :model="article" label-width="80px">
    <el-form-item label="文章标题">
      <el-input v-model="article.title"></el-input>
    </el-form-item>

    <el-form-item label="文章内容">
      <el-input type="textarea" v-model="article.content"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    data() {
      return {
        
        article: {
          title:'',
          content:'',
        }
      }
    },
    methods: {
      saveArticle() {
        this.$http.post('articles',this.article).then(res=>{
          if(res.status==200){
            this.$message({
              message: '创建成功',
              type: 'success'
            });
            this.$router.push({name:'posts'})
          }
          console.log(res)
        })
        console.log('submit!');
      }
    }
  }
</script>