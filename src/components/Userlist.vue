<template>
<div>
  <el-row class="row-group">
    <el-col :span="6">
      <span>性别：</span>
      <el-select v-model="sex" placeholder="请选择" size="small">
        <el-option
          v-for="item in sexSource"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-col>
    <el-col :span="10">
      <span>关键词：</span>
      <div class="keyword-wrapper">
        <el-input placeholder="请输入内容" v-model="keyword" class="input-with-select" size="small">
          <el-select v-model="keywordType" slot="prepend" placeholder="请选择">
            <el-option label="姓名" value="name"></el-option>
            <el-option label="家庭地址" value="address"></el-option>
            <el-option label="联系方式" value="phone"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="fetchList"></el-button>
        </el-input>
      </div>
    </el-col>
  </el-row>
  <el-row class="row-group">
    <el-col :span="3">
      <el-button type="primary" icon="el-icon-plus" @click="addUserCard">新建病历</el-button>
    </el-col>
    <el-col :span="21" class="batch-group">
      <el-button size="mini">删除</el-button>
    </el-col>
  </el-row>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      align="left"
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      align="left"
      prop="name"
      label="姓名"
      width="180">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">{{scope.row.name}}</el-button>
      </template>
    </el-table-column>
    <el-table-column
      align="left"
      prop="address"
      label="地址">
    </el-table-column>
    <el-table-column label="操作" align="left">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-row class="row-group">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </el-row>
</div>
</template>

<style lang="stylus" scoped>
.row-group
  margin: 20px 0;
  font-size: 14px;
.el-col
  text-align: left;
.batch-group
  background: #f5f7fa;
  padding: 5px 10px;
  height: 40px;
.keyword-wrapper
  width: 250px;
  display: inline-block;
</style>

<script type="text/javascript">
import { getUserList } from '@/api/user'
export default {
  data () {
    return {
      keyword: '',
      keywordType: 'name',
      sex: '0',
      sexSource: [
        {
          label: '不限',
          value: '0'
        },
        {
          label: '男',
          value: '1'
        },
        {
          label: '女',
          value: '2'
        }
      ],
      tableData: []
    }
  },
  methods: {
    handleClick: function (row) {
      this.$router.push('/user/recordmanage?id=' + row.id)
    },
    handleEdit: function (index, row) {
      // body...
    },
    handleDelete: function (index, row) {

    },
    addUserCard: function () {
      this.$router.push('/user/adduser')
    },
    fetchList: function () {
      let params = {
        keyword: this.keyword,
        keywordType: this.keywordType,
        sex: this.sex
      }
      getUserList(params).then((res) => {
        this.tableData = res.data
      })
    }
  },
  watch: {
    sex: function () {
      this.fetchList()
    }
  },
  created () {
    this.fetchList()
  }
}
</script>
