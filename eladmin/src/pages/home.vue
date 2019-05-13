<template>
  <div class="layout">
    <Layout>
      <Sider breakpoint="md" ref="side1"  collapsible :collapsed-width="65"
             v-model="isCollapsed" class="left" :class="{'left-small':isCollapsed}">
        <Menu active-name="1-2" theme="dark" width="auto"
              :class="menuitemClasses" accordion @on-select="addRoute">
          <div class="logo">
            <img src="../assets/img/logo.png" :class="{'img-small':isCollapsed}">
          </div>
          <MenuItem name="aa">
            <Icon type="ios-rose" />
            <span>首页</span>
          </MenuItem>

          <Submenu  :name="key"
                    v-for="(items,key) in list" :key="key">
            <template slot="title" >
              <Icon :type="items.icon"></Icon>
              <span>{{items.title}}</span>
            </template>
            <MenuItem :name="children.key" v-for="(children,index) in items.child"
                      :key="index">
              {{children.title}}
            </MenuItem>
          </Submenu>
        </Menu>
      </Sider>

      <Layout>
        <Header class="layout-header-bar" :class="{'small':isCollapsed,md:this.boxSmall}">
          <div class="nav">
            <div class="nav-left">
              <Icon @click.native="collapsedSider"
                    :class="rotateIcon" type="md-reorder" size="20"></Icon>
              <Icon v-show="!this.boxSmall" type="ios-globe" size="20" />
              <Icon type="md-refresh" @click="reload" size="20"/>
            </div>
            <div class="nav-right">
              <Icon v-show="!this.boxSmall" type="ios-color-palette-outline" size="20"/>
              <Icon v-show="!this.boxSmall" type="ios-pricetags-outline" size="20"
              @click="tip=true"/>
              <Modal
                v-model="tip" width="300">
                <p>Content of dialog</p>
                <p>Content of dialog</p>
                <p>Content of dialog</p>
              </Modal>
              <Icon v-if="!this.boxSmall" v-show="!isFullScreen"
                    @click="fullScreen" type="ios-expand" size="20"/>
              <Icon v-if="!this.boxSmall" v-show="isFullScreen"
                    @click="noFullScreen" type="ios-contract" size="20"/>
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
        </Header>
        <Content class="content" :class="{'small':isCollapsed,md:this.boxSmall}">
          <Tabs type="card" :animated="false" closable v-model="presentShow"
               class="tab-bar" @on-tab-remove="handleTabRemove">
            <TabPane :label="items.title" v-if="items.title" :name="items.title" class="router-view"
                     v-for="(items,key) in tab" :key="key">
             <mainBox :name="items.key" class="content-box"></mainBox>
            </TabPane>
          </Tabs>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
  import mainBox from './main';

  export default {
    components:{
      mainBox
    },
    data () {
      return {
        tab:[
          {
            title:'首页',
            key:'a1'
          },
        ],
        tip:false,
        presentShow:'首页',
        isCollapsed: false,
        isFullScreen:false,
        list:[
          {
            icon:'md-person',
            title:'用户管理',
            child:[
              {
                title:'登录',
                key:'a1',
              },
              {
                title:'注册',
                key:'a2',
              },
              {
                title:'修改密码',
                key:'a3',
              },
              {
                title:'用户管理',
                key:'a4',
              }],
          },
          {
            icon:'md-calendar',
            title:'商品管理',
            child:[
              {
                title:'商品列表',
                key:'a14',
              },
              {
                title:'商品分类',
                key:'a15',
              },
              {
                title:'品牌列表',
                key:'a16',
              },
              {
                title:'商品评价',
                key:'a17',
              }],
          },
          {
            icon:'md-clipboard',
            title:'订单管理',
            child:[
              {
                title:'订单列表',
                key:'a9',
              },
              {
                title:'发货单列表',
                key:'a10',
              },
              {
                title:'提货单列表',
                key:'a11',
              },
              {
                title:'售后单列表',
                key:'a12',
              },
              {
                title:'退货单列表',
                key:'a13',
              }],
          },
          {
            icon:'ios-pulse',
            title:'报表统计',
            child:[
              {
                title:'Option 41',
                key:'',
              },
              {
                title:'Option 42',
                key:'',
              },
              {
                title:'Option 43',
                key:'',
              }],
          },
          {
            icon:'md-calendar',
            title:'财务管理',
            child:[
              {
                title:'账户资金管理',
                key:'a5',
              },
              {
                title:'提现列表',
                key:'a6',
              },
              {
                title:'支付单列表',
                key:'a7',
              },
              {
                title:'退款单列表',
                key:'a8',
              }],
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
      this.getWidth();
      myaddEventListener(window,'resize',this.getWidth);
    },


    methods: {
      ...mapMutations(['changeBoxSmall']),
      handleTabRemove (name) {
        this['tab' + name] = false;
      },
      collapsedSider () {
        this.$refs.side1.toggleCollapse();
      },
      getWidth:function(){
        let num=document.documentElement.clientWidth;
        this.changeBoxSmall(num)
      },
      reload:function () {
        window.location.reload()
      },
      fullScreen:function () {
        enterFullScreen()
        this.isFullScreen=!this.isFullScreen
      },
      noFullScreen:function () {
        exitFullScreen()
        this.isFullScreen=!this.isFullScreen
      },
      addRoute (n) {
        let _this=this;
        this.list.forEach(function (value, index, array) {
          value.child.forEach(function (value) {
            if (value.key==n){
             let option={title:value.title,key:value.key}
              if(JSON.stringify(_this.tab).indexOf(JSON.stringify(option))==-1){
                _this.tab.push(option);
                _this.presentShow=option.title
              }else{
                _this.presentShow=option.title
              }

            }
          })
        })
      }
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
  .left-small{
    /deep/ .ivu-menu-submenu-title-icon{
      display: none;
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
    /deep/ .ivu-tabs-nav-next, /deep/ .ivu-tabs-nav-prev{
      display: block!important;
      width: 30px;
      height: 100%;
      text-align: center;
      cursor: pointer;
      border-left: 1px solid #f6f6f6;
    }
    /deep/ .ivu-tabs-content{
      padding:10px;
      border-radius: 5px;
    }
    .tab-bar {
      /deep/ .ivu-tabs-bar{
        margin-bottom: 0;
      }
      /deep/ .ivu-tabs-nav-scroll{
        padding:0 35px;
      }
    }
    .router-view{
      background: #F2F2F2;
      height: 100%;
      padding:10px;
    }
  }

  .small{
    padding-left: 65px;
  }
  .md{
    padding:0 5px;
    .tab-bar{
      margin-top: 65px;
    }
  }
</style>
