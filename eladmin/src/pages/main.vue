<template>
  <div>
    <a1 v-if="list.a1"></a1>
    <a2 v-if="list.a2"></a2>
    <a3 v-if="list.a3"></a3>
    <a4 v-if="list.a4"></a4>
    <a5 v-if="list.a5"></a5>
    <a6 v-if="list.a6"></a6>
    <a7 v-if="list.a7"></a7>
    <a8 v-if="list.a8"></a8>
    <a9 v-if="list.a9"></a9>
    <a10 v-if="list.a10"></a10>
    <a11 v-if="list.a11"></a11>
    <a12 v-if="list.a12"></a12>
    <a13 v-if="list.a13"></a13>
    <a14 v-if="list.a14"></a14>
    <a15 v-if="list.a15"></a15>
    <a16 v-if="list.a16"></a16>
    <a17 v-if="list.a17"></a17>
  </div>
</template>
<script>
  import a1 from '../components/user/login';//登录
  import a2 from '../components/user/reg';//注册
  import a3 from '../components/user/findpass';//修改密码
  import a4 from '../components/user/list';//用户管理


  import a5 from '../components/finace/finace-acc';//用户管理
  import a6 from '../components/finace/finace-cash';//用户管理
  import a7 from '../components/finace/finace-pay';//用户管理
  import a8 from '../components/finace/finace-refund';//用户管理


  import a9 from '../components/shops/shopList';//
  import a10 from '../components/shops/sendList';//
  import a11 from '../components/shops/takeList';//
  import a12 from '../components/shops/saleList';//
  import a13 from '../components/shops/returnList';//




  import a14 from '../components/goods/goodsList';//
  import a15 from '../components/goods/goodsClass';//
  import a16 from '../components/goods/goodsBrand';//
  import a17 from '../components/goods/goodsComment';//




  export default {
    props:['name'],
    data(){
      return{
        list:{
          'a1':false,
          'a2':false,
          'a3':false,
          'a4':false,
          'a5':false,
          'a6':false,
          'a7':false,
          'a8':false,
          'a9':false,
          'a10':false,
          'a11':false,
          'a12':false,
          'a13':false,
          'a14':false,
          'a15':false,
          'a16':false,
          'a17':false,
        }
      }
    },
    mounted(){
      Object.keys(this.list).forEach((key)=>{

          if(key==this.name){
            this.list[key]=true
          }


      });
    },
    methods:{

    },
    components:{
      a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17
    },
  }
</script>
