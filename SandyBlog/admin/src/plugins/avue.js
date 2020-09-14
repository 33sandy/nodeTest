import Vue from 'vue'
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
import axios from 'axios'
window.axios = axios.create({
    baseURL:'http://localhost:3009'
  })

Vue.use(Avue);