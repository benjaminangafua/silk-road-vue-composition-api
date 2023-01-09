<script setup>
import HeadTopVue from '../components/HeadTop.vue';

</script>
<template> 
 <div class="container row-3">
   <div><HeadTopVue /></div> 
    <div class="main-widget">
        <div class="filter-line">
            <div class="filter-cup"><font-awesome-icon :icon="['fas', 'filter']" /> FILTER</div>
            <div class="filter-nav">
                <div class="active">All</div>
                <div>Rent</div>
                <div>Sale</div>
            </div>
        </div>
        <div><input type="text" class="property" placeholder="KEYWORD"></div>
        <div class="select-detail">
            <div class="l-detail-select">
                <div>
                    <select name="" id="">
                        <option value="">Category</option>
                        <option value="">Upstairs</option>
                        <option value="">Basement</option>
                    </select>
                </div>
                <div>
                    <select name="" id="">
                        <option value="">No. of Bedroom</option>
                        <option value="">1</option>
                        <option value="">2</option>
                    </select>
                </div>
                <div>
                    <label for="Price">Price: $<span id="val-less">00</span>.00 - $<span id="val">10,000</span>.00</label> <br>
                    <input type="range" class="input-rng" min="0" max="10000" value="5000" name="" id="">
                </div>
            </div>
            <div class="r-detail-select">
                <div>
                    <select name="" id="">
                        <option value="">Location</option>
                        <option value="">Paynesville</option>
                        <option value="">Congo Town</option>
                        <option value="">Sinkor</option>
                    </select>
                </div>
                <div>
                    <select name="" id="">
                        <option value="">No. of Bathroom</option>
                        <option value="">1</option>
                        <option value="">2</option>
                    </select>
                </div>
                <div><button class="pointer"><RouterLink to="/grid"> Find it</RouterLink></button></div>
            </div>
        </div>
    </div>

    <div class="bottom-content">
        <div>OUR LATEST POSTINGS</div>
        <div><span class="material-symbols-outlined">expand_circle_down</span></div>
    </div>
</div>
</template> 