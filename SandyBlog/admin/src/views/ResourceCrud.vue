<template>
  <div>
    <h1>{{option.title}}</h1>
    <avue-crud
      v-if="option.column"
      :data="data.data"
      :option="option"
      :page.sync="page1"
      @row-save="create"
      @row-update="undate"
      @row-del="remove"
      @size-change="sizeChange"
      @current-change="currentChange"
      @sort-change="sortChange"
      @search-change="search"
    ></avue-crud>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component({})
export default class ResourceList extends Vue {
  @Prop(String) resource !:string;

  data = {};
  option ={
    column:[]
  }
  page1 = {
    currentPage: 1,
    pageSize: 5,
    pageSizes: [5, 10, 15, 20],
    total: 0,
  };
  query: any = {
    limit: this.page1.pageSize,
    page: this.page1.currentPage,
  };
 
   async fetchOption() {    //后台获取列的参数
    const res = await this.$http.get(`${this.resource}/option`);
    // console.log(res.data);
    this.option = res.data;
  }
  async fetch() {
    const res = await this.$http.get(`${this.resource}`, {
      params: { query: this.query },
    });
    // console.log(res.data);
    this.data = res.data;
    this.page1.total = res.data.total;
  }
  async create(row, done, loading) {
    const res = await this.$http.post(`/${this.resource}`, row);
    if (res) this.$message.success("创建成功");
    this.fetch();
    done();
  }
  async undate(row, index, done, loading) {
    const data = JSON.parse(JSON.stringify(row));
    delete data.$index;
    // console.log(data);
    const res = await this.$http.put(`/${this.resource}/${row._id}`, data);
    if (res) this.$message.success("修改成功");
    this.fetch();
    done();
  }
  async remove(row) {
    this.$confirm(`是否删除'${row.name}'`, {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning",
    })
      .then(async () => {
        await this.$http.delete(`${this.resource}/${row._id}`);
        this.$message.success("删除成功");
        this.fetch();
      })
      .catch(() => {
        return;
      });
  }
  search(where, done) {
    // console.log(where);
    for (let k in where) {
      const filed = this.option.column.find((v) => v.prop === k);
      if (filed.regex) {
        where[k] = { $regex: where[k] };
      }
    }
    this.query.where = where;
    this.fetch();
    done();
  }
  sortChange(val) {
    if (!val.order) {
      this.query.sort = null;
    } else {
      this.query.sort = {
        [val.prop]: val.order === "ascending" ? 1 : -1,
      };
      this.fetch();
    }
    console.log(val.prop);
  }
  sizeChange(val) {
    this.page1.pageSize = val;
    this.query.limit = val;
    this.fetch();
    console.log("行数" + val);
  }
  currentChange(val) {
    this.page1.currentPage = val;
    this.query.page = val;
    this.fetch();
    console.log("页码" + val);
  }
  created () {
    this.fetchOption()    //server端传后台需要的参数
    this.fetch()
  }

  // 监听路由变化，然后重新获取值
  @Watch('resource')
  getC(){
    this.fetchOption()
    this.fetch()
    console.log("resource:" + this.resource);
  }
 
}
</script>

<style></style>
