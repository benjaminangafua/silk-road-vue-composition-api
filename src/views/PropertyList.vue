
<script setup> 
import HeadTopVue from '../components/HeadTop.vue';
import SidebarVue from '../components/Sidebar.vue';
import PropertyMainContentNav from '../components/PropertyMainContentNav.vue'
import PropertyIconLayout from '../components/PropertyIconLayout.vue'
import FooterDownVue from '../components/FooterDown.vue';

import propertyData from '../property-data.json'
import { ref} from 'vue';

const house_detail = ref(propertyData)
const head = ref()
    console.log(head)
</script>

<template> 
<div id="head-bg-color"><HeadTopVue /></div>

<div id="property-grd">
    <div class="grid-container">
        <!-- Side Bar -->
        <SidebarVue/>
        <!-- Main content -->
        <div class="main-content">
            <!-- property Main content nav -->
            <PropertyMainContentNav/>
            <!-- Property LAyout -->
            <div class="content-grids">
                <div class="content-list">
                    <div class="carts-list"  v-for="(detail, index) in house_detail"  :key="detail.id">
                        <div class="img-ls"><router-link v-bind:to="'/single-property/'+(Number(index)+1)"><img :src="detail.image"  alt=""></router-link></div>
                        <div class="ls-r">
                            <div class="cart-txt">
                                <div class="top-carts-list">
                                    <div class="cart-small-text bed-room">3 Bedroom Townhouse</div>
                                    <div class="price-ls"><strong>$500.00/</strong>month</div>

                                </div>

                                <div class="cart-small-text"><span class="location-icon"><font-awesome-icon :icon="['fas', 'map-marker-alt']" /></span> 45 Circle Dr, Monrovia, Liberia</div>
                                <div class="cart-small-text">{{detail.owner_name}} <span class="material-symbols-outlined star-icon">hotel_class</span></div>
                            </div>
                            <!-- Icons -->
                            <PropertyIconLayout />
                        </div>
                    </div>

                </div>
                <div class="advertisement">
                    Advertisement
                </div>
            </div>
        </div>
    </div>

<div class="learn-more">Learn More</div>
    <FooterDownVue />
</div>
</template>

<style scoped>
 #head-bg-color{
        background-color: #748090;
    }
</style>