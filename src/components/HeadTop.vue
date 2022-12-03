
<script setup>
import  {RouterLink}  from 'vue-router';
import { ref, onMounted, reactive} from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute().path 


const head = ref()
const logo = ref()
const nav = ref()
const topNav = ref()
const authenticate = ref()
const bottomNav = ref()
const propertyBtn =ref() 
const home = ref()
const closeToggle = ref()
const toggleBtn = ref()
const hr = ref()
const hr1 = ref()

function toggleHamburger(e){  
    console.log(topNav.value.id) 
    if(nav.value.className =="nav"){
        closeToggle.value.style =`display:block; color:#fff; cursor:pointer;`
        toggleBtn.value.style.display = "none"
        logo.value.style = `
                            margin: 0;
                                `
        nav.value.className = "response"
        head.value.style = `
        display:block; 
        background-color:#3b444b;
        padding:10px 20px;
        `
        topNav.value.style.display = "block"

        home.value.firstElementChild.style = `display:block;
                                        margin: 10px 0px`

        topNav.value.firstElementChild.style = `display:block;
                                        margin: 8px 0px`

        authenticate.value.style.display = "block"
        authenticate.value.firstElementChild.style = `padding:0; margin-bottom: 10px;`
        authenticate.value.lastElementChild.style = "padding:0"
                                        
        bottomNav.value.style.display = "block"
        propertyBtn.value.style = `width: max-content; margin-top: 10px`
        hr.value.style.display = "none";
        hr1.value.style.display = "none";

    }

    
}
function closeToggleBtn(e){
    nav.value.className = "nav"
    head.value.style = `
    display: grid;
    grid-template-columns: 10% 70%;
    align-items: center;
    padding: 1rem 0;
    transition: width 1s;
    
    `
    logo.value.style = `margin-left: 4.2rem;
                                `
    topNav.value.style.display = "grid"
    toggleBtn.value.style.display = "block"
    bottomNav.value.style.display = "grid"

    hr1.value.style.display = "block";
    closeToggle.value.style.display = "none"
    topNav.value.firstElementChild.style = "grid"
}
// const activeClass = reactive({
//     active : route=='/' ? true: route == '/grid' || route == '/list'? true : null
// })
</script>
<template>
    <div id="closeToggle" ref="closeToggle" @click.prevent="closeToggleBtn">X</div>
    <div class="header" id="head" ref="head">
        <div class="logo" ref="logo"><RouterLink to="/">SILKROAD</RouterLink></div>
        <div class="toggle">
            <div id="navbar" class="nav"  ref="nav">
                <div class="top-nav" id="top-nav"  ref="topNav">
                    <div class="home" ref="home">

                        <RouterLink to="/"><div class="toggle-menu-border" :class="route=='/' ?'active':'none'" id="home">Home</div></RouterLink> 

                        <RouterLink to="/grid"> <div  class="toggle-menu-border" :class="route == '/grid' || route == '/list'?'active':'none'" id="ourProperty">Our Property</div></RouterLink>
                    </div>
                    <div class="auth" id="auth"  ref="authenticate" v-if="route == '/logged'">

                        <div class="navbar-right toggle-menu-border" id="navbar-right"  ref="navbar-right">John Wayne</div>
                        
                        <hr class="nav-hr" ref="hr">
                        <div class="navbar-right toggle-menu-border active" id="navbar-right"  ref="navbar-right">Log Out</div>
                    </div>

                    <div class="auth" id="auth"  ref="authenticate" v-else>

                        <RouterLink to="/login"><div class="navbar-right toggle-menu-border" id="navbar-right"  ref="navbar-right">Login</div></RouterLink>
                        
                        <hr class="nav-hr" ref="hr">

                        <RouterLink to="/register"><div class="navbar-right toggle-menu-border" id="navbar-right"  ref="navbar-right">Register</div></RouterLink>
                    </div>
                </div>
                <!-- <i class="fa-facebook-f" -->
                <hr class="divider" ref="hr1">
                <div class="bottom-nav"  id="bottom-nav"  ref="bottomNav">
                    <div>                     
                        
                        <div class="bottom-left-nav" v-if="route == '/login'">
                            <div><RouterLink to="/">Home</RouterLink></div> 
                            <div id="👉"> <font-awesome-icon  :icon="['fas', 'greater-than']" /></div>
                            <div class="active-board-txt">LOGIN</div>
                        </div> 

                        <div class="bottom-left-nav" v-else-if="route == '/register'">
                            <div><RouterLink to="/">Home</RouterLink></div> 
                            <div id="👉"> <font-awesome-icon  :icon="['fas', 'greater-than']" /></div>
                            <div class="active-board-txt">REGISTER</div>
                        </div> 
                        <div class="bottom-left-nav" v-else-if="route == '/grid' || route == '/list'">
                            <div><RouterLink to="/">Home</RouterLink></div> 
                            <div id="👉"> <font-awesome-icon  :icon="['fas', 'greater-than']" /></div>
                            <div class="active-board-txt">HOUSE</div>
                        </div> 
                       <div v-else > </div>  
                    </div>

                    <div class="property-btn"  id="property-btn"  ref="propertyBtn"><button><RouterLink to="/single-property/1">Post a Property</RouterLink></button></div>
                </div>
            </div>

            <a @click.prevent="toggleHamburger" ref="toggleBtn"><i class="fa fa-bars"></i> </a>
        </div>
    </div>
</template>
