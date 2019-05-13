<template>
    <div id="return-menu">
            <div class="return-inline">
                    <label class="return-label">退货单号 ： </label>
                    <div class="return-input-inline">
                        <input type="text" class="return-input" placeholder="请输入退货单号">
                    </div>
            </div>
             <div class="return-inline">
                    <label class="return-label">订单号 ： </label>
                    <div class="return-input-inline">
                        <input type="text" class="return-input" placeholder="请输入订单号">
                    </div>
            </div>
            <div class="return-inline">
                    <label class="return-label">下单时间 ： </label>
                    <div class="return-input-inline">
                         <DatePicker type="daterange" separator=" 到 " confirm placement="bottom-end" placeholder="开始时间 到 结束时间" style="width:100%;border-radius:2px"></DatePicker>
                    </div>
            </div>
             <div class="return-inline">
                    <label class="return-label">用户手机 ： </label>
                    <div class="return-input-inline">
                        <input type="text" class="return-input" placeholder="请输入用户手机号">
                    </div>
            </div>
              <div class="return-inline">
                    <label class="return-label">退货状态 ： </label>
                    <div class="return-input-inline">
                        <Select v-model="model1" style="width:160px" placeholder="请选择">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
                    </div>
            </div>
            <div class="return-inline">
                    <label class="return-label">物流单号 ： </label>
                    <div class="return-input-inline">
                        <input type="text" class="return-input" placeholder="请输入物流单号">
                    </div>
            </div>
            <div class="return-btn-group">
                <button class="return-btn">
                    <Icon class="Icon" type="ios-search-outline" />
                    <span>筛选</span>
                </button>
                 <button class="return-btn">
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
                        value: '待退货',
                        label: '待退货'
                    },
                    {
                        value: '运输中',
                        label: '运输中'
                    },
                    {
                        value: '已收退货',
                        label: '已收退货'
                    }
                ]
          }
      }      
}
</script>



<style scoped>
#return-menu{
    border:1px solid #e6e6e6;
    height: 96px;
    display:flex;
    flex-wrap: wrap;
}
#return-menu .return-inline:nth-of-type(1){
    margin-left:2%;
}
#return-menu .return-inline:nth-of-type(2){
    margin:1% 2% 0 2%;
}
#return-menu .return-inline:nth-of-type(4){
    margin:1% 2% 0 2%;
}
.return-inline{
    width:27%;
    height:30px;
    display:flex;
    align-items: center;
    margin-top:1%;
}
.return-label{
    color:#666;
    font-size:14px;
    width:28%;
}
.return-input-inline{
    height:100%;
    width:60%;
    font-size:14px;
}
.return-input:hover{
    border-color:#57a3f3;
    transition:all .5s;
}
.return-input{
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
.return-btn-group{
    width:15%;
    height:30px;
    margin-top:5px;
    display: flex;
    align-items:center;
}
.return-btn span{
    color:white;
}
.return-btn{
    background-color: #17BED2;
    border:1px solid  #17BED2;
    padding:4px 7px 4px 6px;
    height:30px;
    cursor:pointer;
    margin-left:15px;
}
.return-btn:hover{
    opacity:.75;
    transition:all .5s;
}
.return-btn .Icon{
    font-size:16px;
    color:white;
    background: #17BED2;
    border:none;
    outline:none;
}

</style>
