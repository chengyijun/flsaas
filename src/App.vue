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
          <div class="main_body">
            <div class="main_left">
              <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="全部" name="first">
                  <div class="total_r">全部 (80)</div>
                  <div class="total_r">今日预约 (10)</div>
                  <div class="total_r">我的患者 (60)</div>
                  <div class="total_last">
                    <span>+新增分组</span>
                    <span>|</span>
                    <span>分组管理</span>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="最近" name="second">最近</el-tab-pane>
              </el-tabs>
            </div>
            <div class="main_right">
              <div class="main_right_top">
                <el-row>
                  <el-col :span="6"
                    ><div class="grid-content bg-purple"></div>
                    <el-input size="100" placeholder="姓名/拼音/手机/病历号" />
                  </el-col>

                  <el-col :span="18"
                    ><div
                      class="grid-content bg-purple-light"
                      style="padding-left: 20px"
                    >
                      <el-button type="primary" class="search_btn_1"
                        >查询</el-button
                      >
                      <el-button class="search_btn">高级查询</el-button>
                      <el-button class="search_btn">连锁诊所病患</el-button>
                      <el-button class="search_btn">患者回收站</el-button>
                      <el-button class="search_btn">重置</el-button>
                    </div></el-col
                  >
                </el-row>
              </div>

              <div>
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
                    width="160"
                  ></el-table-column>
                  <el-table-column
                    prop="last_doctor"
                    label="上次就诊医生"
                    width="120"
                  ></el-table-column>
                  <el-table-column
                    prop="last_time"
                    label="上次就诊时间"
                    width="160"
                  ></el-table-column>
                  <el-table-column
                    prop="source"
                    label="患者来源"
                    width="120"
                  ></el-table-column>
                  <el-table-column
                    prop="create_date"
                    label="创建日期"
                    width="160"
                  ></el-table-column>

                  <!-- 右侧固定操作栏 -->
                  <el-table-column fixed="right" label="操作" width="260">
                    <template slot-scope="scope">
                      <el-button
                        @click="handleClick(scope.row)"
                        type="text"
                        size="small"
                        >预约</el-button
                      >
                      <el-button type="text" size="small">挂号</el-button>
                      <el-button type="text" size="small">复诊</el-button>
                      <el-button type="text" size="small">删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </div>
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
.el-header {
  background-color: #fff;
  color: #333;
  line-height: 60px;

  box-shadow: 0px 3px 6px 1px rgba(146, 146, 146, 0.16);
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
.main_body {
  display: flex;
  flex-direction: row;
}
.main_left {
  box-sizing: border-box;
  /* background-color: lightblue; */
  width: 300px;
  min-height: 100%;
  padding-right: 40px;
  padding-left: 40px;
}
.main_right {
  width: calc(100% - 320px);
}

.el-tabs__item {
  font-size: 30px;
  font-family: Microsoft YaHei-Bold, Microsoft YaHei;
  font-weight: bold;
  color: #1664dc;
}

.el-tabs__nav .is-active {
  font-size: 16px;
  font-weight: bold;
}
.total_r {
  margin-top: 40px;
  margin-bottom: 40px;
  /* background-color: pink; */
}
.total_last {
  display: flex;
  justify-content: space-between;
}

.main_right_top {
  margin-bottom: 20px;
  /* margin-top: 20px; */
}

.search_btn_1 {
  background-color: #1664dc !important;
  border-radius: 4px 4px 4px 4px;
  opacity: 1;
}
.search_btn {
  color: #1664dc !important;
  border-radius: 4px 4px 4px 4px;
  opacity: 1;
  border: 1px solid #1664dc !important;
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
      tableData: Array(18).fill(item),
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
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
