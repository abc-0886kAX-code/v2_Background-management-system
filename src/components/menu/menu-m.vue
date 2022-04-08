<!--
 * @Author: zhangxin
 * @Date: 2022-04-02 13:59:29
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-04-08 14:09:51
 * @Description: 
-->

<template>
    <a-menu
        mode="vertical"
        @select="routerSelect"
        :selected-keys="selectedKeys"
        theme="dark"
    >
        <template v-for="cell in menuMap">
            <menu-m-item
                v-if="renderSubmenu(cell)"
                :key="cell.name"
                :cell="cell"
            ></menu-m-item>

            <a-menu-item v-else-if="renderMenu(cell)" :key="cell.name">
                <i :class="getIcon(cell)"></i>
                <span>{{ getTitle(cell) }}</span>
            </a-menu-item>
        </template>
    </a-menu>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import MenuMItem from "./menu-m-item.vue";
import MenuMixins from "@/mixins/menu.mixins";
export default {
    name: "menu-m",
    //混入
    mixins: [MenuMixins],
    //import引入的组件需要注入到对象中才能使用
    components: { MenuMItem },
    props: {
        menuMap: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        //这里存放数据
        return {};
    },
    //监听属性 类似于data概念
    computed: {
        selectedKeys() {
            const { name } = this.$route;

            return [name];
        },
    },
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        routerSelect(routeName) {
            const routeOptions = { name: routeName };

            this.$router.push(routeOptions);
        },
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {
        console.log(this.menuMap);
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
<style scoped>
</style>