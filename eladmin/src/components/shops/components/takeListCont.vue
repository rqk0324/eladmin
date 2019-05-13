<template>
  <div id="take-table">
    <Tabs value="name1" type="card">
      <div>
        <Table ref="selection" :columns="columns4" :data="data1" height="300" width="1100"></Table>
      </div>
      <div>
        <Table border ref="selection" :columns="columns4" :data="data1" height="300" width="1100"></Table>
      </div>

      <div>
        <Table border ref="selection" :columns="columns4" :data="data1" height="300" width="1100"></Table>
      </div>

      <div>
        <Table border ref="selection" :columns="columns4" :data="data1" height="300" width="1100"></Table>
      </div>

      <div>
        <Table border ref="selection" :columns="columns4" :data="data1" height="300" width="1100"></Table>
      </div>

      <div>
        <Table border ref="selection" :columns="columns4" :data="data1" height="300" width="1100"></Table>
      </div>
    </Tabs>
    <Page :total="13" show-sizer show-elevator="true" show-total="true"/>
  </div>
</template>


<script>
export default {
  data() {
    return {
      columns4: [
        {
          type: "selection",
          width: 50,
          align: "center"
        },
        {
          title: " ",
          key: "empty",
          width: 50
        },
        {
          title: "提货单号",
          key: "takeid",
          width: 131
        },
        {
          title: "订单号",
          key: "id",
          width:  131
        },
        {
          title: "提货门店",
          key: "takedoor",
          width:  100
        },
        {
          title: "提货人名",
          key: "takeperson",
          width:  100
        },
        {
          title: "提货电话",
          key: "taketel",
          width:  120
        },
        {
          title: "提货状态",
          key: "takestate",
          width:95,
        },
        {
          title: "下单时间",
          key: "paytel",
          width: 120,
          tooltip: "true"
        },
        {
          title: "操作",
          key: "12",
          width: 180,
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "5px"
                  },
                  on: {
                    click: () => {
                      this.show(params.index);
                    }
                  }
                },
                "详情"
              ),
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
                                }, '核销')
            ]);
          }
        }
      ],
      data1: [
        {
        empty:1,
          takeid: 'F2YEPQ',
          id: "15537387739348",
          takedoor: "顺丰",
          takeperson: "hkk",
          taketel: "231566603670",
          takestate: "已提货",
          paytel: "2019-03-28 10:11:59"
        },
        {
             empty:2,
        takeid: 'F2YEPQ',
          id: "15537387739348",
          takedoor: "顺丰",
          takeperson: "hkk",
          taketel: "231566603670",
          takestate: "已提货",
          paytel: "2019-03-28 10:11:59"
        },
        {
             empty:3,
         takeid: 'F2YEPQ',
          id: "15537387739348",
          takedoor: "顺丰",
          takeperson: "hkk",
          taketel: "231566603670",
          takestate: "已提货",
          paytel: "2019-03-28 10:11:59"
        },
        {
             empty:4,
        takeid: 'F2YEPQ',
          id: "15537387739348",
          takedoor: "顺丰",
          takeperson: "hkk",
          taketel: "231566603670",
          takestate: "已提货",
          paytel: "2019-03-28 10:11:59"
        },
        {
             empty:5,
        takeid: 'F2YEPQ',
          id: "15537387739348",
          takedoor: "顺丰",
          takeperson: "hkk",
          taketel: "231566603670",
          takestate: "已提货",
          paytel: "2019-03-28 10:11:59"
        },
        {
             empty:6,
        takeid: 'F2YEPQ',
          id: "15537387739348",
          takedoor: "顺丰",
          takeperson: "hkk",
          taketel: "231566603670",
          takestate: "已提货",
          paytel: "2019-03-28 10:11:59"
        },
        {
             empty:7,
          takeid: 'F2YEPQ',
          id: "15537387739348",
          takedoor: "顺丰",
          takeperson: "hkk",
          taketel: "231566603670",
          takestate: "已提货",
          paytel: "2019-03-28 10:11:59"
        },
        {
             empty:8,
         takeid: 'F2YEPQ',
          id: "15537387739348",
          takedoor: "顺丰",
          takeperson: "hkk",
          taketel: "231566603670",
          takestate: "已提货",
          paytel: "2019-03-28 10:11:59"
        },
        {
             empty:9,
          takeid: 'F2YEPQ',
          id: "15537387739348",
          takedoor: "顺丰",
          takeperson: "hkk",
          taketel: "231566603670",
          takestate: "已提货",
          paytel: "2019-03-28 10:11:59"
        }
      ]
    };
  },
  methods: {
    show(index) {
      this.$Modal.info({
        title: "用户信息",
        content: `提货单号:${this.data1[index].takeid}<br/>订单号:${
          this.data1[index].id
        }<br/>提货门店:${this.data1[index].takedoor}<br/>
                    提货人名:${this.data1[index].takeperson}<br/>提货电话:${
          this.data1[index].taketel
        }<br/>提货状态:${this.data1[index].takestate}<br/>下单时间:${
          this.data1[index].paytel
        }<br/>`
      });
    },
      remove (index) {
                this.$Notice.success({
                    desc: 'The desc will hide when you set render.',
                    render: h => {
                        return h('span', [
                            '该货单已经核销，无需重复',
                            h('a')
                        ])
                    }
                });
            }
  }
};
</script>


<style scoped>
#take-table {
  border: 1px solid #e6e6e6;
  height: 400px;
  margin-top: 15px;
}
</style>
