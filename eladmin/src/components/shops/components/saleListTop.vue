<template>
    <div id="sale-menu">
            <div class="sale-inline">
                    <label class="sale-label">售货单号 ： </label>
                    <div class="sale-input-inline">
                        <input type="text" class="sale-input" placeholder="请输入售货单号">
                    </div>
            </div>
             <div class="sale-inline">
                    <label class="sale-label">订单号 ： </label>
                    <div class="sale-input-inline">
                        <input type="text" class="sale-input" placeholder="请输入订单号">
                    </div>
            </div>
            <div class="sale-inline">
                    <label class="sale-label">下单时间 ： </label>
                    <div class="sale-input-inline">
                         <DatePicker type="daterange" separator=" 到 " confirm placement="bottom-end" placeholder="开始时间 到 结束时间" style="width:100%;border-radius:2px"></DatePicker>
                    </div>
            </div>
             <div class="sale-inline">
                    <label class="sale-label">用户手机：</label>
                    <div class="sale-input-inline">
                      <input type="text" class="sale-input" placeholder="请输入手机号码">
                    </div>
            </div>
              <div class="sale-inline">
                    <label class="sale-label">售后类型 ： </label>
                    <div class="sale-input-inline">
                         <Select v-model="model1" style="width:200px" placeholder="请选择">
                <Option v-for="item in cityList2" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                    </div>
            </div>
             <div class="sale-inline">
                    <label class="sale-label">状态 ： </label>
                    <div class="sale-input-inline">
                         <Select v-model="model1" style="width:200px" placeholder="请选择">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                    </div>
            </div>
            <div class="sale-btn-group">
                <button class="sale-btn">
                    <Icon class="Icon" type="ios-search-outline" />
                    <span>筛选</span>
                </button>
                 <button class="sale-btn">
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
                        value: '请选择',
                        label: '请选择'
                    },
                    {
                        value: '未审核',
                        label: '未审核'
                    },
                    {
                        value: '审核通过',
                        label: '审核通过'
                    },
                    {
                        value: '审核拒绝',
                        label: '审核拒绝'
                    }
                ],
                 cityList2: [
                     {
                        value: '请选择',
                        label: '请选择'
                    },
                    {
                        value: '只退款',
                        label: '只退款'
                    },
                    {
                        value: '退款退货',
                        label: '退款退货'
                    }
                ]
            }
        }
}
</script>



<style scoped>
#sale-menu{
    border:1px solid #e6e6e6;
    height: 125px;
    display:flex;
    flex-wrap: wrap;
}
#sale-menu .sale-inline:nth-of-type(1){
    margin-left:2%;
}
#sale-menu .sale-inline:nth-of-type(2){
    margin:1% 2% 0 2%;
}
#sale-menu .sale-inline:nth-of-type(4){
    margin:1% 2% 0 2%;
}
#sale-menu .sale-inline:nth-of-type(6){
    margin:1% 2% 0 2%;
}
#sale-menu .sale-inline:nth-of-type(7){
    margin:1% 2% 0 2%;
}
.sale-inline{
    width:27%;
    height:30px;
    display:flex;
    align-items: center;
    margin-top:1%;
}
.sale-label{
    color:#666;
    font-size:14px;
    width:28%;
}
.sale-input-inline{
    height:100%;
    width:75%;
    font-size:14px;
}
.sale-input:hover{
    border-color:#57a3f3;
    transition:all .5s;
}
.sale-input{
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
.sale-btn-group{
    width:40%;
    height:40px;
    margin-left:1%;
    margin-top:5px;
    display: flex;
    align-items:center;
}
.sale-btn span{
    color:white;
}
.sale-btn{
    background-color: #17BED2;
    border:1px solid  #17BED2;
    padding:4px 7px 4px 6px;
    height:30px;
    cursor:pointer;
    margin-left:15px;
}
.sale-btn:hover{
    opacity:.75;
    transition:all .5s;
}
.sale-btn .Icon{
    font-size:16px;
    color:white;
    background: #17BED2;
    border:none;
    outline:none;
}

</style>
