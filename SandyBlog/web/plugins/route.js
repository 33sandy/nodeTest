export default ({ app ,store ,redirect }) => {
    app.router.afterEach((to, from) => {
      console.log(to.path)
      const token=store.$cookies.get('auth._token.local')
    //   console.log("token:"+token)
      if(!token){
        redirect('/')
      }
    })
  }