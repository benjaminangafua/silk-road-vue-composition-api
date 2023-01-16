<script setup>
import HeadTopVue from '../components/HeadTop.vue';
import { reactive } from 'vue'
import { Collapse } from 'vue-collapsed'
import location from '../location.json'
import { ref, onMounted } from 'vue'
 
    const items = ref(location);
      
    const toggleOpen = (item) => {
        item.isOpen = !item.isOpen
    }
    // return { items, toggleOpen } 
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
        <div class="input-layout-for-mobile"><input type="text" class="property" placeholder="KEYWORD"></div>
        <div class="select-detail">
            <div class="accordion-border">
                <div v-for="item in items" :key="item.id" class="widget-mobile-filter-accordion">
                    <div class="accordion-title" @click="toggleOpen(item)">
                        <div>
                            {{ item.title }}
                        </div>
                        <div>❯</div>
                    </div>

                        <div v-if="item.isOpen">
                            <div class="accordion-border">
                                <div v-for="subItem in item.subItems" :key="subItem.id" class="widget-mobile-filter-sub-item-accordion">
                                    <div class="accordion-title"  @click="toggleOpen(subItem)">
                                        🎧 {{ subItem.title }}                                                                        
                                        <div>🢖</div>
                                    </div>
                                    <div v-if="subItem.isOpen" class="widget-mobile-filter-sub-item-accordion">
                                        {{ subItem.content }}
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div class="l-detail-select">
                <div  class="category-list">
                    <select name="" id="">
                        <option value="">Category</option>
                        <option value="">Upstairs</option>
                        <option value="">Basement</option>
                    </select>
                </div>
                <div class="description-list">
                    <select name="" id="">
                        <option value="">No. of Bedroom</option>
                        <option value="">1</option>
                        <option value="">2</option>
                    </select>
                </div>
                <div class="price-range-widget">
                    <label for="Price">Price: $<span id="val-less">00</span>.00 - $<span id="val">10,000</span>.00</label> <br>
                    <input type="range" class="input-rng" min="0" max="10000" value="5000" name="" id="">
                </div>
            </div>
            <div class="r-detail-select">
                <div class="location-list">
                    <select name="" id="">
                        <option value="">Location</option>
                        <option value="">Paynesville</option>
                        <option value="">Congo Town</option>
                        <option value="">Sinkor</option>
                    </select>
                </div >
                <div class="description-list">
                    <select name="" id="">
                        <option value="">No. of Bathroom</option>
                        <option value="">1</option>
                        <option value="">2</option>
                    </select>
                </div>                
                <div class="widget-find-btn"><button class="pointer"><RouterLink to="/grid"> Find it</RouterLink></button></div>
            </div>
        </div>
    </div>

    <div class="bottom-content">
        <div>OUR LATEST POSTINGS</div>
        <div><span class="material-symbols-outlined">expand_circle_down</span></div>
    </div>
</div>
</template> 

<style>
.collapse {
  transition: height 600ms cubic-bezier(0.3, 0, 0.6, 1);
}
</style>