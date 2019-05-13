<template>
	<div class="list_center">
		<Table border :columns="columns" :data="datas"></Table>
		<Page show-elevator :current="3" :total="100" show-sizer placement="top"/>
	</div>
</template>

<script>
	export default {
		data () {
            return {
                columns: [
                    {
                        title: ' ',
                        key: 'xuhao',
						width: 60,
						align: 'center'
                    },
                    {
                        title: '手机号码',
                        key: 'iphone',
						width: 120,
						align: 'center'
                    },
					{
					    title: '等级',
					    key: 'dengji',
						width: 70,
						align: 'center'
					},
					{
					    title: '性别',
					    key: 'xingbie',
						width: 70,
						align: 'center'
					},
					{
					    title: '生日',
					    key: 'shengri',
						width: 100,
						align: 'center'
					},
					{
					    title: '头像',
					    key: 'touxiang',
						width: 80,
						align: 'center',
						render: (h, params) => {
						    return h('div', [
						        h('div', {
									style: {
									    width: '40px',
										height:'40px',
										backgroundImage: 'url(http://b-ssl.duitang.com/uploads/item/201510/05/20151005144251_LXtsH.jpeg)',
										backgroundSize: 'cover',
										borderRadius: '50%',
										cursor: 'pointer'
									},
						            on: {
						                click: () => {
						                    this.pic(params.index)
						                }
						            }
                                })
                            ]);
                        }
					},
					{
					    title: '昵称',
					    key: 'name',
						width: 150,
						align: 'center'
					},
					{
					    title: '余额',
					    key: 'yue',
						width: 70,
						align: 'center'
					},
					{
					    title: '积分',
					    key: 'jifen',
						width: 70,
						align: 'center'
					},
					{
					    title: '状态',
					    key: 'zhuangtai',
						width: 70,
						align: 'center'
					},
                    {
                        title: '邀请人',
                        key: 'yaoqing',
						width: 120,
						align: 'center'
                    },
					{
					    title: '创建时间',
					    key: 'shijian',
						width: 150,
						align: 'center'
					},
                    {
                        title: '操作',
                        key: 'caozuo',
                        width: 220,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px',
										background:'#17bed2'
                                    },
                                    on: {
                                        click: () => {
                                            this.one(params.index)
                                        }
                                    }
                                }, '修改'),
								h('Button', {
								    props: {
								        type: 'primary',
								        size: 'small',
										borderColor:'transparent'
								    },
								    style: {
								        marginRight: '5px',
										background:'#17bed2',
										borderColor:'transparent'
								    },
								    on: {
								        click: () => {
								            this.two(params.index)
								        }
								    }
								}, '修改余额'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
									style: {
										background:'#17bed2',
										borderColor:'transparent'
									},
                                    on: {
                                        click: () => {
                                            this.three(params.index)
                                        }
                                    }
                                }, '积分修改')
                            ]);
                        }
                    }
                ],
                datas: [
                    {
						xuhao:'1',
						iphone:'12345678910',
						dengji:'王者',
						xingbie:'待定',
						shengri:'2222-22-22',
						touxiang:`<img src='123'>`,
						name: 'John Brown',
						yue:'0.00',
						jifen:'5',
						zhuangtai:'正常',
						yaoqing:'12345678910',
						shijian:'2019-04-29 22:27:41'
                    },
                    {
                        xuhao:'2',
                        iphone:'12345678910',
                        dengji:'王者',
                        xingbie:'待定',
                        shengri:'',
                        touxiang:'',
                        name: 'John Brown',
                        yue:'0.00',
                        jifen:'5',
                        zhuangtai:'正常',
                        yaoqing:'',
                        shijian:'2019-04-29 22:27:41'
                    },
                    {
                        xuhao:'3',
                        iphone:'12345678910',
                        dengji:'王者',
                        xingbie:'待定',
                        shengri:'',
                        touxiang:'',
                        name: 'John Brown',
                        yue:'0.00',
                        jifen:'5',
                        zhuangtai:'正常',
                        yaoqing:'',
                        shijian:'2019-04-29 22:27:41'
                    },
                    {
                        xuhao:'4',
                        iphone:'12345678910',
                        dengji:'王者',
                        xingbie:'待定',
                        shengri:'',
                        touxiang:'',
                        name: 'John Brown',
                        yue:'0.00',
                        jifen:'5',
                        zhuangtai:'正常',
                        yaoqing:'',
                        shijian:'2019-04-29 22:27:41'
                    },
                    {
                        xuhao:'5',
                        iphone:'12345678910',
                        dengji:'王者',
                        xingbie:'待定',
                        shengri:'',
                        touxiang:'',
                        name: 'John Brown',
                        yue:'0.00',
                        jifen:'5',
                        zhuangtai:'正常',
                        yaoqing:'',
                        shijian:'2019-04-29 22:27:41'
                    },
                    {
                        xuhao:'6',
                        iphone:'12345678910',
                        dengji:'王者',
                        xingbie:'待定',
                        shengri:'',
                        touxiang:'',
                        name: 'John Brown',
                        yue:'0.00',
                        jifen:'5',
                        zhuangtai:'正常',
                        yaoqing:'',
                        shijian:'2019-04-29 22:27:41'
                    },
                    {
                        xuhao:'7',
                        iphone:'12345678910',
                        dengji:'王者',
                        xingbie:'待定',
                        shengri:'',
                        touxiang:'',
                        name: 'John Brown',
                        yue:'0.00',
                        jifen:'5',
                        zhuangtai:'正常',
                        yaoqing:'',
                        shijian:'2019-04-29 22:27:41'
                    },
                    {
                        xuhao:'8',
                        iphone:'12345678910',
                        dengji:'王者',
                        xingbie:'待定',
                        shengri:'',
                        touxiang:'',
                        name: 'John Brown',
                        yue:'0.00',
                        jifen:'5',
                        zhuangtai:'正常',
                        yaoqing:'',
                        shijian:'2019-04-29 22:27:41'
                    },
                    {
                        xuhao:'9',
                        iphone:'12345678910',
                        dengji:'王者',
                        xingbie:'待定',
                        shengri:'',
                        touxiang:'',
                        name: 'John Brown',
                        yue:'0.00',
                        jifen:'5',
                        zhuangtai:'正常',
                        yaoqing:'',
                        shijian:'2019-04-29 22:27:41'
                    },
                    {
                        xuhao:'10',
                        iphone:'12345678910',
                        dengji:'王者',
                        xingbie:'待定',
                        shengri:'',
                        touxiang:'',
                        name: 'John Brown',
                        yue:'0.00',
                        jifen:'5',
                        zhuangtai:'正常',
                        yaoqing:'',
                        shijian:'2019-04-29 22:27:41'
                    }
                ]
            }
        },
        methods: {
            one (index) {
                this.$Modal.confirm({
                    title: '修改全部信息',
                    content: `
								昵称：<input type="text" value="${this.datas[index].name}"><br>
								性别：<input type="text" value="${this.datas[index].xingbie}"><br>
								生日：<input type="text" value="${this.datas[index].shengri}"><br>
								等级：<input type="text" value="${this.datas[index].dengji}"><br>
								头像：<input type="text" value="${this.datas[index].touxiang}"><br>
								积分：<input type="text" value="${this.datas[index].jifen}"><br>
								余额：<input type="text" value="${this.datas[index].yue}"><br>
								状态：<input type="text" value="${this.datas[index].zhuangtai}"><br>
								邀请人：<input type="text" value="${this.datas[index].yaoqing}"><br>
								手机号码：<input type="text" value="${this.datas[index].iphone}"><br>
								创建时间：<input type="text" value="${this.datas[index].shijian}">
							 `
                })
            },
			two (index) {
			    this.$Modal.confirm({
			        title: '修改余额',
			        content: `余额：<input type="text" value="${this.datas[index].yue}">`
			    })
			},
			three (index) {
			    this.$Modal.confirm({
			        title: '修改积分',
			        content: `积分：<input type="text" value="${this.datas[index].jifen}">`
			    })
			},
			pic (index) {
			    this.$Modal.confirm({
			        content: `<div style="width:200px;height:200px">
								<img src="http://b-ssl.duitang.com/uploads/item/201510/05/20151005144251_LXtsH.jpeg" style="width:200px;height:200px">
							</div>`
			    })
			}
        }
	}
</script>

<style scoped>
	.list_center{
		text-align: center;
		margin-top: 1%;
	}
	.xiugai p{
		margin-right: 10px;
	}
</style>
