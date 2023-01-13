<script setup>
import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
import { RouterLink } from 'vue-router';

const contact = ref(false)
const quick = ref(false)
const recent = ref(false) 
const long_product_name=computed(()=>{
         return {product: `
        <div> 
            <div>Long Product Name with Details</div>
            <div class="md-clr"><small> 45 Circle Dr, Monrovia, Liberia</small> </div>
            <div class="sm-clr"><small>By John Doe</small></div>
        </div> 
        `}})
</script>
<template>
<br> 
<div v-if="contact" class="contact-us-content">
    <div>6116 Second W Gore Crescent, Monrovia
    Montserrado County, Liberia, West Africa</div>
    <div>+231 880 971 128</div>
    <div>silkroad@kwagei.com</div>
    <div class="contact-icon"><i class="fa-brands fa-instagram pointer"></i> <i class="fa-brands fa-facebook-f pointer"></i> <i class="fa-brands fa-twitter pointer"></i></div>
</div>  

<div v-if="quick" class="quick-links-contents">
    <div>About US</div>
    <div>Contact US</div>
    <div>FAQ</div>
    <div>Submit an Ad</div>
    <div>Login</div>
    <div>Privacy Policy</div>
    <div>Terms & Conditions</div>
</div>  
<div v-if="recent">
    <div v-for="n in 3" :key="n" v-html="long_product_name.product" class="recent-posting-contents" > 
    </div>
</div>  

<div class="mobile-footer">
    <div class="contact-us content" @click.prevent="contact=true; quick=false; recent=false"> Contact Us</div> 
    <div class="quick-links content" @click.prevent="quick=true; contact=false;recent=false" >Quick Links</div> 
    <div class="recent-postings content" @click.prevent="contact=false; quick=false; recent=true">Recent Postings</div>
</div>
   

</template>
<style scoped>
    .location-icon{
        color: var(--white-clr) !important;
    }
    .mobile-footer{
        background: var(--dark-gray-clr);
    }
    .mobile-footer > div{
        cursor:pointer;
        font-size:1.2rem;
    }
    .recent-posting-contents,
    .quick-links-contents,
    .contact-us-content{
        margin-bottom: 5%;
        color: var(--white-clr);
        font-size:1.2rem;
    }

    .contact-us-content{
        padding-left: 1.2rem;
        color: rgb(238, 240, 241);
    }
    .contact-us-content > div{
        padding-bottom: 1.5rem;
    }
    .contact-us-content > div:last-child{
        padding-bottom: 0px;
    }
    .contact-icon>i{
        margin-left: 2rem;
    }
    .contact-icon>i:first-child{
        margin-left: 0px;
    }
        .quick-links-contents {
        text-align: center; 
    }
    
    .quick-links-contents >div{
        padding: 1.2rem 0px;
        border-bottom: 1px solid var(--white-clr);
    }
    .recent-posting-contents{
        padding-left: 3rem;
    }
    :deep(.md-clr){
        color: rgb(238, 240, 241);
    }
    :deep(.sm-clr){
        color: rgb(209, 210, 212);
    }
</style>