<!--
 * @Author: zhangxin
 * @Date: 2022-04-02 11:05:33
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-04-02 17:46:40
 * @Description: 
-->
<template>
    <div class="home">
        <a-layout>
            <!-- 侧边栏 -->
            <a-layout-sider>
                <MenuLayout />
            </a-layout-sider>
            <a-layout>
                <a-layout-header :style="{ background: '#fff', padding: 0 }" />
                <a-layout-content :style="{ margin: '24px 16px 0' }">
                    <div
                        :style="{
                            padding: '24px',
                            background: '#fff',
                            minHeight: '360px',
                        }"
                    >
                        content
                    </div>
                </a-layout-content>
                <a-layout-footer style="text-align: center">
                    Ant Design ©2018 Created by Ant UED
                </a-layout-footer>
            </a-layout>
        </a-layout>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import MenuLayout from "@/pages/layout/menu-layout";
export default {
    name: "home",
    //混入
    mixins: [],
    //import引入的组件需要注入到对象中才能使用
    components: { MenuLayout },
    props: {},
    data() {
        //这里存放数据
        return {
            selectedKeys: ["1"],
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
<style lang="scss" scoped></style>