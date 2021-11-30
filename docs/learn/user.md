# 用户管理


## 用户列表
### 接口地址
`GET /role/getUserList`

### 请求参数
| 参数名称        | 是否必须           | 类型  | 说明  |
| ------------- |:-------------:| -----:| ----:|
| page      | 是 | number | 页码 |
| pageSize      | 是 | number | 页数 |
| sort      | 是 | String | 排序 |
| username      | 否 | String | 用户名 |
| nickname      | 否 | String | 昵称 |
| email      | 否 | String | 邮箱 |


### 返回值
| 参数名称       | 类型  | 说明  |
| ------------- | ----:| ---:|
| code      | number | 返回值 |
| data      | object | 返回数据 |
| count      | number | 总数|
| page      | string | 页码|
| pageSize      | string | 页数|
| list      | array | 用户信息|

### 示例
+ 请求：https://fast-learn.youbaobao.xyz:8000/role/getUserList?page=1&pageSize=10&sort=%2Bid

## 用户对应角色
### 接口地址
`GET /role/getUserRole`

### 请求参数
| 参数名称        | 是否必须           | 类型  | 说明  |
| ------------- |:-------------:| -----:| ----:|
| id      | 是  | number | 用户Id |

### 返回值
| 参数名称                  | 类型  | 说明  |
| ------------- | ----:| ---:|
| code      | number | 返回值 |
| data      | object | 返回数据(角色信息) |

### 示例
+ 请求： https://fast-learn.youbaobao.xyz:8000/role/getUserRole?id=1

## 删除角色
### 接口地址
`GET /role/deleteUser`

### 请求参数
| 参数名称        | 是否必须           | 类型  | 说明  |
| ------------- |:-------------:| -----:| ----:|
| id            |是| number | 用户ID |
| username       |是    | number | 用户名 |
| status            |是 | number | 用户状态 |
| nickname    |是  | number | 用户昵称 |
| avatar     |是 | number | 用户头像 |


### 返回值
| 参数名称                  | 类型  | 说明  |
| ------------- | ----:| ---:|
| code      | number | 返回值 |
| msg      | object | 返回信息 |

### 示例
+ 请求：https://fast-learn.youbaobao.xyz:8000/role/deleteUser?id=72&username=xx&password=xx&status=1&nickname=xx&avatar=xx.jpg



## 角色信息列表
### 接口地址
`GET /role/getRoleList`

### 请求参数

无

### 返回值
| 参数名称                  | 类型  | 说明  |
| ------------- | ----:| ---:|
| code      | number | 返回值 |
| data      | object | 返回数据 |
| id      | string | 角色ID|
| name      | string | 角色信息|

### 示例
+ 请求：https://fast-learn.youbaobao.xyz:8000/role/getRoleList


## 上传头像
### 接口地址
`POST /role/addUserAvatar`

### 请求参数
| 参数名称        | 是否必须           | 类型  | 说明  |
| ------------- |:-------------:| -----:| ----:|
| file     | 是 | file | 图片信息 |

### 返回值
| 参数名称                  | 类型  | 说明  |
| ------------- | ----:| ---:|
| code      | number | 返回值 |
| data      | object | 返回数据 |
| fileName      | string | 图片名|
| filePath      | string | 图片存储位置|
| url      | string | 图片上传地址|
| msg      | string | 返回信息|

### 示例
+ 请求：https://fast-learn.youbaobao.xyz:8000/role/addUserAvatar

## 添加用户
### 接口地址
`GET /role/addUser`

### 请求参数
| 参数名称        | 是否必须           | 类型  | 说明  |
| ------------- |:-------------:| -----:| ----:|
| username      | 是| string | 用户名 |
| nickname      | 是| string | 昵称 |
| email      | 否| string | 邮箱|
| role      | 是| string | 角色信息|
| password   | 是   | string | 密码|
| avatar     | 否 | string | 头像地址|

### 返回值
| 参数名称                  | 类型  | 说明  |
| ------------- | ----:| ---:|
| code      | number | 返回值 |
| msg      | object | 返回信息 |

### 示例
+ 请求：https://fast-learn.youbaobao.xyz:8000/role/addUser?username=33&nickname=33&role=administrators&password=33&avatar=https:%2F%2Ffast-learn.youbaobao.xyz%2Fnode-egg-admin-upload%2F%E5%A4%B4%E5%83%8F1.jpg

## 更新用户
### 接口地址
`GET /role/updateUser`

### 请求参数
| 参数名称        | 是否必须           | 类型  | 说明  |
| ------------- |:-------------:| -----:| ----:|
| username      | 是| string | 用户名 |
| nickname      | 是| string | 昵称 |
| email      | 是| string | 邮箱|
| role      | 是| string | 角色信息|
| avatar     | 是 | string | 头像地址|
| id     | 是 | string | 用户ID|


### 返回值
| 参数名称                  | 类型  | 说明  |
| ------------- | ----:| ---:|
| code      | number | 返回值 |
| code      | object | 返回信息 |


### 示例
+ 请求：https://fast-learn.youbaobao.xyz:8000/role/updateUser?username=xx&nickname=xx&email=xx&role=xx&password=1xx&avatar=xx&id=xx