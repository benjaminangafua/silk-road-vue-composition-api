
<script setup>
import  {RouterLink}  from 'vue-router';
import { ref, onMounted} from 'vue';

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
        width:50%;
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
    head.value.style = `display:grid; width:100%;
    `
    topNav.value.style.display = "grid"
    toggleBtn.value.style.display = "block"
    bottomNav.value.style.display = "grid"

    hr1.value.style.display = "block";
    closeToggle.value.style.display = "none"
    topNav.value.firstElementChild.style = "grid"
}
</script>
<template>
    <div id="closeToggle" ref="closeToggle" @click.prevent="closeToggleBtn">X</div>
    <div class="header" id="head" ref="head">
        <div class="logo" ref="logo"><RouterLink to="/">SILKROAD</RouterLink></div>
        <div class="toggle">
            <div id="navbar" class="nav"  ref="nav">
                <div class="top-nav" id="top-nav"  ref="topNav">
                    <div class="home" ref="home">

                        <a href="/"><div class="toggle-menu-border" id="home">Home</div></a> 

                        <a href="/list"> <div  class="toggle-menu-border" id="ourProperty">Our Property</div></a>
                    </div>
                    <div class="auth" id="auth"  ref="authenticate">

                        <a href="/login"><div class="navbar-right toggle-menu-border"  id="navbar-right"  ref="navbar-right">Login</div></a>
                        
                        <hr class="nav-hr" ref="hr">

                        <a href="/register"><div class="navbar-right toggle-menu-border"  id="navbar-right"  ref="navbar-right">Register</div></a>
                    </div>
                </div>
                <!-- <i class="fa-facebook-f" -->
                <hr class="divider" ref="hr1">
                <div class="bottom-nav"  id="bottom-nav"  ref="bottomNav">

                    <a href="/widget"> <div  class="toggle-menu-border">Widget</div></a>

                    <div class="property-btn"  id="property-btn"  ref="propertyBtn"><button><a href="/">Post a Property</a></button></div>
                </div>
            </div>

            <a @click.prevent="toggleHamburger" class="icon" ref="toggleBtn"><i class="fa fa-bars"></i> </a>
        </div>
    </div>
</template>
