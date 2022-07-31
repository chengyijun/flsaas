<template>
  <div id="app">
    <el-container>
      <el-aside width="200px" @click.native="menuSelect">
        <img src="./assets/images/组 1.png" alt="" />
        <el-menu :default-openeds="['1', '3']">
          <el-menu-item index="1" uri="/home_page">首页</el-menu-item>
          <el-menu-item index="1" uri="/appointment">预约管理</el-menu-item>
          <el-menu-item index="1" uri="/patient_manage">患者管理</el-menu-item>
          <el-menu-item index="1" uri="/iot">物联网</el-menu-item>
          <el-menu-item index="1" uri="/image_center">影像中心</el-menu-item>
          <el-menu-item index="1" uri="/statistic">统计管理</el-menu-item>
          <el-menu-item index="1" uri="/hospital">诊所中心</el-menu-item>
          <el-menu-item index="1" uri="/spd">仓储管理</el-menu-item>
          <el-menu-item index="1" uri="/denture">义齿加工</el-menu-item>
          <el-menu-item index="1" uri="/system_log">系统日志</el-menu-item>
          <el-menu-item index="1" uri="/operation_log">操作日志</el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header>
          <div class="h_name">合肥市第一口腔</div>
          <div class="h_id">诊所ID号：10011</div>
          <div class="split"></div>
          <div class="avatar"></div>
          <span class="user">Kevin</span>
          <el-dropdown>
            <i class="el-icon-arrow-down" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <div class="logout">
            <img src="./assets/images/退出.png" alt="" />
          </div>
          <div class="logout_text">退出</div>
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style>
body {
  margin: 0;
}
html,
body,
#app,
.el-container {
  /*设置内部填充为0，几个布局元素之间没有间距*/
  padding: 0px;
  /*外部间距也是如此设置*/
  margin: 0px;
  /*统一设置高度为100%*/
  height: 100%;
  overflow-y: hidden;
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
.el-header {
  background-color: #fff;
  color: #333;
  line-height: 60px;

  box-shadow: 0px 3px 6px 1px rgba(146, 146, 146, 0.16);
}
.el-menu {
  border-right: 0 !important;
}
.el-menu-item {
  background-color: #1863de;
  color: #fff !important;
}

.is-selected {
  color: #1863de !important;
  background-color: #fff;
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

.avatar {
  width: 30px;
  height: 30px;
  margin-right: 9px;
  margin-top: 13px;
  border-radius: 50%;
  background: #1664dc;
  opacity: 1;
  background-image: url("./assets/images/avatar.jpeg");
  background-size: cover;
}

.logout {
  width: 15px;
  height: 15px;
  margin-left: 30px;
}

.logout_text {
  width: 26px;
  height: 17px;
  margin-left: 10px;
  margin-right: 20px;
  font-size: 13px;
  font-family: Microsoft YaHei-Regular, Microsoft YaHei;
  font-weight: 400;
  color: #1664dc;
}

.el-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 12px;
}

.split {
  flex: 1;
}

.user {
  width: 34px;
  height: 17px;
  font-size: 13px;
  font-family: Microsoft YaHei-Regular, Microsoft YaHei;
  font-weight: 400;
  color: #7e878d;
}
</style>

<script>
export default {
  methods: {
    menuSelect(e) {
      if (e.target.tagName == "ASIDE") {
        return;
      }
      const lis = document.querySelectorAll(".el-menu-item");
      for (const li of lis) {
        li.className = "el-menu-item";
      }
      e.target.className = "el-menu-item is-selected";
      // this.$router.push("/other");
      if (this.$route.path !== e.target.getAttribute("uri")) {
        this.$router.push(e.target.getAttribute("uri"));
      }
    },
  },
};
</script>
