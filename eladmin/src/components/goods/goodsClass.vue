<template> 
<div>
    <div class="listbox list_p_b">
        <div class="goodsname">
            <Button class="screen" type="primary"><Icon class="icon" type="ios-add-circle-outline"/><em> 添加</em></Button>                        
        </div>
    </div>
    <div class="contentbox">
        <Table class="tablebox" height="300" border :columns="columns" :data="data">
            <template class="good_btn" slot-scope="{ row, index }" slot="操作">
                <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">编辑</Button>
                <Button type="error" size="small" @click="remove(index)">删除</Button>
            </template>
        </Table>
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
                        title: '一级分类',
                        width: '200',
                        key: '一级分类',
                        align: 'center'
                    },
                    {
                        title: '二级分类',
                        width: '200',
                        key: '二级分类',
                        align: 'center'
                    },
                    {
                        title: '所属类型',
                        width: '150',
                        key: '所属类型',
                        align: 'center'
                    },
                    {
                        title: '图标',
                        width: '65',
                        key: '图标',
                        align: 'center',
                        render: (h) => {
            　　　　　　    return h('img', {
                　　　　　　　　attrs: {
                　　　　　　　　     src: '../../../../static/images/1.jpg',
                                   style: 'max-width: 30px;max-height: 30px;margin-top: 5px;'
            　　　　　　　　    },
            　　　　　　    });
            　　　　    }
                    },
                    {
                        title: '排序',
                        width: '100',
                        key: '排序',
                        align: 'center'
                    },
                    {
                        title: '操作',
                        key: '操作',
                        slot: '操作',
                        align: 'center'
                    }
                ],
                data: [
                    {   
                        序号:'1111',
                        一级分类: '精选上衣',
                        二级分类: ' ',
                        所属类型: '上衣',
                        图标: 'New York',
                        排序: '102'
                    },
                    {   
                        序号:'2',
                        一级分类: '',
                        二级分类: '毛呢外套',
                        所属类型: '上衣',
                        图标: 'New York',
                        排序: '102'
                    },
                    {
                        序号:'3',
                        一级分类: '',
                        二级分类: '牛仔裤',
                        所属类型: '上衣',
                        图标: 'New York',
                        排序: '102'
                    },
                    {   
                        序号:'4',
                        一级分类: '女包',
                        二级分类: ' ',
                        所属类型: '斜挎包',
                        图标: 'New York',
                        排序: '102'
                    },
                    {   
                        序号:'5',
                        一级分类: '',
                        二级分类: '手提包',
                        所属类型: '上衣',
                        图标: 'New York',
                        排序: '102'
                    },
                    {
                        序号:'6',
                        一级分类: '',
                        二级分类: '手提包',
                        所属类型: '上衣',
                        图标: 'New York',
                        排序: '102'
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
.screen{
    background: #17BED2;
    border-color: #17BED2;
    margin-right: 5px;
    padding: 6px 10px;
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

/* __________________ */
.contentbox{
    background: #fff;
}
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

