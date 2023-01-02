<script setup>

import { RouterLink } from 'vue-router';
import HeadTop from './HeadTop.vue';
import FooterDown from './FooterDown.vue';
</script>

<template>
    
    <div class="container-c">
        <div id="head-bg-color">
            <HeadTop />
        </div> 
        
        <div class="main-bg-clr">
            <div class="main-content">
                <div class="main-contact-content"> 
                    <div class="contact-content">
                        <form action="">
                            <div class="name">
                                <div class="input1" ><input type="text" placeholder="Full Name"> </div>
                            </div>
                            <div class="email"> 
                                <div class="input1"> <input type="text" placeholder="Email"> </div>
                            </div> 

                            <div class="description">
                                <textarea name="" id="" cols="30" rows="10" placeholder="Description"></textarea>
                            </div>
                        </form>
                    </div>
                    <div class="btn-save"> <button><RouterLink to="/profile">Send</RouterLink> </button></div>
                </div>
            </div>
        </div>
        <div id="footer"><FooterDown /></div>
    </div>
</template>
<style lang="scss" scoped>
    @import url('../assets/post-a-property.scss');
    @import url('../assets/update-profile.scss');    
</style>