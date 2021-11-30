# 菜单管理


## 菜单列表
### 接口地址
`GET /role/getMenuList`

### 请求参数
| 参数名称        | 是否必须           | 类型  | 说明  |
| ------------- |:-------------:| -----:| ----:|
| sort      | 是| string | 排序 |


### 返回值
| 参数名称                  | 类型  | 说明  |
| ------------- | ----:| ---:|
| code      | number | 返回值 |
| data      | object | 返回数据 |
| id      | number |  菜单ID|
| name      | string | 菜单名|
| pid      | number | 父菜单ID|
| icon      | string | 图标|
| redirect      | string | 重定向|
| sort      | string | 排序|
| url      | string | 地址|
| hidden      | string | 是否隐藏|

### 示例
+ 请求：https://localhost:8000/role/getMenuList?sort=%2Bid

## 添加菜单
### 接口地址
`GET /role/addMenu`

### 请求参数
| 参数名称        | 是否必须           | 类型  | 说明  |
| ------------- |:-------------:| -----:| ----:|
| sort      | 是| string | 排序 |
| pid      | 是| number | 父菜单ID |
| name      | 是| string | 菜单名 |
| url      | 是| string | 地址 |


### 返回值
| 参数名称                  | 类型  | 说明  |
| ------------- | ----:| ---:|
| code      | number | 返回值 |
| msg      | object | 返回信息 |

### 示例
+ 请求：https://localhost:8000/role/addMenu?pid=0&name=111&url=111&sort=1

## 更新菜单
### 接口地址
`POST /role/updateMenu`

### 请求参数
| 参数名称        | 是否必须           | 类型  | 说明  |
| ------------- |:-------------:| -----:| ----:|
| sort      | 是| string | 排序 |
| pid      | 是| number | 父菜单ID |
| name      | 是| string | 菜单名 |
| url      | 是| string | 地址 |
| id      | 是| number | 菜单ID |


### 返回值
| 参数名称                  | 类型  | 说明  |
| ------------- | ----:| ---:|
| code      | number | 返回值 |
| msg      | object | 返回信息 |

### 示例
+ 请求：https://localhost:8000/role/updateMenu?pid=0&name=111&url=111dd&sort=1&id=76

## 删除菜单
### 接口地址
`GET /role/deleteMenu`

### 请求参数
| 参数名称        | 是否必须           | 类型  | 说明  |
| ------------- |:-------------:| -----:| ----:|
| sort      | 是| string | 排序 |
| pid      | 是| number | 父菜单ID |
| name      | 是| string | 菜单名 |
| children      | 是| number | 子级菜单 |
| id      | 是| number | 菜单ID |

### 返回值
| 参数名称                  | 类型  | 说明  |
| ------------- | ----:| ---:|
| code      | number | 返回值 |
| msg      | object | 返回信息 |

### 示例
+ 请求：https://localhost:8000/role/deleteMenu?id=76&name=111&pid=0&sort=1&children=76


## 用户权限菜单
### 接口地址
`GET /role/getUserMenu`

### 请求参数
| 参数名称        | 是否必须           | 类型  | 说明  |
| ------------- |:-------------:| -----:| ----:|
| role      | 是| object | 角色名 |


### 返回值
| 参数名称                  | 类型  | 说明  |
| ------------- | ----:| ---:|
| code      | number | 返回值 |
| data      | object | 返回数据 |
| menu      | array | 菜单列表|
| id      | number |  菜单ID|
| name      | string | 菜单名|
| pid      | number | 父菜单ID|
| icon      | string | 图标|
| redirect      | string | 重定向|
| sort      | string | 排序|
| url      | string | 地址|
| hidden      | string | 是否隐藏|

### 示例
+ 请求：https://fast-learn.youbaobao.xyz:8000/role/getUserMenu?0=administrators&1=role

