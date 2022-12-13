<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
<br>

<div class="mobile-footer">
    <div class="contact-us content">Contact Us</div> 
    <div class="quick-links content">Quick Links</div> 
    <div class="recent-postings content">Recent Postings</div>
</div>
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
                    <div><span><i class="fa-brands fa-facebook-f pointer"></i> </span>&nbsp;  &nbsp; <span><i class="fa-brands fa-instagram pointer"></i></span> &nbsp;  &nbsp;<span><i class="fa-brands fa-twitter pointer"></i></span></div>
                </div>
                <div class="quick-links">
                    <h5>QUICK LINKS</h5>
                    <div class="footer2I">
                        <div class="col-2 footer-2">

                            <div>
                               <RouterLink to="/register">Register</RouterLink> 
                            </div>
                            <div><RouterLink to="login">Login</RouterLink></div>
                            <div> <RouterLink to="/post-a-property"> Post a Property</RouterLink></div>
                            <div><RouterLink to="#"> Our Recent Postings</RouterLink></div> 
                            <div><RouterLink to="#">FAQ</RouterLink></div>
                            <div><RouterLink to="#">Contact Us</RouterLink></div>
                        </div>
                        <div class="col-2 footer-2">
                            <div><RouterLink to="#">About Us</RouterLink></div>
                            <div><RouterLink to="#">Privacy Policy</RouterLink></div>
                            <div><RouterLink to="#">Terms and Conditions</RouterLink></div>
                        </div>
                    </div>
                </div>
                <div>
                    <h5>RECENT POSTINGS</h5>

                    <h6>
                        <div class="footer-2">3 Bedroom Apartment at Sinkor Heights</div>
                        <div class="distance-p"><span class="location-icon"><font-awesome-icon :icon="['fas', 'map-marker-alt']" /></span>  45 Circle Dr, Monrovia, Liberia</div>
                    </h6>
                    <h6>
                        <div class="footer-2">3 Bedroom Apartment at Sinkor Heights</div>
                        <div class="distance-p"><span class="location-icon"><font-awesome-icon :icon="['fas', 'map-marker-alt']" /></span>  45 Circle Dr, Monrovia, Liberia</div>
                    </h6>
                    <h6>
                        <div class="footer-2">3 Bedroom Apartment at Sinkor Heights</div>
                        <div class="distance-p"><span class="location-icon"><font-awesome-icon :icon="['fas', 'map-marker-alt']" /></span>  45 Circle Dr, Monrovia, Liberia</div>
                    </h6>
                </div>
            </div>
            <hr>
            <div class="footer-b">
                <div>copyright &copy;2022 - Kwagei Group - All rights Reserved</div>
                <div class="silkroad-end"><strong><router-link to="/">SILKROAD</router-link> </strong></div>
            </div>

        </div>

</template>
<style scoped>
    .location-icon{
        color: var(--white-clr) !important;
    }
</style>