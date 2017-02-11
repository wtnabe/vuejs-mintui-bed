import Vue    from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

import { MessageBox } from 'mint-ui'

new Vue({
  el: '#app',
  render: (h)=> {
    return MessageBox({
      title: 'Hello, MintUI !',
      message: 'Are you ready ?',
      confirmButtonText: 'OK'
    })
  }
});
