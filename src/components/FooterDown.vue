<script setup>
import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
import { RouterLink } from 'vue-router';

const contact = ref(false)
const quick = ref(false)
const recent = ref(false)

const long_product_name = computed(() => {
    return {
        product: `
        <div> 
            <div>Long Product Name with Details</div>
            <div class="md-clr"><small> 45 Circle Dr, Monrovia, Liberia</small> </div>
            <div class="sm-clr"><small>By John Doe</small></div>
        </div> 
        `}
})
</script>
<template>
    <div class="footer">
        <div class="top-ftr">
            <div class="footer1">
                <h5>CONTACT US</h5>
                <h6>
                    <div class="footer-2">
                        <div>
                            6116 Second W Gore Crescent,
                        </div>
                        <div>Monrovia, Liberia, West Africa</div>
                        <div>(231) 880-971-128</div>
                        <div> silkroad@kwagei.com</div>
                    </div>
                </h6>
                <div><span><i class="fa-brands fa-facebook-f pointer"></i> </span>&nbsp; &nbsp; <span><i
                            class="fa-brands fa-instagram pointer"></i></span> &nbsp; &nbsp;<span><i
                            class="fa-brands fa-twitter pointer"></i></span></div>
            </div>
            <div class="quick-links">
                <h5>QUICK LINKS</h5>
                <div class="footer2I">
                    <div class="col-2 footer-2">

                        <div>
                            <RouterLink to="/register">Register</RouterLink>
                        </div>
                        <div>
                            <RouterLink to="login">Login</RouterLink>
                        </div>
                        <div>
                            <RouterLink to="/post-a-property"> Post a Property</RouterLink>
                        </div>
                        <div>
                            <RouterLink to="#"> Our Recent Postings</RouterLink>
                        </div>
                        <div>
                            <RouterLink to="#">FAQ</RouterLink>
                        </div>
                        <div>
                            <RouterLink to="#">Contact Us</RouterLink>
                        </div>
                    </div>
                    <div class="col-2 footer-2">
                        <div>
                            <RouterLink to="#">About Us</RouterLink>
                        </div>
                        <div>
                            <RouterLink to="#">Privacy Policy</RouterLink>
                        </div>
                        <div>
                            <RouterLink to="#">Terms and Conditions</RouterLink>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h5>RECENT POSTINGS</h5>

                <h6>
                    <div class="footer-2">3 Bedroom Apartment at Sinkor Heights</div>
                    <div class="distance-p"><span class="location-icon"><font-awesome-icon
                                :icon="['fas', 'map-marker-alt']" /></span> 45 Circle Dr, Monrovia, Liberia</div>
                </h6>
                <h6>
                    <div class="footer-2">3 Bedroom Apartment at Sinkor Heights</div>
                    <div class="distance-p"><span class="location-icon"><font-awesome-icon
                                :icon="['fas', 'map-marker-alt']" /></span> 45 Circle Dr, Monrovia, Liberia</div>
                </h6>
                <h6>
                    <div class="footer-2">3 Bedroom Apartment at Sinkor Heights</div>
                    <div class="distance-p"><span class="location-icon"><font-awesome-icon
                                :icon="['fas', 'map-marker-alt']" /></span> 45 Circle Dr, Monrovia, Liberia</div>
                </h6>
            </div>
        </div>
        <hr>
        <div class="footer-b">
            <div>copyright &copy;2022 - Kwagei Group - All rights Reserved</div>
            <div class="silkroad-end"><strong><router-link to="/">SILKROAD</router-link> </strong></div>
        </div>

    </div>
    <br>
    <div class="toggle-mobile-footer">
        <div v-if="contact" class="contact-us-content">
            <div>6116 Second W Gore Crescent, Monrovia
                Montserrado County, Liberia, West Africa</div>
            <div>+231 880 971 128</div>
            <div>silkroad@kwagei.com</div>
            <div class="contact-icon"><i class="fa-brands fa-instagram pointer"></i> <i
                    class="fa-brands fa-facebook-f pointer"></i> <i class="fa-brands fa-twitter pointer"></i></div>
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
            <div v-for="n in 3" :key="n" v-html="long_product_name.product" class="recent-posting-contents">
            </div>
        </div>

        <div class="mobile-footer">
            <div class="contact-us content" @click.prevent="contact = true; quick = false; recent = false" 
            :style="{  color: contact ? '#20b2aa' : 'white'}">
            
            Contact Us</div>
            <div class="quick-links content" @click.prevent="quick = true; contact = false; recent = false"
            :style="{  color: quick ? '#20b2aa' : 'white'}">Quick Links</div>
            <div class="recent-postings content" @click.prevent="contact=false; quick=false; recent=true"
            :style="{  color: recent ? '#20b2aa' : 'white'}">Recent Postings</div>
        </div>
    </div>

</template>
<style scoped>
.location-icon {
    color: var(--white-clr) !important;
}

.mobile-footer {
    
    border-top: 2px solid var(--property-txt-clr);
    background: var(--dark-gray-clr);
    padding-top:5px;
}

.mobile-footer>div {
    cursor: pointer;
    font-size: 1.2rem;
}

.recent-posting-contents,
.quick-links-contents,
.contact-us-content {
    margin-bottom: 5%;
    color: var(--white-clr);
    font-size: 1.2rem;
}

.toggle-mobile-footer {
    background: var(--dark-gray-clr);
    padding-top: 1.5rem;

}

.contact-us-content {
    padding-left: 1.2rem;
    color: rgb(238, 240, 241);
}

.contact-us-content>div {
    padding-bottom: 1.5rem;
}

.contact-us-content>div:last-child {
    padding-bottom: 0px;
}

.contact-icon>i {
    margin-left: 2rem;
}

.contact-icon>i:first-child {
    margin-left: 0px;
}

.quick-links-contents {
    text-align: center;
}

.quick-links-contents>div {
    padding: 1.2rem 0px;
    border-bottom: 1px solid var(--white-clr);
}

.recent-posting-contents {
    padding-left: 1.5rem;
}

:deep(.md-clr) {
    color: rgb(238, 240, 241);
}

:deep(.sm-clr) {
    color: rgb(209, 210, 212);
}
</style>