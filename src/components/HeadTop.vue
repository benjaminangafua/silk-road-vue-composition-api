
<script setup>
import  {RouterLink}  from 'vue-router';
import { ref, onMounted, reactive, computed} from 'vue';
import { useRoute } from 'vue-router'
import propertyData from '../property-data.json' 
const house_detail = reactive(propertyData)

const route = useRoute().path 

const active_clr = computed(()=>{
    return {
        grid_list: route == '/grid' || route == '/list'?'active':'none',
        top_nav_left: route=='/' ?'active':'none'
    }
})

const router_content = computed(()=>{
    return {
        logged: route == '/logged',
        login: route == '/login',
        register: route == '/register',
        grid_list:route == '/grid' || route == '/list',
        single: route =='/single-property/'+route.split("/")[2],

        profile:  route == '/profile',
        update_profile:  route == '/update-profile',
        category:  route == '/post-a-property/category',
        location:  route == '/post-a-property/location',
        property_detail:  route == '/post-a-property/detail',
        contact_detail:  route == '/post-a-property/contact-detail',

    }
})
const property_nav = computed(()=>{
return{nav: router_content.value.profile||router_content.value.update_profile||router_content.value.category||router_content.value.location||router_content.value.property_detail||router_content.value.contact_detail}}
)
const head = ref()
const logo = ref()
const nav = ref()
const topNav = ref()
const authenticate = ref()
const bottomNav = ref()
const propertyBtn =ref() 
const top_nav_left = ref()
const closeToggle = ref()
const toggleBtn = ref()
const hr = ref()
const hr1 = ref()

