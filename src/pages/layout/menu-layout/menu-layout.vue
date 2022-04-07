<!--
 * @Author: zhangxin
 * @Date: 2022-04-01 17:07:05
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-04-07 17:20:09
 * @Description: 
-->
<template>
    <div class="menu-layout">
        <menu class="menu-aside" :menuMap="routerMap"></menu>

        <!-- <main class="menu-main" :key="routeName">
            <transition name="">
                <router-view />
            </transition>
        </main> -->
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Menu from "@/components/menu";
import { mapGetters } from "vuex";
import { arrayAs, deepRange } from "@/utils";
export default {
    name: "menu-layout",
    //混入
    mixins: [],
    //import引入的组件需要注入到对象中才能使用
    components: { Menu },
    props: {},
    data() {
        //这里存放数据
        return {};
    },
    //监听属性 类似于data概念
    computed: {
        ...mapGetters({
            addRoutes: "permission/addRoutes",
        }),
        routeName() {
            const { name } = this.$route;
            return name;
        },
        routerMap() {
            const { matched } = this.$route;
            return this.setRouterMap(matched[1].name);
        },
    },
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        setRouterMap(name) {
            const router = deepRange(this.addRoutes, "children").filter(
                (item) => {
                    this.selectRouteName(item, name);
                }
            );

            return arrayAs(router) && arrayAs(router[0].children)
                ? router[0].children
                : [];
        },
        selectRouteName(route, name) {
            const { name: baseName } = route;
            return baseName === name;
        },
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        console.log(this.addRoutes);
    },
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
<style lang="scss" scoped>
.menu-layout {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    overflow: hidden;
    & .menu-aside {
        width: auto;
        height: auto;
        min-height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
    }

    & .menu-main {
        position: relative;
        flex: 1;
        height: 100%;
        overflow: hidden;
    }
}
</style>