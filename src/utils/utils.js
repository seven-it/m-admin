// 封装 sessionStorage, 统一存取时数据格式转换
export const sessionStorage = {
  setItem(key, value) {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  },
  getItem(key) {
    return JSON.parse(window.sessionStorage.getItem(key));
  },
  removeItem(key) {
    window.sessionStorage.removeItem(key);
  },
  clear() {
    sessionStorage.clear();
  }
};
