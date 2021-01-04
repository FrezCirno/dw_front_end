<template>
  <div id="movie-querier">
    <div class="rule">
      <h1 style="margin: 55px 30px 20px">SQL执行器</h1>
      <div class="content">
        <div class="myform">
          <el-form ref="form" :model="form" label-width="150px">
            <el-form-item label="数据库">
              <el-select v-model="form.option" placeholder="数据库">
                <el-option
                  v-for="item in sql_options"
                  :key="item"
                  :label="item"
                  :value="item"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="查询语句">
              <el-input v-model="form.sql" placeholder="查询语句" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submit" :loading="listLoading">
                Search
              </el-button>
              <el-button type="info" @click="reset">Reset</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div id="result">
      <h1 style="margin: 55px 30px 20px" v-if="count >= 0">
        共查询到{{ count }}条结果
      </h1>
      <div style="display: flex; justify-content: center; margin: 0 30px">
        <el-table :data="movieData" height="550" stripe style="width: 100%">
          <el-table-column prop="asin" label="商品ID" width="150" />
          <el-table-column prop="movie" label="所属电影ID" width="150" />
          <el-table-column prop="title" label="电影名称" width="150" />
          <el-table-column prop="y" label="上映年份" width="150" />
          <el-table-column prop="m" label="上映月份" width="150" />
          <el-table-column prop="d" label="上映日期" width="150" />
          <el-table-column prop="weekday" label="星期" width="150" />
          <el-table-column prop="rating" label="评分" width="150" />
          <el-table-column
            prop="pos_review_count"
            label="好评人数"
            width="150"
          />
          <el-table-column
            prop="neg_review_count"
            label="差评人数"
            width="150"
          />
          <!-- <el-table-column prop="actor" label="演员" width="150" />
        <el-table-column prop="director" label="导演" width="150" />
        <el-table-column prop="genre" label="分类" width="150" /> -->
          <!-- <el-table-column
          prop="review_count"
          sortable
          label="评论数"
          width="150"
        />
        <el-table-column prop="release_time" sortable label="上映时间" /> -->
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { combine_any } from "@/api/movie";
import Time from "@/components/Time.vue";

export default {
  components: { Time },
  data() {
    return {
      list: null,
      listLoading: false,
      sql_options: ["mysql", "hive", "neo4j"],
      form: {
        sql: "",
        option: "",
      },
      count: 0,
      movieData: [],
    };
  },
  methods: {
    reset() {
      this.listLoading = false;
    },
    submit() {
      this.fetchData();
    },
    fetchData() {
      this.listLoading = true;
      let params = {};
      if (this.form.sql) params["sql"] = this.form.sql;
      if (this.form.option) params["option"] = this.form.option;
      combine_any(params).then((response) => {
        this.movieData = response.data.data;
        this.count = response.data.data.length;
        this.listLoading = false;
      });
    },
  },
};
</script>
