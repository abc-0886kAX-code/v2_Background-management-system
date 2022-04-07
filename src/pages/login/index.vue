<!-- 
    /*
     * @Author: zhangxin
     * @CreateTime: 2022-02-22 18:04:20
 * @LastEditors: zhangxin
 * @LastEditTime: 2022-04-07 11:30:52
     * @Description: ...
     */
 -->
<template>
    <div class="login">
        <div class="login-item-left"></div>
        <div class="login-item-right">
            <div class="login-item-right-body">
                <a-form
                    ref="formRef"
                    class="login-box"
                    :model="loginForm"
                    :rules="rules"
                >
                    <a-form-item label="" name="username">
                        <a-input
                            v-model="loginForm.username"
                            size="large"
                            placeholder="请输入登录名称"
                        ></a-input>
                    </a-form-item>
                    <a-form-item label="" name="password">
                        <a-input-password
                            v-model="loginForm.password"
                            size="large"
                            placeholder="请输入密码"
                        ></a-input-password>
                    </a-form-item>
                    <a-form-item>
                        <a-button
                            @click="login"
                            class="login-btn"
                            type="primary"
                            block
                            :loading="loading"
                            >登录</a-button
                        >
                    </a-form-item>
                </a-form>
            </div>
        </div>
    </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 form '《组件路径》';
import tipMixins from "@/mixins/tip.mixins";
import { timeFix } from "@/utils/date";

export default {
    name: "login",
    //混入
    mixins: [tipMixins],
    //import引入的组件需要注入到对象中才能使用
    components: {},
    props: {},
    data() {
        //这里存放数据
        return {
            loginForm: {
                username: "",
                password: "",
            },
            rules: {
                username: [
                    {
                        required: true,
                        message: "Please input Activity name",
                        trigger: "blur",
                    },
                ],
                password: [
                    {
                        required: true,
                        message: "请输入密码",
                        trigger: "change",
                    },
                ],
            },
            loading: false,
        };
    },
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
        login() {
            this.loading = true;
            this.$store
                .dispatch("user/login", this.loginForm)
                .then(this.loginSuccess)
                .catch((err) => {
                    this.consoleLogError(err);
                })
                .finally(this.delayLoading);
        },
        delayLoading() {
            setTimeout(() => {
                this.loading = false;
            }, 500);
        },
        loginSuccess(response) {
            this.$router.push({ path: "/" });
            this.successTipNotification("欢迎", `${timeFix()},欢迎回来`);
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
<style scoped lang='scss'>
@import "./index.scss";
</style>