<template>
  <el-main v-model="selected">
    <div class="block" style="height:400px">
      <!-- {{selected}} -->
      <div style="height:100%;width:100%" v-if="selected==0">
        <!-- 1*1布局 -->
        <el-row :gutter="10" type="flex" class="grid-one-contentheight" justify="center">
          <el-col :span="24"></el-col>
        </el-row>
      </div>
      <!-- 2*1布局 -->
      <div style="height:100%;width:100%" v-else-if="selected==1">
        <el-row :gutter="10" type="flex" class="row-bg el-row-two" justify="space-between">
          <el-col :span="12">
            <div class="grid-content "></div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content "></div>
          </el-col>
        </el-row>
      </div>
      <!-- 2*2 -->
      <div style="height:100%;width:100%" v-else-if="selected==2">
        <el-row :gutter="10" type="flex" class="row-bg" justify="center">
          <el-col :span="12">
            <div class="grid-content "></div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content "></div>
          </el-col>
        </el-row>
        <br>
        <el-row :gutter="10" type="flex" class="row-bg" justify="center">
          <el-col :span="12">
            <div class="grid-content "></div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content "></div>
          </el-col>
        </el-row>
      </div>
      <!-- 3*2布局 -->
      <div style="height:100%;width:100%" v-else-if="selected==3">
        <el-row :gutter="10" type="flex" class="row-bg" justify="center">
          <el-col :span="12">
            <div class="grid-content "></div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content "></div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content "></div>
          </el-col>
        </el-row>
        <br>
        <el-row :gutter="10" type="flex" class="row-bg" justify="center">
          <el-col :span="12">
            <div class="grid-content "></div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content "></div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content "></div>
          </el-col>
        </el-row>
      </div>
      <!-- 3*3模式 -->
      <div style="height:100%;width:100%" v-else-if="selected==4">
        <el-row :gutter="10" type="flex" class="row-bg" justify="center">
          <el-col :span="8">
            <div class="grid-a-contentWidth"></div>
          </el-col>
          <el-col :span="8">
            <div class="grid-a-contentWidth"></div>
          </el-col>
          <el-col :span="8">
            <div class="grid-a-contentWidth"></div>
          </el-col>
        </el-row>
        <br>
        <el-row :gutter="10" type="flex" class="row-bg" justify="center">
          <el-col :span="8">
            <div class="grid-a-contentWidth"></div>
          </el-col>
          <el-col :span="8">
            <div class="grid-a-contentWidth"></div>
          </el-col>
          <el-col :span="8">
            <div class="grid-a-contentWidth"></div>
          </el-col>
        </el-row>
        <br>
        <el-row :gutter="10" type="flex" class="row-bg" justify="center">
          <el-col :span="8">
            <div class="grid-a-contentWidth"></div>
          </el-col>
          <el-col :span="8">
            <div class="grid-a-contentWidth"></div>
          </el-col>
          <el-col :span="8">
            <div class="grid-a-contentWidth"></div>
          </el-col>
        </el-row>
      </div>
      <!-- 模式 -->
      <div style="height:100%;width:100%" v-else>
        <el-row :gutter="10" type="flex" class="row-bg" justify="start">
          <el-col :span="8">
            <div class="grid-a-contentWidth"></div>
          </el-col>
          <el-col :span="8">
            <div class="grid-a-contentWidth"></div>
          </el-col>
          <el-col :span="8">
            <div class="grid-a-contentWidth"></div>
          </el-col>
        </el-row>
        <br>
        <el-row :gutter="10" type="flex" class="row-bg" justify="start">
          <el-col :span="8">
            <div class="grid-a-contentWidth"></div>
            <br>
            <div class="grid-a-contentWidth"></div>
          </el-col>
          <el-col :span="16">
            <div class="grid-a-content-a-Width"></div>
          </el-col>
        </el-row>
      </div>
    </div>
  </el-main>
</template>

<script>
export default {
  data() {
    return {
      headerFixed: false,
      siderFixed: false,
      siderCollapsed: false,
      menuDatas: [
        { title: '首页', key: 'welcome', icon: 'h-icon-home' },
        { title: '查询', key: 'search', icon: 'h-icon-search' },
        { title: '收藏', key: 'favor', icon: 'h-icon-star', count: 100, children: [{ title: '收藏-1', key: 'favor2-1' }] },
        { title: '任务', icon: 'h-icon-task', key: 'task' }
      ],
      datas: [
        { icon: 'h-icon-home' },
        { title: 'Component', icon: 'h-icon-complete', route: { name: 'Component' } },
        { title: 'Breadcrumb', icon: 'h-icon-star' }
      ]
    };
  },
  watch: {
    siderFixed() {
      if (!this.siderFixed) {
        this.headerFixed = false;
      }
    }
  }
};
</script>

<style scoped>
.box-card {
  width: 400px;
  margin: 20px auto;
}
.block {
  padding: 30px 24px;
  background-color: rgb(27, 16, 16);
}
.alert-item {
  margin-bottom: 10px;
}
.tag-item {
  margin-right: 15px;
}
.link-title {
  margin-left: 35px;
}
.components-container {
  position: relative;
  height: 100vh;
}

.left-container {
  background-color: #f38181;
  height: 100%;
}

.right-container {
  background-color: #fce38a;
  height: 200px;
}

.top-container {
  background-color: #fce38a;
  width: 100%;
  height: 100%;
}

.bottom-container {
  width: 100%;
  background-color: #95e1d3;
  height: 100%;
}

.left-container-twoOne {
  background-color: rgb(110, 75, 75);
  height: 100%;
}

.container-onetoOne {
  background-color: rgb(47, 80, 74);
  height: 100%;
  width: 50%;
}

.container-onetoTwo {
  background-color: rgb(61, 19, 56);
  height: 100%;
  width: 50%;
}

.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #57926b;
}
.bg-purple {
  background: #7e2970;
}
.bg-purple-light {
  background: #071c4d;
}
.grid-content {
  background-color: rgb(44, 143, 121);
  border-radius: 4px;
  min-height: 150px;
  min-width: 100px;
}
.grid-contentB {
  background-color: rgb(64, 56, 134);
  border-radius: 4px;
  min-height: 150px;
  min-width: 100px;
}
.grid-a-contentWidth {
  background-color: rgb(44, 143, 121);
  border-radius: 4px;
  min-height: 100px;
}
.grid-a-content-a-Width {
  background-color: rgb(44, 143, 121);
  border-radius: 4px;
  min-height: 220px;
}

.grid-one-contentheight {
  background-color: rgb(44, 143, 121);
  border-radius: 4px;
  min-height: 100%;
}

.el-row-two {
  margin-bottom: 80px;
  margin-top: 80px;
}
</style>
