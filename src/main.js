import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faFilter, faG } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faGripHorizontal } from '@fortawesome/free-solid-svg-icons'
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faLocation)
library.add(faFilter)
library.add(faCaretDown)
library.add(faBook)
library.add(faPhoneAlt)
library.add(faLock)
library.add(faUser)
library.add(faMapMarkerAlt)
library.add(faGripHorizontal)
library.add(faGreaterThan)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')