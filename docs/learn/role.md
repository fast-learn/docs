# 角色管理

## 添加角色
### 接口地址
`POST /role/addRole`

### 请求参数
| 参数名称        | 是否必须           | 类型  | 说明  |
| ------------- |:-------------:| -----:| ----:|
| name      | 是| string | 角色名 |
| menu      | 是| string | 菜单ID |

### 返回值
| 参数名称                  | 类型  | 说明  |
| ------------- | ----:| ---:|
| code      | number | 返回值 |
| msg      | object | 返回信息 |

### 示例
+ 请求：https://fast-learn.youbaobao.xyz:8000/role/addRole?name=dd&menu=69


## 角色菜单
### 接口地址
`GET /role/getRoleList`

### 请求参数
| 参数名称        | 是否必须           | 类型  | 说明  |
| ------------- |:-------------:| -----:| ----:|
| sort      | 是| string | 排序 |

### 返回值
| 参数名称                  | 类型  | 说明  |
| ------------- | ----:| ---:|
| code      | number | 返回值 |
| data      | object | 返回数据 |
| id      | number | 角色ID|
| name      | string | 角色名|

### 示例
+ 请求：https://fast-learn.youbaobao.xyz:8000/role/getRoleList?sort=%2Bid

## 更新角色
### 接口地址
`POST /role/updataRole`

### 请求参数
| 参数名称        | 是否必须           | 类型  | 说明  |
| ------------- |:-------------:| -----:| ----:|
| name      | 是| string | 角色名 |
| menu      | 是| string | 菜单ID |
| id      | 是| number | 角色ID |


### 返回值
| 参数名称                  | 类型  | 说明  |
| ------------- | ----:| ---:|
| code      | number | 返回值 |
| msg      | object | 返回信息 |

### 示例
+ 请求：https://fast-learn.youbaobao.xyz:8000/role/updataRole?name=dd&menu=66,67,68,69&id=31

## 删除角色
### 接口地址
`GET /role/deleteRole`

### 请求参数
| 参数名称        | 是否必须           | 类型  | 说明  |
| ------------- |:-------------:| -----:| ----:|
| name      | 是| string | 角色名 |
| id      | 是| string | 角色ID |

### 返回值
| 参数名称                  | 类型  | 说明  |
| ------------- | ----:| ---:|
| code      | number | 返回值 |
| msg      | object | 返回信息 |

### 示例
+ 请求：https://fast-learn.youbaobao.xyz:8000/role/deleteRole?id=31&name=dd

