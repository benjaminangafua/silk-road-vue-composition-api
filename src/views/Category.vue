<script setup> 
import FooterDown from '../components/FooterDown.vue'
import HeadTop from '../components/HeadTop.vue';
import  {RouterLink}  from 'vue-router';
import { computed } from '@vue/runtime-core';

const greaterThan = computed(()=>{
    return {
        grt: `<span class="material-symbols-outlined">arrow_circle_right</span>`
    }
})
</script>

<template>
    <div class="container-c">
        <div id="head-bg-color">
            <HeadTop />
        </div>
        <div class="main-bg-clr">
        <div id="main-c">
            <div class="category-title">
                <div class="category active"><RouterLink to="/post-a-property/category">Category</RouterLink> </div>
                <div class="location"> <RouterLink to="/post-a-property/location">Location</RouterLink> </div>
                <div class="property-details"><RouterLink to="/post-a-property/detail">Property Details</RouterLink> </div>
                <div class="contact-details"><RouterLink to="/post-a-property/contact-detail"> Contact Details</RouterLink> </div>
            </div>
            <div class="select-category1">
                <strong>Select a Category</strong>
                <div class="category-hr"></div>
            </div>
            <div class="list-2-col-category"> 
                    <div class="list-item">
                        <div class="houses item active">House</div>
                        <div class="apartments item">Apartments </div>
                        <div class="office-space item">Office Spaces</div>
                        <div class="storage-space item">Storage Spaces</div> 
                        <div class="rooms item">Rooms</div> 
                        <div class="commercial-properties item">Commercial Properties</div>
                           
                    </div> 
                    <div class="circle-arrow">
                        <div class="active" v-html="greaterThan.grt"></div>
                        <div v-html="greaterThan.grt"></div>
                        <div v-html="greaterThan.grt"></div>
                        <div v-html="greaterThan.grt"></div>
                        <div v-html="greaterThan.grt"></div>
                        <div v-html="greaterThan.grt"></div>
                     </div>                
               </div>
            </div>
        </div>
        <div id="footer"><FooterDown /></div>
    </div>
</template>

<style lang="scss" scoped>
    @import url('../assets/post-a-property.scss');
    @import url('../assets/category.scss');
</style>