<template>

  <div class="nav">
    <div class="nav-left">
      <Icon @click.native="collapsedSider"
            :class="rotateIcon" type="md-options" size="20"></Icon>
      <Icon v-show="!this.boxSmall" type="ios-globe" size="20" />
      <Icon type="md-refresh" size="20"/>
    </div>
    <div class="nav-right">
      <Icon v-show="!this.boxSmall" type="ios-color-palette-outline" size="20"/>
      <Icon v-show="!this.boxSmall" type="ios-pricetags-outline" size="20"/>
      <Icon v-show="!this.boxSmall" type="ios-expand" size="20"/>
      <Dropdown style="margin-left: 20px" placement="bottom-end">
        <a href="javascript:void(0)">
          admin
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <DropdownMenu slot="list">
          <DropdownItem>个人中心</DropdownItem>
          <DropdownItem>清除缓存</DropdownItem>
          <DropdownItem>退出</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
</template>
<script>
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
  export default {
    data () {
      return {
        isCollapsed: false,
        list:[
          {
            icon:'md-person',
            title:'用户管理',
            child:['Option 1','Option 2','Option 3']
          },
          {
            icon:'md-calendar',
            title:'商品管理',
            child:['Option 1','Option 2','Option 3']
          },
          {
            icon:'md-clipboard',
            title:'订单管理',
            child:['Option 1','Option 2','Option 3']
          },
          {
            icon:'ios-pulse',
            title:'报表统计',
            child:['Option 1','Option 2','Option 3']
          },
          {
            icon:'md-calendar',
            title:'财务管理',
            child:['Option 1','Option 2','Option 3']
          },
        ]
      }
    },
    computed: {
      rotateIcon () {
        return [
          'menu-icon',
          this.isCollapsed ? 'rotate-icon' : ''
        ];
      },
      menuitemClasses () {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      },
      ...mapState(['boxSmall']),
    },
    mounted(){

    },
    methods: {
      ...mapMutations(['changeBoxSmall']),

    }
  }
</script>

<style scoped lang="scss">
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    .left{
      position: fixed;
      height: 100vh;
      left: 0;
      overflow: auto;
      z-index:2;
      .logo{
        height: 65px;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          width: 50%;
        }
        .img-small{
          width: 80%;
        }
      }
      a,span,p,i{
        color:whitesmoke;
      }
    }
  }
  .layout-header-bar{
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
    position: fixed;
    width: 100%;
    z-index:1;
    height: 65px;
    padding:0 0 0 200px;
    .nav{
      display: flex;
      height: 100%;
      justify-content: space-between;
      align-items: center;
      padding:0 8px 0 15px;
      i{
        color:#666;
        padding:0 10px;
      }
    }
  }
  .layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }
  .menu-icon{
    transition: all .3s;
  }

  .rotate-icon{
    transform: rotate(-90deg);
  }
  .menu-item {
    span{
      display: inline-block;
      overflow: hidden;
      width: 69px;
      text-overflow: ellipsis;
      white-space: nowrap;
      vertical-align: bottom;
      transition: width .2s ease .2s;
    }
    i{
       transform: translateX(0px);
       transition: font-size .2s ease, transform .2s ease;
       vertical-align: middle;
       font-size: 16px;
     }
    li{
      padding:14px 0px;
    }
  }
  .collapsed-menu span{
    width: 0px;
    transition: width .2s ease;
  }
  .collapsed-menu i{
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
  .content{
    padding:65px 0 0 200px;
    background: #fff;
    min-height: 260px;
  }
  .small{
    padding-left: 65px;
  }
  .md{
    padding:0 5px;
  }
</style>
