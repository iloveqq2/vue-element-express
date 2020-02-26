<template>
  <el-form ref="form" @submit.native.prevent="saveArticle" :model="article" label-width="80px">
    <el-form-item label="文章标题">
      <el-input v-model="article.title"></el-input>
    </el-form-item>

    <el-form-item label="文章内容">
      <el-input type="textarea" v-model="article.content"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">保存</el-button>
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
    created(){
      // console.log(this.$route.params)
      this.init();
    },
    methods: {
      init(){
        this.$http.get(`articles/${this.$route.params.id}`).then(res=>{
          this.article = res.data;
        })
      },
      saveArticle() {
        this.$http.put(`articles/${this.$route.params.id}`,this.article).then(res=>{
          if(res.status==200){
            this.$message({
              message: '保存成功',
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