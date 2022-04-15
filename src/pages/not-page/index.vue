<!--
 * @Author: zhangxin
 * @Date: 2022-02-25 10:46:48
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-04-15 13:24:54
 * @Description: 
-->

<template>
    <div class="not-page">
        <div class="not-page-item-left">
            <div class="left-content">
                <h1 class="label">404 Not Found</h1>
                <span class="subtitle"
                    >the page you are loking for might be removed or is
                    temporanlly unavailoble</span
                >
                <a-button class="btn" type="primary" @click="toHome"
                    >Come Home</a-button
                >
            </div>
        </div>
        <div class="not-page-item-right"></div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
    name: "404",
    //混入
    mixins: [],
    //import引入的组件需要注入到对象中才能使用
    components: {},
    props: {},
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
        toHome() {
            this.$router.push({ path: "/" });
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
<style scoped lang="scss">
@import "./index.scss";
</style>