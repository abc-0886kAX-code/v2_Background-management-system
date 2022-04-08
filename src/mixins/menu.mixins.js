/*
 * @Author: zhangxin
 * @Date: 2022-04-02 15:36:27
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-04-08 14:10:30
 * @Description: 
 */
import { defaultString } from "@/utils";

export default {
    name: 'menu-mixins',
    //import引入的组件需要注入到对象中才能使用
    components: {},
    data() {
        //这里存放数据
        return {};
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        renderSubmenu(cell) {
            const { meta } = cell;
            if (meta?.hidden === "false") return false;

            return cell.children && cell.children.length > 0;
        },
        renderMenu(cell) {
            const { meta } = cell;

            return meta?.hidden === "true";
        },
        getIcon(cell) {
            const { meta } = cell;
            const { icon } = meta;
            return defaultString(icon, "");
        },
        getTitle(cell) {
            const { meta, name } = cell;
            const { title } = meta;
            return defaultString(title, name);
        },
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() { },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() { },
    beforeCreate() { }, //生命周期 - 创建之前
    beforeMount() { }, //生命周期 - 挂载之前
    beforeUpdate() { }, //生命周期 - 更新之前
    updated() { }, //生命周期 - 更新之后
    beforeDestroy() { }, //生命周期 - 销毁之前
    destroyed() { }, //生命周期 - 销毁完成
    activated() { }, //如果页面有keep-alive缓存功能，这个函数会触发
}