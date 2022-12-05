<template>
    
<div class="content-nav">
    <div class="nav-txt">
        <div class="active">All</div>
        <div>Recent</div>
        <div>Sale</div>
    </div>
    <div class="nav-icon">
        <div class="grd-ls">
            <div>View</div> <div><router-link to="/list"><span class="material-symbols-outlined">reorder</span></router-link></div>
            <div><router-link to="/grid"> <span><font-awesome-icon :icon="['fas', 'grip-horizontal']" /></span>  </router-link></div>
        </div>
        <div class="search-filter">
            <div class="srt">Sort by</div>
            <div class="srt">
                <input type="text" placeholder="Most Recent">
                <select name="" id=""> 
                    <option value=""></option>
                    <option value="">1</option>
                    <option value="">2</option>
                </select>
            </div>
        </div>
    </div>
</div>

</template>