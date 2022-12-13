<script setup> 
import FooterDown from '../components/FooterDown.vue'
import HeadTop from '../components/HeadTop.vue';
import  {RouterLink}  from 'vue-router';
import propertyData from '../property-data.json'
import PropertyIconLayout from '../components/PropertyIconLayout.vue'
import { ref} from 'vue';
import { computed } from '@vue/runtime-core';

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
                    <div class="property-hr"></div>
                </div>
                <div class="contact-content">
                    <form action="">
                        <div class="name">
                            <div><b>Name:</b> </div>
                            
                                <div class="input1" ><input type="text" placeholder="Full Name">
                                
                            </div>
                        </div>
                        <div class="email">

                        <div><b>Email:</b> </div>
                            <div class="input1">
                            <input type="text" placeholder="Email">
                        
                            </div>
                        </div>

                        <div class="phone">
                            <div><b>Phone:</b> </div>
                        <div class="c-code">
                            <select name="c-code" id="">
                                <option value="+231">+231</option>
                                <option value="+234">+234</option>
                                <option value="+134">+134</option>
                                <option value="+412">+412</option>
                            </select>                             
                            <input class="input1 profile-phone" type="tel" placeholder="Phone">
                        </div>
                        </div>
                    </form>
                </div>
                <div class="btn-save"> <button><RouterLink to="/profile">Save</RouterLink> </button></div>
            </div>

            <!-- Property List -->
                <div>
                    <div class="title-c">
                        <div class="posting active"><RouterLink to="#">My Postings</RouterLink> </div>
                        <div class="location"> <RouterLink to="#">My Favorites</RouterLink> </div>
                    </div>
                <div class="content-list scrollable">

                    <div class="carts-list"  v-for="(detail, index) in house_detail"  :key="detail.id">
                        <div class="ls-r">
                            <div class="cart-txt">
                                 <div class="top-carts-list">
                                    <div class="cart-small-text bed-room">3 Bedroom Townhouse</div>
                                    <div class="price-ls"><strong>$500.00</strong>/month</div>
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

</style>

