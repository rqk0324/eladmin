<template>
    <div style="margin-top:20px;border:1px solid #eee">
             <Table style="margin:20px 10px 0 10px" border ref="selection" width="100%" :columns="columns4" :data="currentPageData"></Table>
             <Page show-elevator v-on:on-change="change" :current="currentPage" :page-size="pageSize" show-sizer :total="sumPage" show-total style="margin:30px 0"/>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                columns4: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: '支付单号',
                        key: 'name',
                        width:160,
                         sortable: true
                    },
                    {
                        title: '状态',
                        key: 'age',
                        width:140
                    },
                    {
                        title: '支付方式',
                        key: 'address',
                        width:140
                    },
                    {
                        title: '单据类型',
                        key: 'address',
                        width:140
                    },
                    {
                        title: '用户',
                        key: 'address',
                        width:140
                    },
                     {
                        title: '金额',
                        key: 'address',
                        width:140
                    },
                     {
                        title: '操作',
                        key: 'address',
                        width:140
                    },
                     {
                        title: '金额',
                        key: 'address',
                        width:140
                    },
                     {
                        title: '操作',
                        key: 'address',
                        width:140
                    }
                    
                    
                ],
                data1: [
                    {
                        name: '25562004192925',
                        age: "待支付",
                        address: '支付宝支付',
                        date: '订单'
                    },
                    {
                        name: '25562004192923',
                        age: "待支付",
                        address: '支付宝支付',
                        date: '订单'
                    },
                    {
                        name: '25562004192922',
                        age: "待支付",
                        address: '支付宝支付',
                        date: '订单'
                    },
                    {
                        name: '25562004192928',
                        age: "待支付",
                        address: '支付宝支付',
                        date: '订单'
                    },
                     {
                        name: '25562004192928',
                        age: "待支付",
                        address: '支付宝支付',
                        date: '订单'
                    },
                     {
                        name: '25562004192928',
                        age: "待支付",
                        address: '支付宝支付',
                        date: '订单'
                    },
                     {
                        name: '25562004192928',
                        age: "待支付",
                        address: '支付宝支付',
                        date: '订单'
                    }
                ],
            totalPage: 1, // 统共页数，默认为1
            sumPage:"",// 总共的条数
            currentPage: 1, //当前页数 ，默认为1
            pageSize: 5, // 每页显示数量
            currentPageData: [] //当前页显示内容

            }
        },
        created(){
            console.log(this.data1.length)
            this.sumPage=this.data1.length
        },
        mounted(){
           
            
            this.totalPage = Math.ceil(this.data1.length / this.pageSize);
        // 计算得0时设置为1
        this.totalPage = this.totalPage == 0 ? 1 : this.totalPage;
        this.change(1);
        },
        methods: {
            handleSelectAll (status) {
                this.$refs.selection.selectAll(status);
            },
            change:function(value){
            this.currentPage=value
            console.log(this.currentPage)
             let begin = (this.currentPage - 1) * this.pageSize;
            let end = this.currentPage * this.pageSize;
            this.currentPageData = this.data1.slice(
                begin,
                end
            )
        }
    }
    }                                                                                                           
</script>
