<template>
    <div class="listbox">
        <div class="goodsname">
            <div class="goodname_one">
                <span>商品名称：</span>
                <Input class="input_name" v-model="value" placeholder="请输入商品名称"/>
            </div>
            <div class="goodname_one">
                <span>上架状态：</span>
                <Select placeholder="全部" class="all_select" v-model="model1">
                    <Option v-for="item in goodsshaixuan" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </div> 
            <Button class="screen screensx" type="primary"><Icon class="icon" type="ios-search-outline" /><em> 筛选</em></Button>           
        </div>
        <div class="addgoods">
            <Button class="screen" type="primary"><Icon class="icon" type="ios-add-circle-outline"/><em> 添加商品</em></Button>            
            <div class="goodname_one">
                <span>批量操作：</span>
                <Select class="all_select" v-model="model2">
                    <Option v-for="item in goodspiliang" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
            </div> 
            <Button class="screen" type="primary"><Icon class="icon" type="md-cloud-upload" /><em> 导入商品</em></Button> 
            <Button class="screen" type="primary"><Icon class="icon" type="md-cloud-download" /><em> 导出</em></Button> 
            <Button class="screen" type="primary"><Icon class="icon" type="ios-add-circle-outline" /><em> 高级筛选</em></Button> 
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                value: '',
                goodsshaixuan: [
                    {
                        value: 'beijing',
                        label: '全部'
                    },
                    {
                        value: 'shanghai',
                        label: '上架'
                    },
                    {
                        value: 'shenzhen',
                        label: '下架'
                    }
                ],
                model1: '',
                goodspiliang: [
                    {
                        value: 'shanghai',
                        label: '上架'
                    },
                    {
                        value: 'shenzhen',
                        label: '下架'
                    }
                ],
                model2: ''
            }
        }
    }
</script>

<style scoped>
.listbox{
    padding: 10px 10px 0 10px;
    margin-bottom: 10px;
    border: 1px solid #e6e6e6;
    background: #fff;
}
.goodname_one{
    display: inline-block;
    margin-right: 15px;
    margin-bottom: 10px;
}
.input_name{
    width: 200px;  
} 
.all_select{
    width:100px;
}
.screen{
    background: #17BED2;
    border-color: #17BED2;
    margin-right: 5px;
    padding: 6px 10px;
}
.screensx{
    padding:6px 9px;
}
.icon{
    font-size: 14px;
    font-weight: 600;
}
.screen em{
    font-style: normal;
    vertical-align: middle;
}
.screen:hover{
    background:#17BED2;
    opacity: .8;
}
</style>
