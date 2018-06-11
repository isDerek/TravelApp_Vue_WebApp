/*
* @Author: Derek
* @Date:   2018-05-11 10:29:31
* @Last Modified by:   Derek
* @Last Modified time: 2018-05-11 10:52:42
*/
let defaultcity = '上海'
try {
  if (localStorage.city) {
    defaultcity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultcity
}
