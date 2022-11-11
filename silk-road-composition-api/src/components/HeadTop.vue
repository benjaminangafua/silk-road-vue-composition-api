<script setup>
import  {RouterLink}  from 'vue-router';
</script>
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
                    <div><RouterLink to="/home-widget"> Widget</RouterLink></div>

                    <div class="prty-btn"><button>Post a Property</button></div>
                </div>
            </div>

            <a  href="javascript:void(0);" class="icon" id="tgg">
                <i class="fa fa-bars"></i>
              </a>

            </div>
        </div>
</template>