<template>
    <div id="sale-list">
        <saleListTop/>
        <saleListCont/>
    </div>
</template>


<script>
import saleListTop from "./components/saleListTop";
import saleListCont from "./components/saleListCont";
export default {
        components:{
             saleListTop,
             saleListCont
        }
}
</script>


<style scoped>

</style>
