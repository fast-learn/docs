

# 登录

## 用户登录

### 接口地址
`POST /user/login`

### 接口地址
| 参数名称        | 是否必须           | 类型  | 说明  |
| ------------- |:-------------:| -----:| ----:|
| password      | 是 | String | 密码 |
| username      | 是 | String | 用户名 |

### 接口地址
| 参数名称                  | 类型  | 说明  |
| ------------- | ----:| ---:|
| code      | number | 返回值 |
| data      | object | 返回数据 |
| token      | string | 登录令牌|

### 接口地址
+ 请求：https://fast-learn.youbaobao.xyz:8000/user/login

## 用户信息

### 接口地址
`GET /user/info`
### 接口地址

无

### 接口地址

| 参数名称                  | 类型  | 说明  |
| ------------- | ----:| ---:|
| code      | number | 返回值 |
| data      | object | 返回数据 |
| avatar      | string | 头像|
| introduction      | string | 介绍|
| name      | string | 用户名|
| roles      | array | 角色信息|

### 接口地址
+ 请求：https://fast-learn.youbaobao.xyz:8000/user/info



