<template>
  <el-container>
    <el-aside width="200px">
      <el-menu default-active="1-4-1"
               class="el-menu-vertical-demo">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-date"></i>
            <span slot="title">概览</span>
          </template>
          <el-menu-item index="1-1">
            <router-link to="/announcements">公告</router-link>
          </el-menu-item>
          <el-menu-item index="1-2">
            <router-link to="/">市场情况</router-link>
          </el-menu-item>
          <el-menu-item index="1-3">
            <router-link to="/">市场调研</router-link>
          </el-menu-item>
          <el-menu-item index="1-4">
            <router-link to="/">排行榜</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-time"></i>
            <span slot="title">行情</span>
          </template>
          <el-menu-item index="2-1">
            <router-link to="/stocks">股票列表</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-star-off"></i>
            <span slot="title">我的</span>
          </template>
          <el-menu-item index="3-1">
            <router-link to="/my_money">我的资金</router-link>
          </el-menu-item>
          <el-menu-item index="3-2">
            <router-link to="/my_stocks">我的股票</router-link>
          </el-menu-item>
          <el-menu-item index="3-3">
            <router-link to="/my_stock_orders">我的订单</router-link>
          </el-menu-item>
          <el-menu-item index="3-4">
            我的统计
          </el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-info"></i>
            <span slot="title">关于</span>
          </template>
          <el-menu-item index="4-1">
            <router-link to="/about">关于我们</router-link>
          </el-menu-item>
          <el-menu-item index="4-2">
            <router-link to="/features">待开发功能</router-link>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<style>
</style>