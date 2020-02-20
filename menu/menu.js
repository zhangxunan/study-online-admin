const menu = {}

/**
 * 首页
 * @type {{name: string, path: string, icon: string}}
 */
menu.home = {
  name: '首页',
  path: '/home',
  icon: 'fa fa-tachometer'
}

/**
 * 字体图标
 * @type {{name: string, icon: string, children: {}}}
 */
// menu.font_icon = {
//   name: '字体图标',
//   icon: 'fa fa-th',
//   children: {}
// }
// const icon = menu.font_icon.children

// icon.font_awesome = {
//   name: 'FontAwesome 4.7',
//   path: '/font_awesome'
// }
// icon.element_icon = {
//   name: 'ElementIcon',
//   path: '/element_icon'
// }

/**
 * 内容管理
 * @type {{name: string, icon: string, children: {}}}
 */
menu.content_manage = {
  name: '内容管理',
  icon: 'fa fa-file-text-o',
  children: {}
}

const ContentManage = menu.content_manage.children

ContentManage.post = {
  name: '文章管理',
  path: '/contentManage'
}

/**
 * 用户管理
 * @type {{name: string, icon: string, children: {}}}
 */
menu.user_manage = {
  name: '用户管理',
  icon: 'fa fa-user-circle-o',
  children: {}
}
const UserManage = menu.user_manage.children

UserManage.user = {
  name: '用户列表',
  path: '/userManage'
}

UserManage.user2 = {
  name: '用户列表2',
  path: '/users'
}

/**
 * 分类管理
 * @type {{name: string, icon: string, children: {}}}
 */
menu.category_manage = {
  name: '分类管理',
  icon: 'fa fa-sitemap',
  children: {}
}
const CategoryManage = menu.category_manage.children

CategoryManage.category = {
  name: '分类列表',
  path: '/categoryManage'
}

menu.permission_manage = {
  name: '权限管理',
  icon: 'fa fa-qrcode',
  children: {}
}
const PermissionManage = menu.permission_manage.children

PermissionManage.role = {
  name: '角色管理',
  path: '/permissionManage/role'
}

PermissionManage.permission = {
  name: '权限列表',
  path: '/permissionManage/permission'
}

export default menu
