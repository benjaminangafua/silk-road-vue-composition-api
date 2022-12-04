<script setup> 
import FooterDown from '../components/FooterDown.vue'
import HeadTop from '../components/HeadTop.vue';

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

            <div class="select-county"><strong>Select county</strong></div> 

            <div class="location-list">
                <div class="county-list">
                    <b>Counties</b>
                    <div class="county">Bomi</div>
                    <div class="county">Bong</div>
                    <div class="county">Gbapolu</div>
                    <div class="county">Grand Bassa</div>
                    <div class="county">Grand Gedeh</div>
                    <div class="county">Grand Kru</div>
                    <div class="county">Grand Cape Mount</div>
                    <div class="county">Lofa</div>
                    <div class="county">Margibi</div>
                    <div class="county">Maryland</div>
                    <div class="county">Montserrado</div>
                    <div class="county">Nimba</div>
                    <div class="county">River Cess</div>
                    <div class="county">River Gee</div>
                    <div class="county">Sinoe</div>
                </div>
                <div class="district-list"></div>
            </div>
        </div>
        <div id="footer"><FooterDown /></div>
    </div>
</template>

<style scoped>


.container-c{
  min-height: 100vh; 
  margin: 0;   
  display: grid;
  grid-template-rows: auto 2fr auto;
  
}

a{
    color: #505050;
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
.location{
    border-bottom: 3px solid #20B2AA;
}
#footer{ 
  min-height:100%;  
  background: hsl(214, 11%, 51%);
}

    
</style>