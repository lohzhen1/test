//import './assets/main.css'


import './css/style.css' 
import './plugins/superfish/css/superfish.css' 
import './plugins/dl-menu/component.css' 
//import './plugins/font-awesome-new/css/font-awesome.min.css' 
import './plugins/elegant-font/style.css' 
import './plugins/fancybox/jquery.fancybox.css' 
import './plugins/flexslider/flexslider.css' 
import './css/style-responsive.css' 
import './css/style-custom.css' 
import './plugins/masterslider/public/assets/css/masterslider.main.css' 
import './css/master-custom.css' 

// import './js/jquery/jquery.js'
// import './js/jquery/jquery-migrate.min.js'

// import './plugins/superfish/js/superfish.js'
// import './js/hoverIntent.min.js'
// import './plugins/dl-menu/modernizr.custom.js'
// import './plugins/dl-menu/jquery.dlmenu.js'
// import './plugins/jquery.easing.js'
// import './plugins/fancybox/jquery.fancybox.pack.js'
// import './plugins/fancybox/helpers/jquery.fancybox-media.js'
// import './plugins/fancybox/helpers/jquery.fancybox-thumbs.js'
// import './plugins/flexslider/jquery.flexslider.js'
// import './plugins/jquery.isotope.min.js'
// import './js/plugins.js'
// import './plugins/jquery.transit.min.js'
// import './plugins/gdlr-portfolio/gdlr-portfolio-script.js'


import { createApp } from 'vue'
// import { createPinia } from 'pinia'
const app = createApp(App)


// <----- END OF GOOGLE MAP API-----> 
import App from './App.vue'
import router from './router'






//app.use(createPinia())
app.use(router)
app.mount('#app')

