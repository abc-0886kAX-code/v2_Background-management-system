<!--
 * @Author: zhangxin
 * @Date: 2022-04-02 13:59:47
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-04-15 13:33:43
 * @Description: 
-->
<template>
    <a-sub-menu :key="cell.name" v-bind="$props" v-on="$listeners">
        <template slot="title">
            <a-icon :type="getIcon(cell)"></a-icon>
            <span>{{ getTitle(cell) }}</span>
        </template>

        <template v-for="item in cell.children">
            <menu-m-item
                class="menu-item"
                v-if="renderSubmenu(item)"
                :key="item.name"
                :cell="item"
            >
            </menu-m-item>

            <a-menu-item v-else-if="renderMenu(item)" :key="item.name">
                <a-icon :type="getIcon(item)"></a-icon>
                <span>{{ getTitle(item) }}</span>
            </a-menu-item>
        </template>
    </a-sub-menu>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import MenuMixins from "@/mixins/menu.mixins";
import { Menu } from "ant-design-vue";

export default {
    name: "menu-m-item",

    //混入
    mixins: [MenuMixins],
    //import引入的组件需要注入到对象中才能使用
    components: {},
    isSubMenu: true,
    props: {
        ...Menu.SubMenu.props,
        cell: Object,
    },
    data() {
        //这里存放数据
        return {};
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
<style scoped>
</style>