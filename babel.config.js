/*
 * @Author: zhangxin
 * @CreateTime: 2022-02-23 13:09:58
 * @LastEditors: ...
 * @LastEditTime:...
 * @Description: ...
 */
module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset',
        "@babel/preset-env"
    ],
    plugins: [
        [
            "import",
            {
                "libraryName": "ant-design-vue",
                "libraryDirectory": "es",
                "style": 'css'
            }
        ],
        "lodash"
    ]
}
