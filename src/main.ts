import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyDCDNNbNbiPYKIrZJDTX61VfudvBFWuFbE",
  authDomain: "vueautheniticationtest.firebaseapp.com",
  projectId: "vueautheniticationtest",
  storageBucket: "vueautheniticationtest.appspot.com",
  messagingSenderId: "553389616544",
  appId: "1:553389616544:web:7c050c33e86750d61f48c5",
  measurementId: "G-ZDL3VDY6ET"
};
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();

const app = createApp(App)
  .use(IonicVue)
  .use(router);
  
router.isReady().then(() => {
  app.mount('#app');
});