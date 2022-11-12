
<template>
    <div class="header" id="head">
            <div class="logo"><a href="/">SILKROAD</a> </div>
            <div class="toggle">
                
            <div id="navbar" class="nav">
                <div class="top-nav">
                    <div class="home">
                        <div><RouterLink to="/">Home</RouterLink> </div>
                        <div><RouterLink to="/list">Our Property</RouterLink> </div>
                    </div>
                    <div class="auth">
                        <div class="aut1"><RouterLink to="/login">Login</RouterLink></div>
                        <hr class="aut-m">
                        <div class="aut1"><RouterLink to="/register">Register</RouterLink></div>
                    </div>
                </div>
                <!-- <i class="fa-facebook-f" -->
                <hr class="divider">
                <div class="bottom-nav">
                    <div><RouterLink to="/widget"> Widget</RouterLink></div>

                    <div class="prty-btn"><button>Post a Property</button></div>
                </div>
            </div>

            <a  href="javascript:void(0);" class="icon" id="tgg">
                <i class="fa fa-bars"></i>
              </a>

            </div>
        </div>
</template>

<script setup>
import  {RouterLink}  from 'vue-router';

// onMounted(()=>{
//         let head = document.getElementById("head")
//         let nav = document.getElementById("navbar")
//         let btn = document.getElementById("tgg")

//         let topNav = document.querySelector(".top-nav")
//         let hm = document.querySelector(".home")
//         let aut = document.querySelector(".auth")
//         let btm = document.querySelector(".bottom-nav")
//         let hr = document.querySelector("hr")
//         let prty = document.querySelector(".prty-btn")

//         // let xz = "none"
//         btn.onclick =()=>{
//             if(nav.className =="nav"){
//                 nav.className = "response"
//                 head.style = `display:block; background-color:#444`
//                 topNav.style.display = "block"
//                 hm.firstElementChild.style = `display:block;
//                                                 margin: 10px 0px`
//                 topNav.firstElementChild.style = `display:block;
//                                                 margin: 8px 0px`
//                 aut.style.display = "block"
//                 aut.firstElementChild.style = `padding:0; margin-bottom: 10px;`
//                 aut.lastElementChild.style = "padding:0"
                                                
//                 btm.style.display = "block"
//                 prty.style = `width: max-content; margin-top: 10px`
//                 hr.style.display = "none"
                        
//             }else{
//                 nav.className = "nav"
//                 head.style = `display:grid; background-color:auto`

//         }
    
//     }


// }) 
</script>