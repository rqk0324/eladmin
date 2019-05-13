<template>
    <div id="send-menu">
            <div class="send-inline">
                    <label class="send-label">发货单号 ： </label>
                    <div class="send-input-inline">
                        <input type="text" class="send-input" placeholder="请输入发货单号">
                    </div>
            </div>
             <div class="send-inline">
                    <label class="send-label">订单号 ： </label>
                    <div class="send-input-inline">
                        <input type="text" class="send-input" placeholder="请输入订单号">
                    </div>
            </div>
            <div class="send-inline">
                    <label class="send-label">下单时间 ： </label>
                    <div class="send-input-inline">
                         <DatePicker type="daterange" separator=" 到 " confirm placement="bottom-end" placeholder="开始时间 到 结束时间" style="width:100%;border-radius:2px"></DatePicker>
                    </div>
            </div>
             <div class="send-inline">
                    <label class="send-label">快递单号 ： </label>
                    <div class="send-input-inline">
                        <input type="text" class="send-input" placeholder="请输入快递单号">
                    </div>
            </div>
              <div class="send-inline">
                    <label class="send-label">电话号 ： </label>
                    <div class="send-input-inline">
                        <input type="text" class="send-input" placeholder="请输入收货电话号码">
                    </div>
            </div>
            <div class="send-btn-group">
                <button class="send-btn">
                    <Icon class="Icon" type="ios-search-outline" />
                    <span>筛选</span>
                </button>
                 <button class="send-btn">
                    <Icon class="Icon"  type="md-cloud-download" />
                    <span>导出</span>
                </button>  
            </div>
        </div>
</template>


<script>
export default {
            
}
</script>



<style scoped>
#send-menu{
    border:1px solid #e6e6e6;
    height: 96px;
    display:flex;
    flex-wrap: wrap;
}
#send-menu .send-inline:nth-of-type(1){
    margin-left:2%;
}
#send-menu .send-inline:nth-of-type(2){
    margin:1% 2% 0 2%;
}
#send-menu .send-inline:nth-of-type(4){
    margin:1% 2% 0 2%;
}
.send-inline{
    width:27%;
    height:30px;
    display:flex;
    align-items: center;
    margin-top:1%;
}
.send-label{
    color:#666;
    font-size:14px;
    width:28%;
}
.send-input-inline{
    height:100%;
    width:75%;
    font-size:14px;
}
.send-input:hover{
    border-color:#57a3f3;
    transition:all .5s;
}
.send-input{
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
.send-btn-group{
    width:40%;
    height:40px;
    margin-left:1%;
    margin-top:5px;
    display: flex;
    align-items:center;
}
.send-btn span{
    color:white;
}
.send-btn{
    background-color: #17BED2;
    border:1px solid  #17BED2;
    padding:4px 7px 4px 6px;
    height:30px;
    cursor:pointer;
    margin-left:15px;
}
.send-btn:hover{
    opacity:.75;
    transition:all .5s;
}
.send-btn .Icon{
    font-size:16px;
    color:white;
    background: #17BED2;
    border:none;
    outline:none;
}

</style>
