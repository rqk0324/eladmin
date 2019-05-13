<template>
  <div id="shop-table">
    <Tabs value="name1" type="card">
      <TabPane :label="'label'+key" name="name1" v-for="(list,key) in 6" :key="key">
        <div>
          <Table ref="selection" :columns="columns4" :data="data1" height="300" width="1100"></Table>
        </div>
      </TabPane>

    </Tabs>
    <Page :total='100' show-sizer show-elevator="true" show-total='true'/>
  </div>
</template>


<script>
  export default {
    data() {
      return {

        label: (h) => {
          return h('div', [
            h('span', '全部订单'),
            h('Badge', {
              props: {
                count: 1376
              }
            })
          ])
        },
        label2: (h) => {
          return h('div', [
            h('span', '待支付'),
            h('Badge', {
              props: {
                count: 209
              }
            })
          ])
        },
        label3: (h) => {
          return h('div', [
            h('span', '待收货'),
            h('Badge', {
              props: {
                count: 595
              }
            })
          ])
        },
        label4: (h) => {
          return h('div', [
            h('span', '待评价'),
            h('Badge', {
              props: {
                count: 34
              }
            })
          ])
        },
        label5: (h) => {
          return h('div', [
            h('span', '已取消'),
            h('Badge', {
              props: {
                count: 140
              }
            })
          ])
        },
        label6: (h) => {
          return h('div', [
            h('span', '已完成'),
            h('Badge', {
              props: {
                count: 245
              }
            })
          ])
        },
        columns4: [
          {
            type: 'selection',
            width: 50,
            align: 'center'
          },
          {
            title: '订单号',
            key: 'id',
            width: 131
          },
          {
            title: '打印',
            key: 'methods',
            width: 95
          },
          {
            title: '下单时间',
            key: 'time',
            tooltip: 'true',
            width: 95
          },
          {
            title: '订单状态',
            key: 'tool',
            width: 95
          },
          {
            title: '售后状态',
            key: 'state',
            width: 95
          },
          {
            title: '用户名',
            key: 'user',
            width: 95
          },
          {
            title: '收货人手机号',
            key: 'tel',
            width: '120',
            width: 120
          },
          {
            title: '收货地址',
            key: 'address',
            tooltip: 'true',
            width: 85
          },
          {
            title: '支付状态',
            key: 'pay',
            width: 95
          },
          {
            title: '发货状态',
            key: 'send',
            width: 95
          },
          {
            title: '订单总额',
            key: 'money',
            width: 95
          },
          {
            title: '操作',
            key: '12',
            width: 180,
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                }, '查看'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                }, '删除')
              ])
            }
          }
        ],
        data1: [
          {
            id: 15574102431626,
            methods: '购 配 联 递',
            time: '2019-05-09 21:57:23',
            tool: '待收货',
            state: '',
            user: 'admin',
            tel: '17000000000',
            address: '北京市 北京市 东城区 -123',
            pay: '已付款',
            send: '已发货',
            money: '￥420.00'
          },
          {
            id: 15574102431626,
            methods: '购 配 联 递',
            time: '2019-05-09 21:57:23',
            tool: '待收货',
            state: '',
            user: 'admin',
            tel: '17000000000',
            address: '北京市 北京市 东城区 -123',
            pay: '已付款',
            send: '已发货',
            money: '￥420.00'
          },
          {
            id: 15574102431626,
            methods: '购 配 联 递',
            time: '2019-05-09 21:57:23',
            tool: '待收货',
            state: '',
            user: 'admin',
            tel: '17000000000',
            address: '北京市 北京市 东城区 -123',
            pay: '已付款',
            send: '已发货',
            money: '￥420.00'
          },
          {
            id: 15574102431626,
            methods: '购 配 联 递',
            time: '2019-05-09 21:57:23',
            tool: '待收货',
            state: '',
            user: 'admin',
            tel: '17000000000',
            address: '北京市 北京市 东城区 -123',
            pay: '已付款',
            send: '已发货',
            money: '￥420.00'
          },
          {
            id: 15574102431626,
            methods: '购 配 联 递',
            time: '2019-05-09 21:57:23',
            tool: '待收货',
            state: '',
            user: 'admin',
            tel: '17000000000',
            address: '北京市 北京市 东城区 -123',
            pay: '已付款',
            send: '已发货',
            money: '￥420.00'
          },
          {
            id: 15574102431626,
            methods: '购 配 联 递',
            time: '2019-05-09 21:57:23',
            tool: '待收货',
            state: '',
            user: 'admin',
            tel: '17000000000',
            address: '北京市 北京市 东城区 -123',
            pay: '已付款',
            send: '已发货',
            money: '￥420.00'
          },
          {
            id: 15574102431626,
            methods: '购 配 联 递',
            time: '2019-05-09 21:57:23',
            tool: '待收货',
            state: '',
            user: 'admin',
            tel: '17000000000',
            address: '北京市 北京市 东城区 -123',
            pay: '已付款',
            send: '已发货',
            money: '￥420.00'
          },
          {
            id: 15574102431626,
            methods: '购 配 联 递',
            time: '2019-05-09 21:57:23',
            tool: '待收货',
            state: '',
            user: 'admin',
            tel: '17000000000',
            address: '北京市 北京市 东城区 -123',
            pay: '已付款',
            send: '已发货',
            money: '￥420.00'
          },
          {
            id: 15574102431626,
            methods: '购 配 联 递',
            time: '2019-05-09 21:57:23',
            tool: '待收货',
            state: '',
            user: 'admin',
            tel: '17000000000',
            address: '北京市 北京市 东城区 -123',
            pay: '已付款',
            send: '已发货',
            money: '￥420.00'
          }
        ]
      }
    },
    methods: {
      show(index) {
        this.$Modal.info({
          title: '用户信息',
          content: `订单号:${this.data1[index].id}<br/>打印:${this.data1[index].methods}<br/>下单时间:${this.data1[index].time}<br/>
                    订单状态:${this.data1[index].tool}<br/>用户名:${this.data1[index].user}<br/>收货人手机号:${this.data1[index].tel}<br/>收货地址:${this.data1[index].address}<br/>
                    支付状态:${this.data1[index].pay}<br/>发货状态:${this.data1[index].send}<br/>订单总额:${this.data1[index].money}<br/>`
        })
      },
      remove(index) {
        this.data1.splice(index, 1);
      }
    }
  }
</script>


<style scoped>
  #shop-table {
    border: 1px solid #e6e6e6;
    width: 100;
    height: 400px;
    margin-top: 15px;
  }
</style>
