<template>
  <div id="app">
    <el-container>
      <el-aside width="200px" @click.native="menuSelect">
        <img src="./assets/images/组 1.png" alt="" />
        <el-menu :default-openeds="['1', '3']">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="1">预约管理</el-menu-item>
          <el-menu-item index="1">患者管理</el-menu-item>
          <el-menu-item index="1">物联网</el-menu-item>
          <el-menu-item index="1">影像中心</el-menu-item>
          <el-menu-item index="1">统计管理</el-menu-item>
          <el-menu-item index="1">诊所中心</el-menu-item>
          <el-menu-item index="1">仓储管理</el-menu-item>
          <el-menu-item index="1">义齿加工</el-menu-item>
          <el-menu-item index="1">系统日志</el-menu-item>
          <el-menu-item index="1">操作日志</el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="font-size: 12px; display: flex">
          <div class="h_name">合肥市第一口腔</div>
          <div class="h_id">诊所ID号：10011</div>
          <div>图像</div>

          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>Kevin</span>

          <div>退出</div>
        </el-header>

        <el-main>
          <el-table :data="tableData">
            <el-table-column
              fixed="left"
              prop="patientName"
              label="姓名"
              width="100"
            >
            </el-table-column>
            <el-table-column
              prop="phone"
              label="手机号码"
              width="120"
            ></el-table-column>
            <el-table-column
              prop="patient_no"
              label="病历号"
              width="120"
            ></el-table-column>
            <el-table-column
              prop="age"
              label="年龄"
              width="120"
            ></el-table-column>
            <el-table-column
              prop="gender"
              label="性别"
              width="120"
            ></el-table-column>
            <el-table-column
              prop="group"
              label="分组"
              width="120"
            ></el-table-column>
            <el-table-column
              prop="doctor"
              label="初诊医生"
              width="120"
            ></el-table-column>
            <el-table-column
              prop="first_date"
              label="初诊日期"
              width="120"
            ></el-table-column>
            <el-table-column
              prop="last_doctor"
              label="上次就诊医生"
              width="120"
            ></el-table-column>
            <el-table-column
              prop="last_time"
              label="上次就诊时间"
              width="120"
            ></el-table-column>
            <el-table-column
              prop="source"
              label="患者来源"
              width="120"
            ></el-table-column>
            <el-table-column
              prop="create_date"
              label="创建日期"
              width="120"
            ></el-table-column>

            <!-- 右侧固定操作栏 -->
            <el-table-column fixed="right" label="操作" width="120">
              <template slot-scope="scope">
                <el-button
                  @click="handleClick(scope.row)"
                  type="text"
                  size="small"
                  >查看</el-button
                >
                <el-button type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
  background-color: #1863de;
}
.el-aside img {
  margin-left: 57px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.el-menu {
  border: 0;
}
.el-menu-item {
  background-color: #1863de;
  color: #fff !important;
}

.is-selected {
  color: #1863de !important;
}

.h_name {
  width: 105px;
  height: 20px;
  font-size: 15px;
  font-family: Microsoft YaHei-Bold, Microsoft YaHei;
  font-weight: bold;
  color: #1664dc;
}

.h_id {
  margin-left: 12px;
  width: 104px;
  height: 17px;
  font-size: 13px;
  font-family: Microsoft YaHei-Regular, Microsoft YaHei;
  font-weight: 400;
  color: #727272;
}
</style>

<script>
export default {
  data() {
    const item = {
      patientName: "张三",
      phone: "1317845896",
      patient_no: "9436131",
      age: 22,
      gender: "男",
      group: "vip1",
      doctor: "薛丽丽",
      first_date: "2022-3-21 09:32:02",
      last_doctor: "张明",
      last_time: "2022-3-19 08:22:00",
      source: "网络预约",
      create_date: "2022-3-19 08:22:00",
    };
    return {
      tableData: Array(12).fill(item),
    };
  },
  methods: {
    handleClick(e) {
      console.log(e);
    },

    menuSelect(e) {
      if (e.target.tagName == "ASIDE") {
        return;
      }
      const lis = document.querySelectorAll(".el-menu-item");
      for (const li of lis) {
        li.className = "el-menu-item";
      }
      e.target.className = "el-menu-item is-selected";
    },
  },
};
</script>