
<script setup>  
import FooterDown from '../components/FooterDown.vue';
import SidebarVue from '../components/Sidebar.vue';
import PropertyMainContentNav from '../components/PropertyMainContentNav.vue'
import propertyData from '../property-data.json'
import HeadTopVue from '../components/HeadTop.vue';
import { ref} from 'vue';


const house_detail = ref(propertyData)

</script>
<template>  
<div id="head-bg-color"><HeadTopVue /></div>
    
    <div id="property-grd">
        <div class="grid-container">
            <!-- Side bar -->
            <SidebarVue/>
            <!-- Main-content -->
            <div class="main-content">
                
            <!-- property Main content nav -->
            <PropertyMainContentNav/>

            <!-- Property Layout -->
                <div class="content-grids">
                    <div class="content-grid">
                        <div class="carts" v-for="detail in house_detail"  :key="detail.id">
                            <div class="img"> <router-link to="/single-property"><img :src="detail.image"  alt=""></router-link></div>
                            <div class="cart-txt">
                                <div class="price"><strong>$500.00/</strong> month</div>

                                <div class="cart-small-text bed-room">{{detail.description}}</div>
                                <div class="cart-small-text"><span class="location-icon"><font-awesome-icon :icon="['fas', 'map-marker-alt']" /></span>  {{detail.location}}</div>
                                <div class="cart-small-text">{{detail.owner_name}}<span class="material-symbols-outlined star-icon">hotel_class</span></div>
                            </div>
                            <div class="icons-layout">
                                <div class="icon"><span class="material-symbols-outlined">change_history</span> </div>
                                <!-- <font-awesome-icon :icon="['fas', 'book']" /> -->
                                <div class="icon"><span class="location-icon"><font-awesome-icon :icon="['fas', 'book']" /></span> </div>
                                <div class="icon"><span class="material-symbols-outlined">memory</span> </div>
                                <div class="icon"><span class="material-symbols-outlined">desktop_windows</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="advertisement">
                        Advertisement
                    </div>
                </div>
            </div>
        </div>
<div class="grid-learn-more">Learn More</div>
        
        <FooterDown />
 </div>
</template>
<style scoped>
 #head-bg-color{
        background-color: #748090;
    }
</style>