<script>
import { computed } from 'vue'
export default { 
  props: { 
    'modelValue': String, 
  },
  setup(props, { emit }) { 
    const message = computed({ 
      get: () => props.modelValue, 
      set: (value) => emit('update:modelValue', value) 
    }) 

    return { 
      message, 
    } 
  }
}

</script>
<template> 
   <div class="main">
            <div> Real estate without the hassle</div>
            <div><input type="text" class="property" placeholder="FIND A PROPERTY"></div>
            <div class="filter"><strong><font-awesome-icon :icon="['fas', 'filter']" /> FILTER</strong></div>
        </div>
        <div class="bottom-content">
            <div>OUR LATEST POSTINGS</div>
            <div><font-awesome-icon :icon="['fas', 'caret-down']" /></div>
        </div>
</template>
<style scoped>
@media (max-width: 818px){
.container {
  padding-bottom: 10%;
}}

</style>