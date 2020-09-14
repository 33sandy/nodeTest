<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item
          :to="item.path"
          v-for="item in items"
          :key="item.text"
          link
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-subheader class="mt-4 grey--text text--darken-1">订阅</v-subheader>
        <v-list>
          <v-list-item v-for="item in items2" :key="item.text" link>
            <v-list-item-avatar>
              <img
                :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`"
                alt=""
              />
            </v-list-item-avatar>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list-item v-if="token" link>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-lock</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1"
            >{{$store.state.auth.user.data.username}}</v-list-item-title
          >
        </v-list-item>
        <v-list-item v-else-if="!token" class="mt-4" link @click="isShowLoginForm = true">
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-lock</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1"
            >登录 </v-list-item-title
          >
        </v-list-item>
        <v-list-item v-if="token"   link>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-lock-open</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1" @click="loginout"
            >退出登录</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left color="red" dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-icon class="mx-4" large>
        mdi-youtube
      </v-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">SandyBlog</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-row align="center" style="max-width: 650px;">
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="Search..."
          single-line
          append-icon="mdi-magnify"
          color="white"
          hide-details
        ></v-text-field>
      </v-row>
    </v-app-bar>

    <v-main>
      <nuxt-child />
    </v-main>

    <v-bottom-sheet v-model="isShowLoginForm" inset >  
      <v-form class="pa-4" >
        <v-text-field v-model="loginForm.username" label="用户名" ></v-text-field>
        <v-text-field v-model="loginForm.password" label="密码" type="password" ></v-text-field>
        <v-btn color="success" @click="login">确定</v-btn>
      </v-form >
    </v-bottom-sheet>

  </v-app>
</template>

<script>
export default {
  data: () => ({
    token:'',
    isShowLoginForm:false,
    loginForm:{username:'',password:''},
    drawer: null,
    items: [
      { icon: 'mdi-home', text: '首页', path: '/' },
      { icon: 'mdi-youtube-subscription', text: '热门课程', path: '/courses' },
      { icon: 'mdi-history', text: '热门评论', path: '/comments' },
    ],
    items2: [
      { picture: 28, text: 'Joseph' },
      { picture: 38, text: 'Apple' },
      { picture: 48, text: 'Xbox Ahoy' },
      { picture: 58, text: 'Nokia' },
      { picture: 78, text: 'MKBHD' },
    ],
  }),
  
   created() {
    this.$vuetify.theme.dark = true
    this.token=this.$store.$cookies.get('auth._token.local')
    // console.log(this.$store.$cookies.get('auth._token.local'))
  },
  methods: {
     async login(){
       this.isShowLoginForm=true
      // console.log(this.loginForm)
      if(this.loginForm.username===''){
        this.$message.error('请输入用户名');
        return false;
      }
      if(this.loginForm.password===''){
        this.$message.error('请输入密码');
        return false;
      }
       try {
         const res = await this.$auth.loginWith('local', { data: this.loginForm })
         console.log(res)
         console.log("登录成功")
         this.$message.success("登录成功");
         this.isShowLoginForm=false
        } catch (e) {
          console.log(e.response.data.message)
          this.$message.error(e.response.data.message);
        }
    },
    async loginout(){
      try {
        const response = await this.$auth.logout('local')
        this.$message.success("退出登录成功");
      } catch (e) {
         console.log(e)
          // this.$message.error(e.response.data.message);
        }
      }
  },
 
}
</script>
