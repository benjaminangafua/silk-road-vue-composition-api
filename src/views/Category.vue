<script setup> 
import FooterDown from '../components/FooterDown.vue'
import HeadTop from '../components/HeadTop.vue';
import  {RouterLink}  from 'vue-router';

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
            <div class="select-category"><strong>Select Category</strong></div>
            <div>
                <hr>
            </div>
            <div class="category-list">
                <div class="houses">House span</div>
                <div class="apartments">Apartments</div>
                <div class="office-space">Office Spaces</div>
                <div class="storage-space">Storage Spaces</div>
                <div class="rooms">Rooms</div>
                <div class="land">Land</div>
                <div class="commercial-properties">Commercial Properties</div>
            </div>
        </div>
        <div id="footer"><FooterDown /></div>
    </div>
</template>

<style scoped>

a{
    color: #505050;
}

.container-c{
  min-height: 100vh; 
  margin: 0;   
  display: grid;
  grid-template-rows: auto 2fr auto;
  
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
    border-bottom: 1px solid hsl(214, 11%, 51%);
}
.category{
    border-bottom: 3px solid #20B2AA;
}
#footer{ 
  min-height:100%;  
  background: hsl(214, 11%, 51%);
}

    
</style>