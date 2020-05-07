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
          {{ scope.row.alias_name }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="ip" width="190">
        <template slot-scope="scope">
          {{ scope.row.ip }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="主机名" width="90">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="SSH密码" width="130">
        <template slot-scope="scope">
          {{ scope.row.ssh_passwd }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="SSH端口" width="130">
        <template slot-scope="scope">
          {{ scope.row.ssh_port }}
        </template>
      </el-table-column>
      <el-table-column align="center" label="SSH用户" width="100">
        <template slot-scope="scope">
          {{ scope.row.ssh_user_name }}
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
        url:'http://10.100.6.214:8083/gethostinfo/'
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
