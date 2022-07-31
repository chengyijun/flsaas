import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter);

const routes = [
  {
    // 配置默认路由
    path: "", // 路由地址
    redirect: "/patient_manage", // 重定向
  },

  {
    path: "/home_page",
    name: "HomePage",
    component: () =>
      import(/* webpackChunkName: "HomePage" */ "../pages/HomePage.vue"),
  },
  {
    path: "/appointment",
    name: "Appointment",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Appointment" */ "../pages/Appointment.vue"),
  },

  {
    path: "/patient_manage",
    name: "PatinentManage",
    component: () =>
      import(
        /* webpackChunkName: "PatientMange" */ "../pages/PatientMange.vue"
      ),
  },
  {
    path: "/iot",
    name: "Iot",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Iot" */ "../pages/Iot.vue"),
  },
  {
    path: "/image_center",
    name: "ImageCenter",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "ImageCenter" */ "../pages/ImageCenter.vue"),
  },
  {
    path: "/statistic",
    name: "Statistic",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Statistic" */ "../pages/Statistic.vue"),
  },
  {
    path: "/hospital",
    name: "Hospital",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Hospital" */ "../pages/Hospital.vue"),
  },

  {
    path: "/spd",
    name: "Spd",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Spd" */ "../pages/Spd.vue"),
  },

  {
    path: "/denture",
    name: "Denture",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "Denture" */ "../pages/Denture.vue"),
  },

  {
    path: "/system_log",
    name: "SystemLog",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "SystemLog" */ "../pages/SystemLog.vue"),
  },

  {
    path: "/operation_log",
    name: "OperationLog",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "OperationLog" */ "../pages/OperationLog.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
