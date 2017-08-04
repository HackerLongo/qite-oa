# Antd Admin

-  基于react，ant-desing，dva，mock，使用roadhog本地调试和构建，浅度响应式设计。

## 特性

-   基于[react](https://github.com/facebook/react)，[ant-design](https://github.com/ant-design/ant-design)，[dva](https://github.com/dvajs/dva)，[Mock](https://github.com/nuysoft/Mock) 企业级后台管理系统最佳实践。
-   基于Antd UI 设计语言，提供后台管理系统常见使用场景。
-   基于[dva](https://github.com/dvajs/dva)动态加载 Model 和路由，按需加载。
-   使用[roadhog](https://github.com/sorrycc/roadhog)本地调试和构建，其中Mock功能实现脱离后端独立开发。
-   浅度响应式设计。


## 开发构建

### 目录结构

```bash
├── /dist/           # 项目输出目录
├── /src/            # 项目源码目录
│ ├── /components/   # UI组件及UI相关方法
│ │ ├── skin.less    # 全局样式
│ │ └── vars.less    # 全局样式变量
│ ├── /routes/       # 路由组件
│ │ └── app.js       # 路由入口
│ ├── /models/       # 数据模型
│ ├── /services/     # 数据接口
│ ├── /themes/       # 项目样式
│ ├── /mock/         # 数据mock
│ ├── /utils/        # 工具函数
│ │ ├── config.js    # 项目常规配置
│ │ ├── menu.js      # 菜单及面包屑配置
│ │ ├── config.js    # 项目常规配置
│ │ ├── request.js   # 异步请求函数
│ │ └── theme.js     # 项目需要在js中使用到样式变量
│ ├── route.js       # 路由配置
│ ├── index.js       # 入口文件
│ └── index.html     
├── package.json     # 项目信息
├── .eslintrc        # Eslint配置
└── .roadhogrc.js    # roadhog配置
```

文件夹命名说明:

-   components：组件（方法）为单位以文件夹保存，文件夹名组件首字母大写（如`DataTable`），方法首字母小写（如`layer`）,文件夹内主文件与文件夹同名，多文件以`index.js`导出对象（如`./src/components/Layout`）。
-   routes：页面为单位以文件夹保存，文件夹名首字母小写（特殊除外，如`UIElement`）,文件夹内主文件以`index.js`导出，多文件时可建立`components`文件夹（如`./src/routes/dashboard`），如果有子路由，依次按照路由层次建立文件夹（如`./src/routes/UIElement`）。

### 快速开始

开发：

```bash
npm run dev
打开 http://localhost:8000
```

构建：

```bash
npm run build

将会生成dist目录
```

代码检测：

```bash
npm run lint
```
## 更新日志

### 未完事宜
1. 图标更换；
2. 流程表单打印;
3. webpack打包优化：antd分离，热发布;

### 2017-8-2

1. 首页消息，添加查看详细链接；
2. socket消息提醒，链接测试；

### 2017-8-1

1. 我的申请，搜索条件，显示错位修改；
2. 我的申请，增加和编辑页面，确定按钮改为暂存；
3. 我的申请，添加和编辑页面，提交验证，修改为验证并滚动到报错位置；


### 2017-7-31

1. 知识库导出word；
2. 表单详情排版优化；
3. 附件列表，优化展示方式；


### 2017-7-28

1. 封装富文本编辑器组件；
2. 更换知识库、通知公告的富文本编辑器；
3. 添加首页下级菜单，通知公告、知识库，页面实现，接口对接；
4. 首页添加知识库tab，页面实现，接口对接；

### 2017-7-27

1. 归档查询，添加全部导出功能，去掉流程名次筛选；
2. 差旅费用报销，新增明细，未保存时，增加不允许提交校验；
3. 修改采购申请，明细编辑，未选择人员，反而将部门清除bug；
4. 采购申请，新增明细，未保存时，添加不允许提交校验；
5. 采购申请，新增明细，部门和人员，设置默认为操作人员信息；
6. 费用报销，新增明细，未保存时，添加不允许提交校验；
7. 申购申请，新增物品明细，未保存时，添加不允许提交校验；
8. 预算申请，新增预算明细，未保存时，添加不允许提交校验；
9. 离职申请，查看详细，添加页面关闭按钮；
10. 知识库管理，新增／编辑页面，状态下拉选择，改为label形式；

### 2017-7-26
1. 归档查询，添加导出结果倒csv；
2. 我的申请，所有时间查询，改为日期查询；
3. 修改采购申请bug；
4. 添加报表模块；
5. 我的申请－查看详情，后台获取用户信息，改为获取本地缓存。

### 2017-7-25
1. 添加home页的waitSignList组件;
2. 实现home页待签收件接口对接，签收功能；
3. 实现home页通知公告详情查看;
4. 优化组织机构，添加行选择；
5. 优化职位管理，添加行选择，取消不用字段，添加职位删除功能；
6. 优化菜单管理，添加行选择；
7. 优化数据字典，添加行选择；
8. 修改员工管理，职位选择－先选职位，后选组织机构bug；
9. 优化员工管理，新增员工即可设置角色。

### 2017-7-24
1. 修改退回修改，返回时404bug；
2. 添加home页，对接头像、待办、消息、通知公告接口。

### 2017-7-21
1. 修改申请，保存按钮点击无效bug；
2. 修改审批信息，table未引用bug；
3. 添加修改密码功能；
4. 修改header定位错误引起弹出层被遮挡bug；
5. 将提交审批，拆分为 提交和指定审批人；
6. 修改因页面路由方式变化，引起系统管理模块分页失效bug；
7. 将员工管理的设置用户角色和确定操作合并。

### 2017-7-20
1. 发布到测试环境；
2. 控制选择人组件，人员必选；
3. 将browserHistory方式，改为hashHistory；
4. 将逐页登录验证，改为统一验证。

### 2017-7-19
1. 修改请假申请页面展示bug;
2. 修改审批信息，完成耗时格式bug；
3. 修改我的待办，提交时出现不必要的选择人员bug；
4. 我的待签收，查询、详情页面实现，查看、签收后台接口对接；
5. 所有详情页面，添加关闭按钮，返回上一页；
6. 所有详情页，流程图和审批信息交换位置；
7. 所有查看详情入口，修改为点击 查看 链接进入；
8. 所有申请页面，状态为‘返回修改’时，修改为只可查看;
9. 附件列表，图片添加查看大图功能；
10. 所有分页条，添加4种条数展示选择。

### 2017-7-18
1. 发布到apache，解决重定向问题；
1). 开启重定向
```
LoadModule hfs_apple_module libexec/apache2/mod_hfs_apple.so
```
2). 配置重定向
```
<IfModule alias_module>
		<Directory "/">
        RewriteEngine On
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule ^(.*)$ index.html [QSA,L]
    </Directory>
<IfModule>
```
2. 发布到tomcat，同样解决重定向问题，使用uriRewrite；
3. 修改职位级别绑定值错误bug，员工管理修改头像bug；
4. 实现菜单根据权限动态生成；
5. 添加build文件夹到gitignore。


### 2017-7-17
1. 根据用车申请特有状态，修改用车申请和待办，9:00-11:00;
2. 修改付款申请，11:00-12:00;
3. 添加我的已办，13:30-14:30;
4. 添加归档查询，14:30-15:30;
5. 为17个我的申请，在未提交前，添加删除功能，15:30-18:00。

### 2017-7-14
1. 合同－流程，申请提交，审批，返回修改，8:30-9:30；
2. 用车－流程，申请提交，审批，返回修改，9:30-10:30；
3. 申购－流程，申请提交，审批，返回修改，10:30-11:30；
4. 采购－流程，申请提交，审批，返回修改，11:30-12:30；
5. 付款－流程，申请提交，审批，返回修改，13:30-14:30；
6. 招聘－流程，申请提交，审批，返回修改，14:30-15:30；
7. 费用报销－流程，申请提交，审批，返回修改，15:30-16:30；
8. 预算－流程，申请提交，审批，返回修改，16:30-17:30；
9. 通知发放－流程，申请提交，审批，返回修改，17:30-18:30。

### 2017-7-13

1. 请假－流程，申请提交，审批，返回修改，8:30-10:00；
2. 加班－流程，申请提交，审批，返回修改，10:00-11:30；
3. 出差－流程，申请提交，审批，返回修改，11:30-14:30；
4. 职位管理，添加职位级别，14:30-15:00；
5. 离职－流程，申请提交，审批，返回修改，15:00-16:00；
6. 转正－流程，申请提交，审批，返回修改，16:00-17:00；
7. 差旅费报销－流程，申请提交，审批，返回修改，17:00-18:00。

### 2017-7-12

1. [漏打卡]流程审批，退回修改，8:30-12:00;
2. 调薪申请－流程审批，13:00-16:00；
3. CommentTable，FlowImg，组件开发，16:00-18:00。

### 2017-7-11

1. 我的待办，页面实现，查询接口对接，8:30-12:00；
2. [漏打卡]流程审批，页面实现，办理接口对接，13:30-17:00；
3. [漏打卡]流程审批，退回修改，接口对接，17:00－18:00。

#### 2017-7-10

1. 流程部署[部署列表、定义列表]，页面实现，后台接口对接；
2. SelectUser组件开发；
3. 漏打卡流程申请提交，后台接口对接；

#### 2017-7-7

1. 我的申请－通知申请，页面实现，增加、修改，查看后台接口对接；
2. 系统管理－人员管理，bug修改；
3. 用户登陆储存，由localStorage改为sessionStorage；
4. 所有必填项，都提示为'不能为空'；
5. 修改InputNumber，前缀多次出现bug；

#### 2017-7-6

1. 我的申请－招聘申请，页面实现，增加、修改，查看后台接口对接；
2. 我的申请－离职申请，页面实现，增加、修改，查看后台接口对接；
3. 我的申请－转正申请，页面实现，增加、修改，查看后台接口对接；
4. 我的申请－调薪申请，页面实现，增加、修改，查看后台接口对接；
5. 我的申请－费用报销申请，页面实现，增加、修改，查看后台接口对接；
6. 我的申请－预算申请，页面实现，增加、修改，查看后台接口对接。

#### 2017-7-5

1. 我的申请－采购申请，接口优化；

#### 2017-7-4

1. 我的申请－采购申请，页面实现，增加、修改、查看后台接口对接；
2. 我的申请－付款申请，页面实现，增加、修改，查看后台接口对接；

#### 2017-7-3

1. 我的申请－差旅费报销申请，页面展示优化；
2. 我的申请－合同申请，页面实现，增加、修改，查看后台接口对接；
3. 我的申请－用车申请，页面实现，增加、修改，查看后台接口对接；
4. 我的申请－申购申请，页面实现，增加、修改，查看后台接口对接。

#### 2017-6-30

1. EditCellTable组件封装；
2. 我的申请－差旅费报销申请，页面实现，增加、修改功能实现。

#### 2017-6-29

1. 我的申请-出差申请，页面实现，增加、修改，查看后台接口对接；
2. InputCell、InputCurrencyCell、SelectCell、DateTimeCell组件封装；

#### 2017-6-28

1. 我的申请-请假申请，页面实现，增加、修改，查看后台接口对接；
2. 我的申请-加班申请，页面实现，增加、修改，查看后台接口对接。

#### 2017-6-27

1. 我的申请－考勤异常申请页面展示优化
2. 创建dev分支

#### 2017-6-26

1. 优化知识库展示
2. 我的申请-考勤异常申请，页面实现，增加、修改，查看后台接口对接

#### 2017-6-23

1. FileList 组件封装；
2. 知识库管理－查看详情；

#### 2017-6-22

1. 文件上传组件封装；

#### 2017-6-21

1. 知识库管理－页面和功能实现：列表展示，发布、下架，富文本编辑，新增、修改；

#### 2017-6-20

1. 系统管理－员工管理，启用／禁用，密码重置；
2. 系统管理－用户管理，用户登录／注销；
3. 系统管理－权限设置，用户角色绑定；
4. 系统管理－构建局域网测试环境；

#### 2017-6-19

1. 系统管理－员工管理，新增，修改，多职位选择，折叠，头像；

#### 2017-6-16

1. 系统管理－权限管理，页面，后台接口对接；
2. 系统管理－人员管理，页面，后台接口对接；

#### 2017-6-15

1. 系统管理－角色管理，后台接口对接；
2. 系统管理－菜单管理，页面，接口对接；

#### 2017-6-14

1. 系统管理－职位管理，页面，后台接口对接；
2. 系统管理－角色管理，页面

#### 2017-6-13

1. 系统管理－数据字典，后台接口对接；
2. 后台接口qite路径，设置代理；

#### 2017-6-12

1. 系统管理－组织机构后台接口对接；
2. 用户登录、退出－接口对接；

#### 2017-6-8

1. 添加系统管理－组织机构优化方法
1). treeToArray;
2). arrayToTree;

#### 2017-6-8

1. 添加系统管理－组织机构

#### 2017-6-7

1. TreeTable父子递归选择实现；
 

#### 2017-6-6

1. 添加BackTop公共方法；
2. TreeTable父子递归选择实现摸索；

#### 2017-6-5

1. 添加treeTable
2. build优化：取消mock,.roadhog.mock设置即可；

#### 2017-6-2

1. build优化：添加webpack，使用户hash打包文件名

#### 2017-6-1

1. 修复dva的Warning：Accessing PropTypes via the main React package is deprecated. Use the prop-types package from npm instead.（指定react版本为15.0.0）

2. 修复dva的Warning：AnimateChild: React.createClass is deprecated and will be removed in version 16. Use plain JavaScript classes instead. If you're not yet ready to migrate, create-react-class is available on npm as a drop-in replacement.（指定react-router版本为4.4.1）
