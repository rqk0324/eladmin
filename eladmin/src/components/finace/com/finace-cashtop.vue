<template>
<div style="text-align:left;border:1px solid #eee;padding:20px 20px 0 20px">
    <Form :model="formRight" label-position="right" :label-width="130" style="display:flex">
        <FormItem label="手机号码:">
            <Input v-model="formLeft.input2" size="large" placeholder="请输入手机号码"/>
        </FormItem>
         <FormItem label="状态:" style="text-align:left;width:25%">
            <Select v-model="model1" style="width:120%" size="large">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </FormItem>
        <div style="text-align:left;width:40%;display:flex;margin-left:5%">
            <Button type="primary" @click="backFn" icon="ios-search" size="large" style="height:34px;line-height:20px;background:#17BED2;border-color:#17BED2">筛选</Button>
        </div>
        
    </Form>
</div>
    

</template>
<script>
    export default {
        data () {
            return {
                formLeft: {
                    input1: '',
                    input2: '',
                    input3: ''
                },
                formRight: {
                    input1: '',
                    input2: '',
                    input3: ''
                },
                formTop: {
                    input1: '',
                    input2: '',
                    input3: ''
                },
                cityList: [
                     {
                        value: '请选择',
                        label: '请选择'
                    },
                    {
                        value: '待支付',
                        label: '待支付'
                    },
                    {
                        value: '支付成功',
                        label: '支付成功'
                    },
                    {
                        value: '其他',
                        label: '其他'
                    }
                ],
                model1: '',
                model2: '',
                cityList2: [
                     {
                        value: '请选择',
                        label: '请选择'
                    },
                    {
                        value: '待支付',
                        label: '待支付'
                    },
                    {
                        value: '支付成功',
                        label: '支付成功'
                    },
                    {
                        value: '其他',
                        label: '其他'
                    }
                ],
                cityArr:['北京','上海','广州','深圳','茂名','张家界','清远','汕头','佛山']
            }
        },
    computed:{
        city:function() {
        // 通过vuex的getters方法来获取state里面的数据
    this.$store.getters.getCityFn
        }
  },
   methods:{
      backFn : function(){
          // 调用vuex的ations设置城市的值
          this.$store.dispatch("setCityName", "jjjj");
          //返回到首页
        //   this.$router.push("/");
      }
  }
    }
</script>
<style scoped>
.ivu-form-item{
    text-align: left;
    width:40%;
}
.Input{
    height:40px;
}
</style>