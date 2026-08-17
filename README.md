# Doodle Warehouse

3PL 物流教育訓練用的單檔 PWA，手繪風格，支援中文／英文／西班牙文。

**線上版：** https://sandyliu3056.github.io/Doodle-Warehouse/

## 檔案

| 檔案 | 說明 |
|---|---|
| `index.html` | 整個 app（單一檔案，含所有程式、資料與圖形） |
| `sw.js` | Service worker。**改過任何檔案就要調整最上面的 `BUILD`**，否則瀏覽器會繼續拿舊檔 |
| `manifest.webmanifest` | PWA 設定：名稱、主題色、圖示 |
| `icons/` | 桌面與啟動畫面的圖示 |

## 更新流程

1. 換掉 `index.html`
2. 把 `sw.js` 的 `BUILD` 往上加（例如 `dw-1.0.0` → `dw-1.0.1`）
3. commit、push，GitHub Pages 幾分鐘後生效

手機桌面的圖示是「加入主畫面」當下存的快照。換過圖示的話要刪捷徑、清 Safari 網站資料、再重新加入才會更新。

## 內容

- 倉儲作業、中轉、RMA 退貨、棧板作業的動畫教材
- UPS／FedEx／USPS 三家的計費規則與試算
- UPS Ground 計費筆記（可轉 PDF）
- 六款小遊戲
- 可自訂的角色與寵物
