<!--
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-07-08 15:48:09
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-07-08 15:54:35
-->

# 汉字转拼音

把汉字转化为拼音字母，使用新语法并去掉 mootools 的依赖

## 安装

```base
npm install @springsheep/zp-pinyin

import pinyin from '@springsheep/zp-pinyin'
```

## 使用示例

```js
let pinyin = require('@springsheep/zp-pinyin')

pinyin.setOptions({ checkPolyphone: false, charCase: 0 })

console.log(pinyin.getFullChars('管理员'))
console.log(pinyin.getCamelChars('管理员'))
console.log(pinyin.getCamelChars('1234'))
console.log(pinyin.getCamelChars('english'))
```
