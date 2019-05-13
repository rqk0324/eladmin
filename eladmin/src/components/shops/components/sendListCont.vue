<template>
  <div id="send-table">
    <Tabs value="name1" type="card">
      <div v-for="list in 4">
        <Table ref="selection" :columns="columns4" :data="data1" height="300" width="1100"></Table>
      </div>

    </Tabs>
    <Page :total="346" show-sizer show-elevator="true" show-total="true"/>
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
          title: "发货单号",
          key: "sendid",
          width: 131
        },
        {
          title: "订单号",
          key: "id",
          width:  131
        },
        {
          title: "用户名",
          key: "user",
          width:  100
        },
        {
          title: "快递公司",
          key: "comp",
          width:  100
        },
        {
          title: "快递单号",
          key: "idnum",
          width:  131
        },
        {
          title: "收货地址",
          key: "address",
          width:131,
            tooltip: "true"
        },
        {
          title: "收货电话",
          key: "tel",
          width: 120
        },
        {
          title: "创建时间",
          key: "time",
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
          sendid: 85575448482189,
          id: "15566955365698",
          user: "admin",
          comp: "德邦快递",
          idnum: "231566603670",
          address: "北京市 北京市 东城区 - 123",
        tel: "17000000000",
          time: "2019-05-11 11:20:48"
        },
        {
          sendid: 85575448482189,
          id: "15566955365698",
          user: "admin",
          comp: "德邦快递",
          idnum: "231566603670",
          address: "北京市 北京市 东城区 - 123",
        tel: "17000000000",
          time: "2019-05-11 11:20:48"
        },
        {
          sendid: 85575448482189,
          id: "15566955365698",
          user: "admin",
          comp: "德邦快递",
          idnum: "231566603670",
          address: "北京市 北京市 东城区 - 123",
        tel: "17000000000",
          time: "2019-05-11 11:20:48"
        },
        {
          sendid: 85575448482189,
          id: "15566955365698",
          user: "admin",
          comp: "德邦快递",
          idnum: "231566603670",
          address: "北京市 北京市 东城区 - 123",
        tel: "17000000000",
          time: "2019-05-11 11:20:48"
        },
        {
          sendid: 85575448482189,
          id: "15566955365698",
          user: "admin",
          comp: "德邦快递",
          idnum: "231566603670",
          address: "北京市 北京市 东城区 - 123",
        tel: "17000000000",
          time: "2019-05-11 11:20:48"
        },
        {
          sendid: 85575448482189,
          id: "15566955365698",
          user: "admin",
          comp: "德邦快递",
          idnum: "231566603670",
          address: "北京市 北京市 东城区 - 123",
        tel: "17000000000",
          time: "2019-05-11 11:20:48"
        },
        {
           sendid: 85575448482189,
          id: "15566955365698",
          user: "admin",
          comp: "德邦快递",
          idnum: "231566603670",
          address: "北京市 北京市 东城区 - 123",
        tel: "17000000000",
          time: "2019-05-11 11:20:48"
        },
        {
          sendid: 85575448482189,
          id: "15566955365698",
          user: "admin",
          comp: "德邦快递",
          idnum: "231566603670",
          address: "北京市 北京市 东城区 - 123",
        tel: "17000000000",
          time: "2019-05-11 11:20:48"
        },
        {
          sendid: 85575448482189,
          id: "15566955365698",
          user: "admin",
          comp: "德邦快递",
          idnum: "231566603670",
          address: "北京市 北京市 东城区 - 123",
        tel: "17000000000",
          time: "2019-05-11 11:20:48"
        }
      ]
    };
  },
  methods: {
    show(index) {
      this.$Modal.info({
        title: "用户信息",
        content: `发货单号:${this.data1[index].sendid}<br/>订单号:${
          this.data1[index].id
        }<br/>用户名:${this.data1[index].user}<br/>
                    快递公司:${this.data1[index].comp}<br/>快递单号:${
          this.data1[index].idnum
        }<br/>收货地址:${this.data1[index].address}<br/>收货电话:${
          this.data1[index].tel
        }<br/>
                    创建时间:${this.data1[index].time}<br/>`
      });
    }
  }
};
</script>


<style scoped>
#send-table {
  border: 1px solid #e6e6e6;
  height: 400px;
  margin-top: 15px;
}
</style>
