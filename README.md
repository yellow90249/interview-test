# UNNOTECH 測驗 by Gary

## 執行專案

拉下來後安裝依賴

```
npm install
```

再啟動本地 server

```
npm run serve
```

輸入路徑 `/books` 到書本列表

本專案有放在 Netifly 上 : https://garysproject.netlify.app/books

補充 : 若起不來，嘗試把 `package-lock.json` 和 `node_modules` 都刪掉再從頭試一次。

## 專案的架構、邏輯說明

![架構](https://github.com/yellow90249/interview-test/assets/42512704/81d584d3-4d07-49f6-a008-e8ec60b33d75)


### scss 資料夾

我習慣把樣式拆成小塊在放進同一資料夾做管理，這個專案較小所以拆成了 `base` `layout` `components` `common` 4 塊。

本專案盡量遵守 Material Design 和 8px Layout。

### views 資料夾 / components 資料夾

views 內的檔案會映射到路由上，本專案有 3 個路由分別是 : `list`、`add`、`detail`，所以 views 內也有對應的三個文件。

components 則是組成 views 的小區塊，能被重複使用。

list 頁面點擊右上按鈕會進入 add 頁面，點擊列表進入則會 detail 頁面`，add 頁面點擊按鈕發送請求，若成功會跳成功訊息並導轉至 list 頁面，若失敗則跳失敗訊息並提留在原頁面， detail 頁面也是同樣邏輯。

### router/index.js 文件

前端路由，使用歷史模式，下面會提到歷史模式所需的相關配置。

### _redirects 文件

Netifly 路徑導轉文件。

SPA 需要一個先獲取一個 html 再讓 js 進去裏頭做些瘋狂的事情。vue-router 在歷史模式下的路徑有機會讓伺服器無法正確回傳 html 所以需要配置導轉文件，讓所有路徑都導轉到 index.html。

## 使用到的第三方 library 的理解，以及為何使用它

axios : 一個 http request library，容易使用，基於 promise，含有許多方便的功能如 : `Cross-browser compatibility` `Interceptors` `Error handling`，總結來說 axios 是個發請求的好夥伴，文檔以及社群使用範例都很多，所以選擇用他。

sweetalert2 : 好看的提示庫，新增以及更新都需要顯示結果，所以選擇使用這個我熟悉的庫來做。

本專案沒有用到 vuex / pinia 這種管理全域資料的庫是因為評估專案大小後，覺得不必。

## 專案中你遇到的困難、問題，以及解決的方法

第三方庫些配置忘了需要重看文檔。

這次的 input 樣式較特殊花畫了比較多時間。

本專案的邏輯不算困難，實作上沒什麼大問題。

平常遇到問題的解決方法 : google、stackoverflow、chatGPT。
