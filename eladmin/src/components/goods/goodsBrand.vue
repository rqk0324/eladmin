<template>
<div>
    <div class="listbox">
        <div class="goodsname">
            <div class="goodname_one">
                <span>品牌名称：</span>
                <Input class="input_name" v-model="value" placeholder="请输入名称关键字"/>
            </div>
            <div class="goodname_one">
                <span>更新时间：</span>
                <Input class="input_name" v-model="value" placeholder="开始时间  到  结束时间"/>
            </div>
            <Button class="screen screensx" type="primary"><Icon class="icon" type="ios-search-outline" /><em> 筛选</em></Button>           
            <Button class="screen" type="primary"><Icon class="icon" type="ios-add-circle-outline"/><em> 添加</em></Button>                                   
        </div>
    </div> 
    <div class="contentbox">
        <Table height="300" border :columns="columns" :data="data">
            <template slot-scope="{ row, index }" slot="操作">
                <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">编辑</Button>
                <Button type="error" size="small" @click="remove(index)">删除</Button>
            </template>    
        </Table>
        <Page class="pages" :total="20"  size="small"  show-elevator show-total show-sizer/>
    </div>
</div>
</template>

<script>
     export default {
        data () {
            return {
                value: '',
                columns: [
                    {
                        title: ' ',
                        type: 'index',
                        width: '50',
                        key: '',
                        align: 'center'
                    },
                    {
                        title: '品牌名',
                        width: '200',
                        key: '品牌名',
                        align: 'center'
                    },
                    {
                        title: 'LOGO',
                        width: '200',
                        key: 'LOGO',
                        align: 'center',
                        render: (h) => {
            　　　　　　    return h('img', {
                　　　　　　　　attrs: {
                　　　　　　　　     src: '../../../../static/images/logo1.png',
                                   style: 'max-width: 30px;max-height: 30px;margin-top: 5px;'
            　　　　　　　　    },
            　　　　　　    });
            　　　　    }
                    },
                    {
                        title: '更新时间',
                        width: '150',
                        key: '更新时间',
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '排序',
                        width: '100',
                        key: '排序',
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '操作',
                        key: '操作',
                        slot: '操作',
                    }
                ],
                data: [
                    {   
                        品牌名: '精选上衣',
                        更新时间: '2018-09-25 15:22:37',
                        排序: '上衣',
                    },
                    {   
                        品牌名: '精选上衣',
                        更新时间: '2018-09-25 15:22:48',
                        排序: '上衣',
                    },
                    {
                        品牌名: '精选上衣',
                        更新时间: '2018-09-25 15:23:01',
                        排序: '上衣',
                    },
                    {   
                        品牌名: '精选上衣',
                        更新时间: '2018-09-25 15:23:21',
                        排序: '上衣',
                    },
                    {   
                        品牌名: '精选上衣',
                        更新时间: '2018-09-25 15:23:21',
                        排序: '上衣',
                    },
                    {
                        品牌名: '精选上衣',
                        更新时间: '2018-09-25 15:23:21',
                        排序: '上衣',
                    },
                    {   
                        品牌名: '精选上衣',
                        更新时间: '2018-09-25 15:22:37',
                        排序: '上衣',
                    },
                    {   
                        品牌名: '精选上衣',
                        更新时间: '2018-09-25 15:22:48',
                        排序: '上衣',
                    },
                    {
                        品牌名: '精选上衣',
                        更新时间: '2018-09-25 15:23:01',
                        排序: '上衣',
                    },
                    {   
                        品牌名: '精选上衣',
                        更新时间: '2018-09-25 15:23:21',
                        排序: '上衣',
                    },
                    {   
                        品牌名: '精选上衣',
                        更新时间: '2018-09-25 15:23:21',
                        排序: '上衣',
                    },
                    {
                        品牌名: '精选上衣',
                        更新时间: '2018-09-25 15:23:21',
                        排序: '上衣',
                    },
                    {   
                        品牌名: '精选上衣',
                        更新时间: '2018-09-25 15:22:37',
                        排序: '上衣',
                    },
                    {   
                        品牌名: '精选上衣',
                        更新时间: '2018-09-25 15:22:48',
                        排序: '上衣',
                    },
                    {
                        品牌名: '精选上衣',
                        更新时间: '2018-09-25 15:23:01',
                        排序: '上衣',
                    },
                    {   
                        品牌名: '精选上衣',
                        更新时间: '2018-09-25 15:23:21',
                        排序: '上衣',
                    },
                    {   
                        品牌名: '精选上衣',
                        更新时间: '2018-09-25 15:23:21',
                        排序: '上衣',
                    },
                    {
                        品牌名: '精选上衣',
                        更新时间: '2018-09-25 15:23:21',
                        排序: '上衣',
                    }
                ]
            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data[index].name}<br>Age：${this.data[index].age}<br>Address：${this.data[index].address}`
                })
            },
            remove (index) {
                this.data.splice(index, 1);
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
.contentbox{
    background: #fff;
    border: 1px solid #e6e6e6;
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
.pages{
    padding: 5px 10px;
}


/* -------------------------------- */

.contentbox>>>.ivu-table td{
    height: 40px;
}
.contentbox>>>.ivu-btn-primary{
    background-color: #17BED2;
    border: 0;
}
.contentbox>>>.ivu-btn-error{
    background-color: #999;
    border: 0;
}

</style>
