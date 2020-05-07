<template>
  <div class="app-container">
    <el-table
      :data="list"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="序号" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="驻地" width="190">
        <template slot-scope="scope">
          {{ scope.row.fields.local }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="主机" width="190">
        <template slot-scope="scope">
          {{ scope.row.fields.host }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="项目" width="90">
        <template slot-scope="scope">
          {{ scope.row.fields.project }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="上次版本" width="130">
        <template slot-scope="scope">
          {{ scope.row.fields.last_version }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="更新版本" width="130">
        <template slot-scope="scope">
          {{ scope.row.fields.new_version }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="更新时间" width="100">
        <template slot-scope="scope">
          {{ scope.row.fields.c_time }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="更新包" width="150">
        <template slot-scope="scope">
          {{ scope.row.fields.patch_file }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  data() {
    return {
      list: null
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      var vm = this;
      this.axios({
        methods:'GET',
        url:'http://10.100.6.214:8083/getbookinfo/'
      }).then(function(resp){
        vm.list = resp.data
      })
    }
  }
}


/*
import { fetchList } from '@/api/bookinfo'
export default {
  data() {
    return {
    list: null,
    }
  },
  methods: {
    fetchData() {
      fetchList().then(response => {
        this.list = response.data.items
      })
    }
  }
}
*/
</script>
