<template>
  <div id="return-table">
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
    <Page :total="23" show-sizer show-elevator="true" show-total="true"/>
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
          title: "退货单号",
          key: "returnid",
          width: 131
        },
        {
          title: "订单号",
          key: "id",
          width:  131
        },
        {
          title: "用户",
          key: "user",
          width:  110
        },
        {
          title: "状态",
          key: "state",
          width:  100
        },
        {
          title: "物流信息",
          key: "info",
          width:  131
        },
        {
          title: "物流管理",
          key: "mang",
          width:131
        },
        {
          title: "创建时间",
          key: "createtime",
          width: 120,
          tooltip: "true"
        },
        {
          title: "更新时间",
          key: "updatetime",
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
          returnid: 75411325705588,
          id: "15411305742062",
          user: "15979****89",
          state: "待退货",
          info: " ",
          mang: " ",
        createtime: "2018-11-02 12:22:50",
          updatetime: "2018-11-02 12:22:50"
        },
        {
          returnid: 75411325705588,
          id: "15411305742062",
          user: "15979****89",
          state: "待退货",
          info: " ",
          mang: " ",
        createtime: "2018-11-02 12:22:50",
          updatetime: "2018-11-02 12:22:50"
        },
        {
          returnid: 75411325705588,
          id: "15411305742062",
          user: "15979****89",
          state: "待退货",
          info: " ",
          mang: " ",
        createtime: "2018-11-02 12:22:50",
          updatetime: "2018-11-02 12:22:50"
        },
        {
          returnid: 75411325705588,
          id: "15411305742062",
          user: "15979****89",
          state: "待退货",
          info: " ",
          mang: " ",
        createtime: "2018-11-02 12:22:50",
          updatetime: "2018-11-02 12:22:50"
        },
        {
         returnid: 75411325705588,
          id: "15411305742062",
          user: "15979****89",
          state: "待退货",
          info: " ",
          mang: " ",
        createtime: "2018-11-02 12:22:50",
          updatetime: "2018-11-02 12:22:50"
        },
        {
           returnid: 75411325705588,
          id: "15411305742062",
          user: "15979****89",
          state: "待退货",
          info: " ",
          mang: " ",
        createtime: "2018-11-02 12:22:50",
          updatetime: "2018-11-02 12:22:50"
        },
        {
          returnid: 75411325705588,
          id: "15411305742062",
          user: "15979****89",
          state: "待退货",
          info: " ",
          mang: " ",
        createtime: "2018-11-02 12:22:50",
          updatetime: "2018-11-02 12:22:50"
        },
        {
         returnid: 75411325705588,
          id: "15411305742062",
          user: "15979****89",
          state: "待退货",
          info: " ",
          mang: " ",
        createtime: "2018-11-02 12:22:50",
          updatetime: "2018-11-02 12:22:50"
        },
        {
         returnid: 75411325705588,
          id: "15411305742062",
          user: "15979****89",
          state: "待退货",
          info: " ",
          mang: " ",
        createtime: "2018-11-02 12:22:50",
          updatetime: "2018-11-02 12:22:50"
        }
      ]
    };
  },
  methods: {
    show(index) {
      this.$Modal.info({
        title: "用户信息",
        content: `退货单号:${this.data1[index].returnid}<br/>订单号:${
          this.data1[index].id
        }<br/>用户:${this.data1[index].user}<br/>
                   状态:${this.data1[index].state}<br/>用户:${
          this.data1[index].user
        }<br/>物流公司:${this.data1[index].info}<br/>物流单号:${
          this.data1[index].mang
        }<br/>
            退货商品:<table width="200px" height="50px" border="1px solid black">
            <tr>
            <td>商品名称</td>
            <td>退货数量</td>
            </tr>
             <tr>
            <td>秋装连衣裙...</td>
            <td>2</td>
            </tr>
            </table>`
      });
    }
  }
};
</script>


<style scoped>
#return-table {
  border: 1px solid #e6e6e6;
  height: 400px;
  margin-top: 15px;
}
</style>
