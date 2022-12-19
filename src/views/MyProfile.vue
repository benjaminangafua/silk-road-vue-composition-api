<script setup> 
import FooterDown from '../components/FooterDown.vue'
import HeadTop from '../components/HeadTop.vue';
import  {RouterLink}  from 'vue-router';
import PropertyIconLayout from '../components/PropertyIconLayout.vue' 
import ProfilePropertyList from '../components/ProfilePropertyList.vue';
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
            <ProfilePropertyList />
            </div>
        </div>
        <div id="footer"><FooterDown /></div>
    </div>
</template>
<style lang="scss" scoped>
    @import url('../assets/post-a-property.scss');
    @import url('../assets/my-profile.scss');
 
</style>

