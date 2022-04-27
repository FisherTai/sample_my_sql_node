# Node.js + MySql

---

* 基本的Node.js串聯MySql資料庫操作，使用npm的mysql2套件

* 預設表單創建:

```SQL
CREATE TABLE Customer
(SID int(10) NOT NULL AUTO_INCREMENT,
Customer_Name char(50),
Birth_Date date,
PRIMARY KEY (SID));
```

* 環境變數，使用自己的值

```env
DB_HOST=
DB_USER=
DB_DATABASE=
DB_PASSWORD=

SERVER_HOST=
```

* 啟動
    1. `npm install`
    2. `npm start`

* API
* GET
  * 取得全部內容
     ***/api/coustom/***
  * 取得單一內容
     ***/api/coustom/{sid}***
* POST
  * 新增一筆內容
      ***/api/coustom/***

    | Key           |Type               |
    | ------------- | -------------     |
    | Customer_Name | String            |
    | Birth_Date    | Date (YYYY-MM-DD) |
* PATCH
  * 更新一筆內容
    ***/api/coustom/{sid}***
* DELETE
  * 刪除一筆內容
    ***/api/coustom/{sid}***
