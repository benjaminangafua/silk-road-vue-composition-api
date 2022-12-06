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
        <div id="main-c">
            <div class="title-c">
                <div class="category active"><RouterLink to="/post-a-property/category">Category</RouterLink> </div>
                <div class="location"> <RouterLink to="/post-a-property/location">Location</RouterLink> </div>
                <div class="property-details"><RouterLink to="/post-a-property/detail">Property Details</RouterLink> </div>
                <div class="contact-details"><RouterLink to="/post-a-property/contact-detail"> Contact Details</RouterLink> </div>
            </div>
            <div class="select-category">
                <strong>Select Category</strong>
                <div class="category-hr"></div>
            </div>
            <div class="category-list"> 
                    <div class="category-item">
                        <div class="houses item active">House</div>
                        <div class="apartments item">Apartments </div>
                        <div class="office-space item">Office Spaces</div>
                        <div class="storage-space item">Storage Spaces</div> 
                        <div class="rooms item">Rooms</div> 
                        <div class="commercial-properties item">Commercial Properties</div>
                           
                    </div> 
                    <div class="category-arrow">
                        <div class="active" v-html="greaterThan.grt"></div>
                        <div v-html="greaterThan.grt"></div>
                        <div v-html="greaterThan.grt"></div>
                        <div v-html="greaterThan.grt"></div>
                        <div v-html="greaterThan.grt"></div>
                        <div v-html="greaterThan.grt"></div>
                     </div>
                
               </div>
        </div>
        <div id="footer"><FooterDown /></div>
    </div>
</template>

<style scoped>

.container-c{
  min-height: 100vh; 
  margin: 0;   
  display: grid;
  grid-template-rows: auto 2fr auto;
  
}

a{
    color: #505050;
}
.category-arrow>div{
    color: #989a9b;
}
.active a, .active
{
    color: #20B2AA !important;
}

#head-bg-color{ 
    background-color: #505050;
}
#main-c{ 
    padding: 5% 15% 15% 15%;
}

.title-c {
    display: grid;
    grid-template-columns: repeat(4, auto);
    border-bottom: 1px solid hsl(212, 9%, 67.3%);
}
.select-category{
    margin: 2% 0;
}
.select-category>strong{
    color:#818283;
}
.category-list{
    display: grid;
    grid-template-columns: 30% auto;
}
.item{
    color:#989a9b;
    margin-bottom: 4%;
}

.item:last-child{
    margin-bottom: 0;
}
.category-hr{
    border: 0.1px solid #989a9b;
    width: 25%;
    margin-top: 1%
}
.category{
    border-bottom: 3px solid #20B2AA;
}
#footer{ 
  min-height:100%;  
  background: hsl(214, 11%, 51%);
}    
</style>