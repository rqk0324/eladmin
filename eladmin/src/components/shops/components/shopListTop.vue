<template>
    <div id="shop-menu">
            <div class="shop-inline">
                    <label class="shop-label">订单号 ： </label>
                    <div class="shop-input-inline">
                        <input type="text" class="shop-input" placeholder="请输入订单号">
                    </div>
            </div>
            <div class="shop-inline">
                    <label class="shop-label">下单时间 ： </label>
                    <div class="shop-input-inline">
                         <DatePicker type="daterange" separator=" 到 " confirm placement="bottom-end" placeholder="开始时间 到 结束时间" style="width:100%;border-radius:2px"></DatePicker>
                    </div>
            </div>
             <div class="shop-inline">
                    <label class="shop-label">订单来源 ： </label>
                    <div class="shop-input-inline">
                      <Select v-model="model1" style="width:200px" placeholder="-- 全部 --">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                    </div>
            </div>
              <div class="shop-inline">
                    <label class="shop-label">用户 ： </label>
                    <div class="shop-input-inline">
                        <input type="text" class="shop-input" placeholder="用户名、昵称、手机">
                    </div>
            </div>
              <div class="shop-inline">
                    <label class="shop-label">手机号 ： </label>
                    <div class="shop-input-inline">
                        <input type="text" class="shop-input" placeholder="收货人手机号">
                    </div>
            </div>
            <div class="shop-btn-group">
                <button class="shop-btn">
                    <Icon class="Icon" type="ios-search-outline" />
                    <span>筛选</span>
                </button>
                 <button class="shop-btn">
                    <Icon class="Icon" type="logo-yen" />
                    <span>批量支付</span>
                </button>
                  <button class="shop-btn">
                    <Icon class="Icon" type="ios-close-circle-outline" />
                    <span>取消</span>
                </button>   
                 <button class="shop-btn">
                    <Icon class="Icon"  type="md-cloud-download" />
                    <span>导出</span>
                </button>  
                  <button class="shop-btn">
                    <Icon class="Icon" type="ios-close-circle-outline" />
                    <span>批量打印快递单</span>
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
                        value: 'PC页面',
                        label: 'PC页面'
                    },
                    {
                        value: 'H5页面',
                        label: 'H5页面'
                    },
                    {
                        value: '微信小程序',
                        label: '微信小程序'
                    },
                    {
                        value: '支付宝小程序',
                        label: '支付宝小程序'
                    },
                    {
                        value: 'APP',
                        label: 'APP'
                    }
                   
                ]
            }
        }
}
</script>


<style scoped>
#shop-menu{
    border:1px solid #e6e6e6;
    height: 96px;
    display:flex;
    flex-wrap: wrap;
}
#shop-menu .shop-inline:nth-of-type(1){
    margin-left:2%;
}
#shop-menu .shop-inline:nth-of-type(2){
    margin:1% 2% 0 2%;
}
#shop-menu .shop-inline:nth-of-type(4){
    margin:1% 2% 0 2%;
}
.shop-inline{
    width:27%;
    height:30px;
    display:flex;
    align-items: center;
    margin-top:1%;
}
.shop-label{
    color:#666;
    font-size:14px;
    width:28%;
}
.shop-input-inline{
    height:100%;
    width:75%;
    font-size:14px;
}
.shop-input:hover{
    border-color:#57a3f3;
    transition:all .5s;
}
.shop-input{
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
.shop-btn-group{
    width:40%;
    height:40px;
    margin-left:1%;
    margin-top:5px;
    display: flex;
    align-items:center;
    justify-content: space-around;
}
.shop-btn span{
    color:white;
}
.shop-btn{
    background-color: #17BED2;
    border:1px solid  #17BED2;
    padding:4px 7px 4px 6px;
    height:30px;
    cursor:pointer;
}
.shop-btn:hover{
    opacity:.75;
    transition:all .5s;
}
.shop-btn .Icon{
    font-size:16px;
    color:white;
    background: #17BED2;
    border:none;
    outline:none;
}

</style>
