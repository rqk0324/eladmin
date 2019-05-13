<template>
<div style="text-align:left;border:1px solid #eee;padding:20px 20px 0 20px">
    <Form :model="formLeft" label-position="right" :label-width="130" style="display:flex">
        <FormItem label="支付单号:">
            <Input v-model="formLeft.input1" size="large" placeholder="请输入支付单号"/>
        </FormItem>
        <FormItem label="第三方支付单号:">
            <Input v-model="formLeft.input2" size="large" placeholder="请输入第三方支付单号"/>
        </FormItem>
    </Form>
    <Form :model="formRight" label-position="right" :label-width="130" style="display:flex">
        <FormItem label="下单时间:" style="text-align:left">
            <DatePicker type="daterange" size="large" split-panels placeholder="开始时间 到 结束时间" style="width: 100%"></DatePicker>
        </FormItem>
        <FormItem label="用户手机号码:" style="text-align:left">
            <Input size="large" v-model="formRight.input2" placeholder="请输入手机号码"/>
        </FormItem>
    </Form>
    <Form :model="formRight" label-position="right" :label-width="130" style="display:flex">
        <FormItem label="支付状态:" style="text-align:left;width:25%">
            <Select v-model="model1" style="width:100%" size="large">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </FormItem>
        <FormItem label="单据类型:" style="text-align:left;width:25%" :label-width="100">
            <Select v-model="model2" style="width:100%" size="large">
                <Option v-for="item in cityList2" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </FormItem>
        <div style="text-align:left;width:40%;display:flex;margin-left:15px">
            <Button type="primary" icon="ios-search" size="large" style="height:34px;line-height:20px;;background:#17BED2;border-color:#17BED2">筛选</Button>
            <Button type="primary" icon="md-cloud-download" size="large" style="height:34px;margin-left:15px;line-height:20px;background:#17BED2;border-color:#17BED2">导出</Button>
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
                ]
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
