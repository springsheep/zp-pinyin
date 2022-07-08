<!--
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-07-08 15:48:09
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-07-08 15:49:48
-->

# 汉字转拼音

把汉字转化为拼音字母，使用新语法并去掉 mootools 的依赖

## 安装

```base
npm install js-pinyin

import pinyin from 'js-pinyin'
```

## 使用示例

```js
let pinyin = require('js-pinyin')

pinyin.setOptions({ checkPolyphone: false, charCase: 0 })

console.log(pinyin.getFullChars('管理员'))
console.log(pinyin.getCamelChars('管理员'))
console.log(pinyin.getCamelChars('1234'))
console.log(pinyin.getCamelChars('english'))
```
