<!--
 * @Author: zhangxin
 * @Date: 2022-04-02 13:59:29
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-04-02 15:40:01
 * @Description: 
-->

<template>
    <a-mentu
        mode="vertical"
        @select="routerSelect"
        :selectedKeys="selectedKeys"
    >
        <template v-for="cell in menuMap">
            <menu-item
                v-if="renderSubmenu(cell)"
                :key="cell.name"
                :cell="cell"
            ></menu-item>

            <a-mentu-item v-else-if="renderMenu(cell)" :key="cell.name">
                <i :class="getIcon(cell)"></i>
                <span>{{ getTitle(cell) }}</span>
            </a-mentu-item>
        </template>
    </a-mentu>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import MenuItem from "./menu-item.vue";
import MenuMixins from "@/mixins/menu.mixins";
export default {
    name: "",
    //混入
    mixins: [MenuMixins],
    //import引入的组件需要注入到对象中才能使用
    components: { MenuItem },
    props: {
        menuMap: {
            type: Array,
            default: () => [],
        },
        cutOff: {
            type: Number,
            default: () => 1,
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
<style scoped>
</style>