function toggleHamburger(e){  
    console.log(topNav.value.id) 
    if( nav.value.className =="nav"){
        closeToggle.value.style =`display:block; color:#fff; cursor:pointer;`
        toggleBtn.value.style.display = "none"
        hr.value.style.display = "none";
        hr1.value.style.display = "none";
        topNav.value.style.display = "block;"
        authenticate.value.style.display = "block"                                        
        bottomNav.value.style.display = "block;"
        logo.value.style = `margin: 0;`
        nav.value.className = "response"
        head.value.style = `display:block; background-color:#3b444b; padding:10px 20px;        `
        top_nav_left.value.firstElementChild.style = `display:block; margin: 10px 0px;`
        topNav.value.firstElementChild.style = `display:block; margin: 8px 0px;`
        authenticate.value.firstElementChild.style = `padding:0; margin-bottom: 10px;`
        authenticate.value.lastElementChild.style = "padding:0;"
        propertyBtn.value.style = `width: max-content; margin-top: 10px;`
    }else{
        authenticate.value.style.display = "grid"
    }    
}
function closeToggleBtn(e){
    nav.value.className = "nav"
    head.value.style = ` display: grid; grid-template-columns: 10% 70%; align-items: center; padding: 1rem 0;transition: width 1s;`
    logo.value.style = `margin-left: 4.2rem;`
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
                    <div class="top_nav_left" ref="top_nav_left">

                        <RouterLink to="/"><div class="toggle-menu-border" :class="active_clr.top_nav_left" id="top_nav_left">Home</div></RouterLink> 

                        <RouterLink to="/grid"> <div  class="toggle-menu-border" :class="active_clr.grid_list" id="ourProperty">Our Property</div></RouterLink>
                    </div>
                    <div class="account-info" id="account-info"  ref="authenticate" v-if="(router_content.profile||router_content.update_profile||router_content.logged)">

                        <div class="navbar-right toggle-menu-border" id="navbar-right"  ref="navbar-right"><RouterLink to="/profile">John Wayne</RouterLink> </div>
                        
                        <hr class="nav-hr" ref="hr">
                        <RouterLink to="/login"><div class="navbar-right toggle-menu-border active" id="navbar-right"  ref="navbar-right">Logout</div></RouterLink>
                    </div>

                    <div class="account-info" id="account-info"  ref="authenticate" v-else>

                        <RouterLink to="/login"><div class="navbar-right toggle-menu-border" id="navbar-right"  ref="navbar-right">Login</div></RouterLink>
                        
                        <hr class="nav-hr" ref="hr">

                        <RouterLink to="/register"><div class="navbar-right toggle-menu-border" id="navbar-right"  ref="navbar-right">Register</div></RouterLink>
                    </div>
                </div>
                <!-- <i class="fa-facebook-f" -->
                <hr class="divider" ref="hr1">
                <div class="bottom-nav"  id="bottom-nav"  ref="bottomNav">
                    <div>  
                        <div class="bottom-left-nav" v-if="router_content.login">
                            <div><RouterLink to="/">HOME</RouterLink></div> 
                            <div id="👉"> ❯</div>
                            <div class="active-board-txt">LOGIN</div>
                        </div> 
                        <!-- Register -->
                        <div class="bottom-left-nav" v-else-if="router_content.register">
                            <div><RouterLink to="/">HOME</RouterLink></div> 
                            <div id="👉"> ❯</div>
                            <div class="active-board-txt">REGISTER</div>
                        </div> 
                        <!-- Grid or list layout -->
                        <div class="bottom-left-nav" v-else-if="router_content.grid_list">
                            <div><RouterLink to="/">HOME</RouterLink></div> 
                            <div id="👉"> ❯</div>
                            <div class="active-board-txt"><RouterLink to="/grid">HOUSES </RouterLink></div>
                        </div> 
                        <!-- Profile -->
                        <div class="bottom-left-nav" v-else-if="router_content.profile">
                            <div><RouterLink to="/">HOME</RouterLink></div> 
                            <div id="👉"> ❯</div>
                            <div class="active-board-txt"><RouterLink to="#">My Profile </RouterLink></div>
                        </div> 
                        <!-- Update Profile -->
                        <div class="bottom-left-nav" v-else-if="router_content.update_profile">
                            <div><RouterLink to="/">HOME</RouterLink></div> 
                            <div id="👉"> ❯</div>
                            <div class="active-board-txt"><RouterLink to="#">Update Profile </RouterLink></div>
                        </div> 
                            <!-- Single post -->
                        <div class="bottom-left-nav" v-else-if="router_content.single">
                            <div><RouterLink to="/">HOME</RouterLink></div>  
                                <div id="👉"> ❯</div>
                            <div class="post-a-property-nav-layout">
                                <div><RouterLink to="/grid">HOUSES </RouterLink></div>
                                <div id="👉"> ❯</div>
                                <div class="active-board-txt">CATEGORY</div>
                            </div>
                        </div>
                            <!-- Category -->
                        <div class="bottom-left-nav" v-else-if="router_content.category">
                            <div><RouterLink to="/">HOME</RouterLink></div>  
                                <div id="👉"> ❯</div>
                            <div class="post-a-property-nav-layout">
                                <div><RouterLink to="#">POST A PROPERTY </RouterLink></div>
                                <div id="👉"> ❯</div>
                                <div class="active-board-txt">CATEGORY</div>
                            </div>
                        </div>
                            <!-- Location -->
                        <div class="bottom-left-nav" v-else-if="router_content.location">
                            <div><RouterLink to="/">HOME</RouterLink></div>  
                                <div id="👉"> ❯</div>
                            <div class="post-a-property-nav-layout">
                                <div><RouterLink to="#">POST A PROPERTY </RouterLink></div>
                                <div id="👉"> ❯</div>
                                <div class="active-board-txt">LOCATION</div>
                            </div>
                        </div>
                            <!-- Property Details -->
                        <div class="bottom-left-nav" v-else-if="router_content.property_detail">
                            <div><RouterLink to="/">HOME</RouterLink></div>  
                                <div id="👉"> ❯</div>
                            <div class="post-a-property-nav-layout">
                                <div><RouterLink to="#">POST A PROPERTY </RouterLink></div>
                                <div id="👉"> ❯</div>
                                <div class="active-board-txt">PROPERTY</div>
                            </div>
                        </div>
                            <!-- Contact Details -->
                        <div class="bottom-left-nav" v-else-if="router_content.contact_detail">
                            <div><RouterLink to="/">HOME</RouterLink></div>  
                                <div id="👉"> ❯</div>
                            <div class="post-a-property-nav-layout">
                                <div><RouterLink to="#">POST A PROPERTY </RouterLink></div>
                                <div id="👉"> ❯</div>
                                <div class="active-board-txt">CONTACT</div>
                            </div>
                        </div>



                       <div v-else > </div>  
                    </div>

                    <div class="property-btn"  id="property-btn"  ref="propertyBtn"><button><RouterLink to="/post-a-property/category">Post a Property</RouterLink></button></div>
                </div>
            </div>

            <a @click.prevent="toggleHamburger" ref="toggleBtn"><i class="fa fa-bars"></i> </a>
        </div>
    </div>
    <div class="mobile-header">

        <div class="top-mobile-nav" v-if="router_content.register">
            <div class="top-right-mobile-nav"><span>HOME</span> ❯ <span>REGISTER</span></div>
            <div class="top-left-mobile-nav"> <button class="btn submit-ad-btn">Submit an Ad</button></div>
        </div>
        <div class="top-mobile-nav" v-else-if="router_content.login">
            <div class="top-right-mobile-nav"><span>HOME</span> ❯ <span>LOGIN</span></div>
            <div class="top-left-mobile-nav"> <button class="btn submit-ad-btn">Submit an Ad</button></div>
        </div>

        <div class="bottom-mobile-nav" v-if="property_nav.nav">
            <div>HOME <span id="right">❯</span> </div>
            <div>Submit an Ad <span id="right"> ❯</span> </div>
            <div>Category</div> 
        </div>
    </div>
</template>
