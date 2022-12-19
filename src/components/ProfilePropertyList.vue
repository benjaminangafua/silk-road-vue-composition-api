<script setup>
import { ref} from 'vue'; 
import propertyData from '../property-data.json'

const house_detail = ref(propertyData)
</script>
<template>
     
<div>
    <div class="category-title">
        <div class="posting active"><RouterLink to="#">My Postings</RouterLink> </div>
        <div class="location"> <RouterLink to="#">My Favorites</RouterLink> </div>
    </div>
    <div class="content-list scrollable">

        <div class="carts-list"  v-for="(detail, index) in house_detail"  :key="detail.id">
            <div class="ls-r">
                <div class="cart-txt">
                    <div class="top-carts-list">
                        <div class="cart-small-text bed-room">3 Bedroom Townhouse</div>
                        <div class="price-ls"><strong>$500.00/</strong>month</div>

                    </div>

                    <div class="cart-small-text"><span class="location-icon"><font-awesome-icon :icon="['fas', 'map-marker-alt']" /></span> 45 Circle Dr, Monrovia, Liberia</div>
                    </div>
                <!-- Icons -->
                <PropertyIconLayout />
            </div>
            <div class="img-ls"><router-link v-bind:to="'/single-property/'+(Number(index)+1)"><img :src="detail.image"  alt=""></router-link></div>
            
        </div>
    </div>
</div>
</template>
<style scoped>
    @import url('../assets/post-a-property.scss'); 
    @import url('../assets/my-profile.scss');
</style>