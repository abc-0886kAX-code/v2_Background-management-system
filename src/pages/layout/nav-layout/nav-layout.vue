<!--
 * @Author: zhangxin
 * @Date: 2022-04-01 17:07:33
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-04-08 11:00:26
 * @Description: 
-->
<template>
    <a-layout class="content">
        <a-layout-sider class="sider" v-model="collapsed" width="250">
            <div class="logo" />
            <MenuLayout />
        </a-layout-sider>
        <a-layout>
            <a-layout-header class="header">
                <a-icon
                    class="trigger"
                    :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                    @click="() => (collapsed = !collapsed)"
                />
            </a-layout-header>
            <!-- 面包屑 -->
            <a-layout class="main">
                <a-layout-content class="main-content">
                    <!-- <div class="test"></div> -->
                    <MainLayout />
                </a-layout-content>
            </a-layout>
            <a-layout-footer class="footer">
                Ant Design ©2022 Created by ZX
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import MenuLayout from "@/pages/layout/menu-layout";
import MainLayout from "@/pages/layout/main-layout";
export default {
    name: "nav-layout",
    //混入
    mixins: [],
    //import引入的组件需要注入到对象中才能使用
    components: { MenuLayout, MainLayout },
    props: {},
    data() {
        //这里存放数据
        return {
            collapsed: false,
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {},
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {},
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {},
    beforeCreate() {}, //生命周期 - 创建之前
    beforeMount() {}, //生命周期 - 挂载之前
    beforeUpdate() {}, //生命周期 - 更新之前
    updated() {}, //生命周期 - 更新之后
    beforeDestroy() {}, //生命周期 - 销毁之前
    destroyed() {}, //生命周期 - 销毁完成
    activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped lang="scss">
.content {
    width: 100%;
    height: 100%;
    overflow: hidden;
    & .header {
        display: flex;
        align-items: center;
        background: #fff;
        padding: 0;
        & .trigger {
            font-size: 22px;
            padding-left: 25px;
        }
        .trigger:hover {
            color: #1890ff;
        }
    }
    & .sider {
        height: 100%;
        // background: pink;
        & .logo {
            height: 32px;
            background: rgba(255, 255, 255, 0.2);
            margin: 16px;
        }
    }
    & .main {
        width: 100%;
        height: calc(100% - 80px);
        overflow: hidden;
        & .main-content {
            width: 100%;
            height: 100%;
            padding: 25px;
            overflow: hidden;
        }
    }
    & .footer {
        text-align: center;
    }
}
</style>