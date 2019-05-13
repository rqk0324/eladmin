<template>
<div>
    <div class="listbox list_p_b">
        <div class="goodsname">
            <Button class="screen" type="primary"><Icon class="icon" type="ios-arrow-back"/><em> 返回商品</em></Button>                                   
        </div>
    </div>
    <div class="contentbox">
        <Table  height="200" border :columns="columns" :data="data">
            <template slot-scope="{ row, index }" slot="操作">
                <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">查看评论</Button>
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
                columns: [
                    {
                        title: ' ',
                        type: 'index',
                        width: '50',
                        key: '',
                        align: 'center'
                    },
                    {
                        title: '用户',
                        width: '210',
                        key: '用户',
                        align: 'center',
                    },
                    {
                        title: '评价星数',
                        width: '150',
                        key: '评价星数',
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '评价',
                        width: '80',
                        key: '评价',
                        ellipsis: true,
                        align: 'center'
                    },
                    {
                        title: '运单号',
                        width: '300',
                        key: '运单号',
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '评价时间',
                        width: '230',
                        key: '评价时间',
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '前台显示',
                        width: '150',
                        key: '前台显示',
                        align: 'center',
                        sortable: true
                    },
                    {
                        title: '操作',
                        key: '操作',
                        width: 200,
                        slot: '操作',
                        align: 'center',
                    }
                ],
                data: [
                    {   
                        用户:'kkk',
                        评价星数:'5星',
                        评价:'lkkkkkkkkk',
                        运单号: '123456789',
                        评价时间: '2018-09-25 15:22:37',
                        前台显示: '上衣',
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
.list_p_b{
    padding-bottom: 10px;
}
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
