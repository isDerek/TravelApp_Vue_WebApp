/*
* @Author: Derek
* @Date:   2018-05-11 10:31:15
* @Last Modified by:   Derek
* @Last Modified time: 2018-05-11 10:52:09
*/
export default {
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
