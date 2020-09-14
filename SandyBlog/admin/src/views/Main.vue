<template>
  <el-container>
    <el-aside width="200px" >
      <el-menu mode="vertical" style="height:100vh" :default-active="$route.path" router>
        <el-submenu v-for="(item, index) in menu.items"
          :index="`menu-item-${index}`"
          :key="`menu-item-${index}`">
          <template slot="title">{{item.title}}</template>
          <el-menu-item v-for="(subitem, subIndex) in item.items" :key="`menu-item-${index}-${subIndex}`"
            :index="subitem.path">
              {{subitem.title}}
          </el-menu-item>
        </el-submenu>
      </el-menu>
      
    </el-aside>
    <el-container>
      <el-header height="">
       <h5>sandy后台管理界面</h5> 
      </el-header>
      <el-main height="">
       
       <router-view></router-view>
      
      </el-main>
    </el-container>
  </el-container>
  
</template>

<script lang="ts">
import { Vue,Component } from 'vue-property-decorator'

@Component({})

export default class Main extends Vue{
  menu={
    items:[
      {
        title:'内容管理',
        items:[
          {title:'首页',path:'/'},
          // {title:'新建课程',path:'/courses/create'},
          {title:'课程管理',path:'/courses/list'},
          {title:'课时管理',path:'/episodes/list'},
        ]
      },
       {
        title:'运营管理',
        items:[
          {title:'用户管理',path:'/users/list'},
        ]
      },
    ]
  }
}
</script>