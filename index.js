/*
 * @Descripttion: ----描述----
 * @version: 1.0
 * @Author: 张鹏
 * @Date: 2022-07-08 15:48:09
 * @LastEditors: 张鹏
 * @LastEditTime: 2022-07-08 15:52:45
 */
'use strict'

let pinyin = new (require('./pinyin'))({ charCase: 0 })
/*console.log(pinyin.getFullChars('管理员'))
console.log(pinyin.getCamelChars('管理员'))
console.log(pinyin.getCamelChars('1234'))
console.log(pinyin.getCamelChars('english'))*/
module.exports = pinyin
