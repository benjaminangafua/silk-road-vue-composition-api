<script setup> 
import FooterDown from '../components/FooterDown.vue'
import HeadTop from '../components/HeadTop.vue';
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
                <div class="category"><RouterLink to="/post-a-property/category">Category</RouterLink> </div>
                <div class="location active"> <RouterLink to="/post-a-property/location">Location</RouterLink> </div>
                <div class="property-details"><RouterLink to="/post-a-property/detail">Property Details</RouterLink> </div>
                <div class="contact-details"><RouterLink to="/post-a-property/contact-detail"> Contact Details</RouterLink> </div>
            </div>
            <div class="select-category">
                <strong>Select County</strong>
                <div class="category-hr"></div>
            </div>
            <div>Counties</div> <br>
                
            <div class="location-list">
                <div class="list-2-col">
                    <div class="counties-col">
                        <div class="county item">Bomi</div>
                        <div class="county  item">Bong</div>
                        <div class="county  item">Gbapolu</div>
                        <div class="county  item">Grand Bassa</div>
                        <div class="county  item">Grand Gedeh</div>
                        <div class="county  item">Grand Kru</div>
                        <div class="county  item active">Grand Cape Mount</div>
                        <div class="county  item">Lofa</div>
                        <div class="county  item">Margibi</div>
                        <div class="county  item">Maryland</div>
                        <div class="county  item">Montserrado</div>
                        <div class="county  item">Nimba</div>
                        <div class="county  item">River Cess</div>
                        <div class="county  item">River Gee</div>
                        <div class="county  item">Sinoe</div>
                    </div>

                    <div class="circle-arrow">
                        <div v-html="greaterThan.grt"></div>
                        <div v-html="greaterThan.grt"></div>
                        <div v-html="greaterThan.grt"></div>
                        <div v-html="greaterThan.grt"></div>
                        <div v-html="greaterThan.grt"></div>
                        <div v-html="greaterThan.grt"></div>
                        <div class="active" v-html="greaterThan.grt"></div>
                        <div v-html="greaterThan.grt"></div>
                        <div v-html="greaterThan.grt"></div>
                        <div v-html="greaterThan.grt"></div>
                        <div v-html="greaterThan.grt"></div>
                        <div v-html="greaterThan.grt"></div>
                        <div v-html="greaterThan.grt"></div>
                        <div v-html="greaterThan.grt"></div>
                        <div v-html="greaterThan.grt"></div>
                        <div v-html="greaterThan.grt"></div>
                     </div>  
                </div>
                
                <div class="list-2-col"> 
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

<style scoped>

@import url('../assets/post-a-property.css');
    
.location {
    border-bottom: 3px solid #20B2AA;
}
.location-list{
    display: grid;
    grid-template-columns: 50% auto;
}
</style>