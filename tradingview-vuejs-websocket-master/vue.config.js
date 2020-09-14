module.exports = {
    devServer: {
    proxy: {
     '/socket.io': {
      target: 'www.ceexs.com/websocket',
      ws: true,
      changeOrigin: true
     },
     'sockjs-node': {
      target: 'www.ceexs.com/websocket',
      ws: false,
      changeOrigin: true
     },
    }
    
    }
   }