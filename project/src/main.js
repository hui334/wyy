import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Swipe, SwipeItem } from 'vant'
import { Tab, Tabs } from 'vant'
import { ActionBar, ActionBarIcon, ActionBarButton } from 'vant'
import { Card } from 'vant'
import { Stepper } from 'vant'
import { Toast } from 'vant'
import { SubmitBar } from 'vant'
import { Checkbox, CheckboxGroup } from 'vant'
import { Sidebar, SidebarItem } from 'vant';
createApp(App)
.use(store)
.use(Swipe)
.use(SwipeItem)
.use(Tab)
.use(Tabs)
.use(router)
.use(ActionBar)
.use(ActionBarIcon)
.use(ActionBarButton)
.use(Card)
.use(Stepper)
.use(Toast)
.use(SubmitBar)
.use(Checkbox)
.use(CheckboxGroup)
.use(Sidebar)
.use(SidebarItem)
.mount('#app')

