<template>
    <div>
        <div class="main_body">
            <div class="main_left">
                <el-tabs v-model="activeName" @tab-click="handleClick_1">
                    <el-tab-pane label="全部" name="first">
                        <div class="total_r" @click="goTotal">全部 (80)</div>
                        <div class="total_r" @click="goTotal">今日预约 (10)</div>
                        <div class="total_r" @click="goTotal">我的患者 (60)</div>
                        <div class="total_last" @click="goTotal">
                            <span>+新增分组</span>
                            <span>|</span>
                            <span>分组管理</span>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="最近" name="second">

                        <div @click="goRecent">患者1</div>

                    </el-tab-pane>
                </el-tabs>
            </div>
            <div class="main_right">
                <!--全部  最近  展示内容的路由区域-->
                <router-view></router-view>
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
            goRecent() {
                this.$router.push("recent")
            },
            goTotal() {
                this.$router.push("total")
            }
        },
    };
</script>
