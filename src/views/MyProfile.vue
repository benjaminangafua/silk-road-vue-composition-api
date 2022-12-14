<script setup> 
import FooterDown from '../components/FooterDown.vue'
import HeadTop from '../components/HeadTop.vue';
import  {RouterLink}  from 'vue-router';
import PropertyIconLayout from '../components/PropertyIconLayout.vue'
import { ref} from 'vue';
import { computed } from '@vue/runtime-core';
import propertyData from '../property-data.json'

const house_detail = ref(propertyData)
</script>
<template>
    <div class="container-c">
        <div id="head-bg-color">
            <HeadTop />
        </div> 
        <div class="main-bg-clr">
        <div class="main-content">

            <!--Contact Form -->
            <div class="main-contact-content">
                <div class="provide-detail">
                    <strong>My Profile</strong>
                    <div class="provide-a-contact-detail">Provide a contact detail</div>
                    <div class="property-hr"></div>
                </div>
                <div class="contact-content">
                    <form action="">
                        <div class="name">
                            <div><b>Name</b> </div>
                            <div>Peter Wayne</div>
                        </div>
                        <div class="email">

                            <div><b>Email</b> </div>
                            <div>peterwayne@gamil.com</div>
                        </div>

                        <div class="phone">
                            <div><b>Phone</b> </div>
                            <div>(231)-880-971-128</div>
                        </div>
                    </form>
                </div>
                <div class="btn-update-profile"> <button><RouterLink to="/update-profile">Update Profile</RouterLink> </button></div>
            </div>

            <!-- Property List -->
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
            </div>
        </div>
        <div id="footer"><FooterDown /></div>
    </div>
</template>
<style lang="scss" scoped>
    @import url('../assets/post-a-property.scss');
    @import url('../assets/my-profile.scss');
 
</style>

