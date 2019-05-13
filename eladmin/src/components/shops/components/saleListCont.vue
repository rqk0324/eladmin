<template>
  <div id="sale-table">
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
    <Page :total="167" show-sizer show-elevator="true" show-total="true"/>
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
          title: "售后单号",
          key: "saleid",
          width: 131
        },
        {
          title: "订单号",
          key: "id",
          width:  131
        },
        {
          title: "状态",
          key: "state",
          width:  100
        },
        {
          title: "售后类型",
          key: "saletype",
          width:  100
        },
        {
          title: "用户",
          key: "user",
          width:  131
        },
        {
          title: "退款金额",
          key: "salemoney",
          width:131
        },
        {
          title: "原因",
          key: "reason",
          width: 120,
          tooltip: "true"
        },
        {
          title: "申请时间",
          key: "applytime",
          tooltip: "true",
          width: 131
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
                "明细"
              )
            ]);
          }
        }
      ],
      data1: [
        {
          saleid: 55572257306112,
          id: "15559809665425",
          state: "审核通过",
          saletype: "只退款",
          user: "19976****69",
          salemoney: "0.00",
        reason: " ",
          applytime: "2019-05-07 18:42:10"
        },
        {
           saleid: 55572257306112,
          id: "15559809665425",
          state: "审核通过",
          saletype: "只退款",
          user: "19976****69",
          salemoney: "0.00",
        reason: " ",
          applytime: "2019-05-07 18:42:10"
        },
        {
          saleid: 55572257306112,
          id: "15559809665425",
          state: "审核通过",
          saletype: "只退款",
          user: "19976****69",
          salemoney: "0.00",
        reason: " ",
          applytime: "2019-05-07 18:42:10"
        },
        {
          saleid: 55572257306112,
          id: "15559809665425",
          state: "审核通过",
          saletype: "只退款",
          user: "19976****69",
          salemoney: "0.00",
        reason: " ",
          applytime: "2019-05-07 18:42:10"
        },
        {
         saleid: 55572257306112,
          id: "15559809665425",
          state: "审核通过",
          saletype: "只退款",
          user: "19976****69",
          salemoney: "0.00",
        reason: " ",
          applytime: "2019-05-07 18:42:10"
        },
        {
           saleid: 55572257306112,
          id: "15559809665425",
          state: "审核通过",
          saletype: "只退款",
          user: "19976****69",
          salemoney: "0.00",
        reason: " ",
          applytime: "2019-05-07 18:42:10"
        },
        {
         saleid: 55572257306112,
          id: "15559809665425",
          state: "审核通过",
          saletype: "只退款",
          user: "19976****69",
          salemoney: "0.00",
        reason: " ",
          applytime: "2019-05-07 18:42:10"
        },
        {
         saleid: 55572257306112,
          id: "15559809665425",
          state: "审核通过",
          saletype: "只退款",
          user: "19976****69",
          salemoney: "0.00",
        reason: " ",
          applytime: "2019-05-07 18:42:10"
        },
        {
         saleid: 55572257306112,
          id: "15559809665425",
          state: "审核通过",
          saletype: "只退款",
          user: "19976****69",
          salemoney: "0.00",
        reason: " ",
          applytime: "2019-05-07 18:42:10"
        }
      ]
    };
  },
  methods: {
    show(index) {
      this.$Modal.info({
        title: "用户信息",
        content: `售后单号:${this.data1[index].saleid}<br/>订单号:${
          this.data1[index].id
        }<br/>状态:${this.data1[index].state}<br/>
                   售后类型:${this.data1[index].saletype}<br/>用户:${
          this.data1[index].user
        }<br/>退款金额:${this.data1[index].salemoney}<br/>原因:${
          this.data1[index].reason
        }<br/>
                   申请时间:${this.data1[index].applytime}<br/>`
      });
    }
  }
};
</script>


<style scoped>
#sale-table {
  border: 1px solid #e6e6e6;
  height: 400px;
  margin-top: 15px;
}
</style>
