<template>
<div class="listbox">
    <div class="contentbox">
        <Tabs class="allgoods" :animated="false">
            <TabPane :label="label1">
                <div class="goods_table">
                    <Table border ref="selection" :columns="columns" :data="data1" >   
                        <template class="good_btn" slot-scope="{ row, index }" slot="操作">
                            <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">查看评论</Button>
                            <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">编辑</Button>
                            <Button type="error" size="small" @click="remove(index)">删除</Button>
                        </template>
                    </Table>
                </div>
            </TabPane>
            <TabPane :label="label2">上架商品内容</TabPane>
            <TabPane label="下架商品">下架商品内容</TabPane>
            <TabPane label="库存警告">库存</TabPane>
            <Page class="pages" :total="20"  size="small"  show-elevator show-total show-sizer/>
        </Tabs>   
    </div>       
</div>
</template>

<script>
    export default {
        data () {
            return {
                label1: (h) => {
                    return h('div', [
                        h('span', '全部商品'),
                        h('Badge', {
                            props: {
                                count: 3
                            }
                        })
                    ])
                },
                label2: (h) => {
                    return h('div', [
                        h('span', '上架商品'),
                        h('Badge', {
                            props: {
                                count: 10
                            }
                        })
                    ])
                },
                columns: [
                    {
                        type: 'selection',
                        width: 50,
                        align: 'center'
                    },
                    {   
                        type:'index',
                        width: 40,
                        title: ' ',
                        key: ''
                    },
                    {
                        title: '热门',
                        slot:'热门',
                        width: 80,
                        key: '热门',
                        sortable: true,
                        render: (h, params) => {  // 重点
                            let _this = this
                            return h('i-switch', {  //按钮的话是：button自行替换
                                props: {  //这里可以设置它的属性
                                    // value: params.row.status,     //设置它的值比如：true或false
                                    value: true,

                                },
                                scopedSlots:{
                                    open:()=> h('span','开'),
                                    close:()=> h('span','关'),
                                }
                            });
                        }
                    },
                    {
                        title: '推荐',
                        width: 80,
                        key: '推荐',
                        sortable: true,
                        render: (h, params) => {  // 重点
                            let _this = this
                            return h('i-switch', {  //按钮的话是：button自行替换
                                props: {  //这里可以设置它的属性
                                    value: true,
                                },
                                scopedSlots:{
                                    open:()=> h('span','开'),
                                    close:()=> h('span','关'),
                                }
                            });
                        }
                    },
                    {
                        title: '缩略图',
                        width: 100,
                        key: '缩略图',
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
                        title: '名称',
                        width: 250,
                        key: '名称',
                        ellipsis: true,
                        align: 'center'
                    },
                    {
                        title: '排序',
                        width: 80,
                        key: '排序',

                    },
                    {
                        title: '销售价',
                        width: 100,
                        key: '销售价'
                    },
                    {
                        title: '成本价',
                        width: 100,
                        key: '成本价'
                    },
                    {
                        title: '分类',
                        width: 150,
                        key: '分类'
                    },
                    {
                        width: 100,    
                        title: '品牌',
                        key: '品牌'
                    },
                    {
                        title: '上下架',
                        width: 100,
                        key: '上下架'
                    },
                    {
                        title: '库存',
                        width: 100,
                        key: '库存'
                    },
                    {
                        title: '操作',
                        width: 250,
                        key: '操作',
                        slot: '操作'
                    }
                ],
                data1: [
                    {
                        热门: 'John',
                        推荐: 28,
                        缩略图: 'New York No. 1 Lake Park',
                        名称: '衬衫男士秋季韩版修身潮流百搭帅气休闲外套白色衬衣加绒长袖寸衫',
                        排序: '100',
                        销售价: '2016-10-03',
                        成本价: '2016-10-03',
                        分类: '2016-10-03',
                        品牌: '2016-10-03',
                        上下架: '2016-10-03',
                        库存: '2016-10-03',
                        操作: '2016-10-03'
                    },
                    {
                        热门: 'John Brown',
                        推荐: 18,
                        缩略图: 'New York No. 1 Lake Park',
                        名称: '衬衫男士秋季韩版修身潮流百搭帅气休闲外套白色衬衣加绒长袖寸衫',
                        排序: '100',
                        销售价: '2016-10-03',
                        成本价: '2016-10-03',
                        分类: '2016-10-03',
                        品牌: '2016-10-03',
                        上下架: '2016-10-03',
                        库存: '2016-10-03',
                        操作: '2016-10-03'
                    },
                    {
                        热门: 'Jim Green',
                        推荐: 24,
                        缩略图: 'London No. 1 Lake Park',
                        名称: '衬衫男士秋季韩版修身潮流百搭帅气休闲外套白色衬衣加绒长袖寸衫',
                        排序: '100',
                        销售价: '2016-10-03',
                        成本价: '2016-10-03',
                        分类: '2016-10-03',
                        品牌: '2016-10-03',
                        上下架: '2016-10-03',
                        库存: '2016-10-03',
                        操作: '2016-10-03'
                    },
                    {
                        热门: 'Joe Black',
                        推荐: 30,
                        缩略图: 'Sydney No. 1 Lake Park',
                        名称: '衬衫男士秋季韩版修身潮流百搭帅气休闲外套白色衬衣加绒长袖寸衫',
                        排序: '100',
                        销售价: '2016-10-03',
                        成本价: '2016-10-03',
                        分类: '2016-10-03',
                        品牌: '2016-10-03',
                        上下架: '2016-10-03',
                        库存: '2016-10-03',
                        操作: '2016-10-03'
                    },
                    {
                        热门: 'Jon Snow',
                        推荐: 26,
                        缩略图: 'Ottawa No. 2 Lake Park',
                        名称: '衬衫男士秋季韩版修身潮流百搭帅气休闲外套白色衬衣加绒长袖寸衫',
                        排序: '100',
                        销售价: '2016-10-03',
                        成本价: '2016-10-03',
                        分类: '2016-10-03',
                        品牌: '2016-10-03',
                        上下架: '2016-10-03',
                        库存: '2016-10-03',
                        操作: '2016-10-03'
                    }
                ]
            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: '跳转评论页面',
                    content: `xxxx`
                })
            },
            remove (index) {
                this.data1.splice(index, 1);
            }
        },
 
    }
