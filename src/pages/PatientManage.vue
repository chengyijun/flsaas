<template>
  <div>
    <div class="main_body">
      <div class="main_left">
        <el-tabs v-model="activeName" @tab-click="handleClick_1">
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
                <el-button type="primary" class="search_btn_1">查询</el-button>
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
            <el-table-column
              fixed="right"
              label="操作"
              width="260"
              header-align="center"
            >
              <template v-slot="scope">
                <el-button
                  @click="handleClick_2(scope.row)"
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
  </div>
</template>


<style>
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
  font-size: 14px;
  font-family: Microsoft YaHei-Bold, Microsoft YaHei;
  font-weight: bold;

  color: #696969;
}

.el-tabs__nav .is-active {
  color: #1664dc;
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

.cell .el-button--text {
  padding-left: 20px;
}
</style>



<script>
export default {
  name: "PatientManage",
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
    handleClick_1(tab, event) {
      console.log(tab, event);
    },
    handleClick_2(e) {
      console.log(e);
    },
  },
};
</script>
