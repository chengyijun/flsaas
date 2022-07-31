<template>
    <div>
        <div class="top">
            <!--            上部 内容-->
            <div class="left">
                <div class="left_1">

                </div>
                <div class="left_2">
                    <div>孙乐文</div>
                    <div>FL000001</div>
                </div>
            </div>
            <div class="right">
                <span>初诊医生：张一航</span>
                <span>|</span>
                <span>联系号码：18356202563</span>
                <span>|</span>
                <span>初诊时间：2022-03-26</span>
                <span>|</span>
                <span>欠费数目：1600.00元</span>
            </div>
        </div>

        <div class="main">
            <!--            主体 内容-->
            <el-tabs type="border-card">

                <el-tab-pane label="患者信息">患者信息</el-tab-pane>
                <el-tab-pane label="知情书">知情书</el-tab-pane>
                <el-tab-pane label="就诊信息">就诊信息</el-tab-pane>
                <el-tab-pane label="处置信息">处置信息</el-tab-pane>
                <el-tab-pane label="收费管理">收费管理</el-tab-pane>
                <el-tab-pane label="电子病例">电子病例</el-tab-pane>
                <el-tab-pane label="影像中心">影像中心</el-tab-pane>
                <el-tab-pane label="随访">随访</el-tab-pane>
                <el-tab-pane label="套餐卡券">套餐卡券</el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Recent"
    }
</script>

<style scoped>
    .top {
        display: flex;

        height: 100px;
        box-shadow: 0px 3px 6px 1px rgba(167, 167, 167, 0.1600);
    }


    .left {
        display: flex;
        position: relative;
        top: 10px;
    }

    .left_1 {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        /*background-color: red;*/
        background: url("../../assets/images/avatar.jpeg") no-repeat;
        background-size: cover;
    }

    .left_2 {
        margin-left: 14px;
    }

    .left_2 div:nth-child(1) {
        margin-top: 10px;
        font-size: 15px;
        font-family: Microsoft YaHei-Bold, Microsoft YaHei;
        font-weight: bold;
        color: #000000;
    }

    .left_2 div:nth-child(2) {
        margin-top: 12px;
        font-size: 12px;
        font-family: Microsoft YaHei-Regular, Microsoft YaHei;
        font-weight: 400;
        color: #7D8082;
    }

    .right {
        line-height: 100px;
        padding-left: 25px;
    }

    .right span {
        margin-left: 20px;
        margin-right: 20px;
        font-size: 13px;
        font-family: Microsoft YaHei-Regular, Microsoft YaHei;
        font-weight: 400;
        color: #000000;
    }

</style>