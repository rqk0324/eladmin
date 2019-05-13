<template>
    <div id="take-menu">
            <div class="take-inline">
                    <label class="take-label">提货单号 ： </label>
                    <div class="take-input-inline">
                        <input type="text" class="take-input" placeholder="提货单号">
                    </div>
            </div>
             <div class="take-inline">
                    <label class="take-label">订单号 ： </label>
                    <div class="take-input-inline">
                        <input type="text" class="take-input" placeholder="订单号">
                    </div>
            </div>
            <div class="take-inline">
                    <label class="take-label">下单时间 ： </label>
                    <div class="take-input-inline">
                         <DatePicker type="daterange" separator=" 到 " confirm placement="bottom-end" placeholder="开始时间 到 结束时间" style="width:100%;border-radius:2px"></DatePicker>
                    </div>
            </div>
             <div class="take-inline">
                    <label class="take-label">提货状态 ： </label>
                    <div class="take-input-inline">
                       <Select v-model="model1" style="width:200px" placeholder="-- 全部 --">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                    </div>
            </div>
              <div class="take-inline">
                    <label class="take-label">提货门店 ： </label>
                    <div class="take-input-inline">
                         <Select v-model="model1" style="width:200px" placeholder="-- 全部 --">
                <Option v-for="item in cityList2" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                    </div>
            </div>
             <div class="take-inline">
                    <label class="take-label">提货人名 ： </label>
                    <div class="take-input-inline">
                        <input type="text" class="take-input" placeholder="提货人电话">
                    </div>
            </div>
             <div class="take-inline">
                    <label class="take-label">提货电话 ： </label>
                    <div class="take-input-inline">
                        <input type="text" class="take-input" placeholder="提货人电话">
                    </div>
            </div>
            <div class="take-btn-group">
                <button class="take-btn">
                    <Icon class="Icon" type="ios-search-outline" />
                    <span>筛选</span>
                </button>
                 <button class="take-btn">
                    <Icon class="Icon"  type="md-cloud-download" />
                    <span>导出</span>
                </button>  
            </div>
        </div>
</template>


<script>
export default {
        data(){
            return{
                 cityList: [
                     {
                        value: '-- 全部 --',
                        label: '-- 全部 --'
                    },
                    {
                        value: '未提货',
                        label: '未提货'
                    },
                    {
                        value: '已提货',
                        label: '已提货'
                    }
                ],
                 cityList2: [
                     {
                        value: '-- 全部 --',
                        label: '-- 全部 --'
                    },
                    {
                        value: '顺丰',
                        label: '顺丰'
                    },
                    {
                        value: '韵达',
                        label: '韵达'
                    }
                ]
            }
        }
}
</script>



<style scoped>
#take-menu{
    border:1px solid #e6e6e6;
    height: 125px;
    display:flex;
    flex-wrap: wrap;
}
#take-menu .take-inline:nth-of-type(1){
    margin-left:2%;
}
#take-menu .take-inline:nth-of-type(2){
    margin:1% 2% 0 2%;
}
#take-menu .take-inline:nth-of-type(4){
    margin:1% 2% 0 2%;
}
#take-menu .take-inline:nth-of-type(6){
    margin:1% 2% 0 2%;
}
#take-menu .take-inline:nth-of-type(7){
    margin:1% 2% 0 2%;
}
.take-inline{
    width:27%;
    height:30px;
    display:flex;
    align-items: center;
    margin-top:1%;
}
.take-label{
    color:#666;
    font-size:14px;
    width:28%;
}
.take-input-inline{
    height:100%;
    width:75%;
    font-size:14px;
}
.take-input:hover{
    border-color:#57a3f3;
    transition:all .5s;
}
.take-input{
    width:100%;
    height:100%;
    padding-left:10px;
    box-sizing: border-box;
    outline:none;
    border:1px solid #e6e6e6;
    border-radius:2px;
}
input::placeholder{
    color:#c1c1c1;
}
.take-btn-group{
    width:40%;
    height:40px;
    margin-left:1%;
    margin-top:5px;
    display: flex;
    align-items:center;
}
.take-btn span{
    color:white;
}
.take-btn{
    background-color: #17BED2;
    border:1px solid  #17BED2;
    padding:4px 7px 4px 6px;
    height:30px;
    cursor:pointer;
    margin-left:15px;
}
.take-btn:hover{
    opacity:.75;
    transition:all .5s;
}
.take-btn .Icon{
    font-size:16px;
    color:white;
    background: #17BED2;
    border:none;
    outline:none;
}

</style>
