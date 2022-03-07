import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messageplugin from '@/utilits/message.plugin'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

Vue.config.productionTip = false

Vue.use(messageplugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
	apiKey: 'AIzaSyCEhqcKPVFUaNveBMpsukmF_L7druQb1HU',
	authDomain: 'vuee-9da7f.firebaseapp.com',
	projectId: 'vuee-9da7f',
	storageBucket: 'vuee-9da7f.appspot.com',
	messagingSenderId: '812861962323',
	appId: '1:812861962323:web:9b1032ed84a680409e6ea6',
})

let app

firebase.auth().onAuthStateChanged(() => {
	if (!app) {
		new Vue({
			router,
			store,
			render: h => h(App),
		}).$mount('#app')
	}
})