</script>

<style scoped>
.contentbox{
    background: #fff;
    border: 1px solid #e6e6e6;
}
.allgoods>>>.ivu-badge-count{
    background: #e6e6e6;
    border-radius: 2px;  
    margin-left: 5px; 
    color: #999;
}
.allgoods>>>.ivu-tabs-bar{
    margin-bottom: 0;
    height: 40px;
    border: 0;
}
.allgoods>>>.ivu-tabs-nav{
    height: 42px;
}
.allgoods>>>.ivu-tabs-tab-active{
    color: #17BED2;
}
.allgoods>>>.ivu-tabs-tab:hover{
    color: #17BED2;
}
.allgoods>>>.ivu-tabs-ink-bar{
    background-color: #17BED2;
}
.goods_table>>>.ivu-checkbox-checked .ivu-checkbox-inner{
    background: #17BED2;
    border:0;
}
.goods_table>>>.ivu-checkbox-checked .ivu-checkbox-inner:after{
    top:2px;
    left: 5px;
}
.goods_table>>>.ivu-switch-checked{
    background: #17BED2;
    border-color: #17BED2;
}
.goods_table>>>.ivu-table-cell{
    display: block;
    text-align: center;
}
.goods_table>>>.ivu-btn-primary{
    background-color: #17BED2;
    border: 0;
}
.goods_table>>>.ivu-btn-error{
    background-color: #999;
    border: 0;
}
.goods_table>>>.ivu-table td{
    height: 40px;
}
.goods_table>>>.ivu-table-body{
    height: 181px;
}
.pages{
    padding: 5px 10px;
}

</style>
