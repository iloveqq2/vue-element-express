<template>
  <el-table :data="articles">
    <el-table-column prop="title" label="标题" width="140"></el-table-column>
    <el-table-column prop="content" label="内容" width="220"></el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <!-- {{scope.row}} -->
        <el-button @click="edit(scope.row._id)" type="text" size="small">编辑</el-button>
        <el-button @click="remove(scope.row._id)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      articles: []
    };
  },
  methods: {
    edit(id) {
      this.$router.push({name:'edit',params:{id}})
    },
    remove(id) {
      // debugger
      this.$http.delete(`articles/${id}`).then(res=>{
        if(res.status){
          this.$message({
            message: '删除成功',
            type: 'success'
          });
          this.init();
        }
      })
    },
    init() {
      this.$http.get('articles').then(res => (this.articles = res.data));
    }
  },
  created() {
    this.init();
  }
};
</script>