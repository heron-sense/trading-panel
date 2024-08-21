export const navigations = [
  { name: 'Dashboard', path: '/dashboard/default', icon: 'dashboard' },
  { label: 'PAGES', type: 'label' },
  {
    name: 'Tasks',
    icon: 'email',
    children: [
      { name: 'List', icon:'search', path: '/client/list', iconText: 'T' },
      { name: 'Add New', icon: 'person_add',  iconText: 'SU', path: '/client/add' },
    ]
  },
  {
    name: '数字财产',
    icon: 'message',
    children: [
      { name: '上传', icon:'search', path: '/client/payment', iconText: 'T' },
      { name: '收益', icon:'search', path: '/client/order', iconText: 'T' },
      { name: '财产列表', icon:'search', path: '/client/payment', iconText: 'T' },
    ]
  },
  {
    name: '抽奖',
    icon: 'card_giftcard',
    children: [
      { name: '创建', icon:'search', path: '/client/payment', iconText: 'T' },
      { name: '抽奖', icon:'search', path: '/client/order', iconText: 'T' },
    ]
  },
  { label: '', type: 'label' },
  {
    name: 'Requests from Client',
    icon: 'message',
    children: [
      { name: '订单', icon:'search', path: '/client/order', iconText: 'T' },
      { name: '退款申请', icon:'search', path: '/client/payment', iconText: 'T' },
    ]
  },
  { label: '', type: 'label' },
  {
    name: 'Clients',
    icon: 'people',
    children: [
      { name: 'Search', icon:'search', path: '/client/list', iconText: 'T' },
      { name: 'Add New', icon: 'person_add',  iconText: 'SU', path: '/client/add' },

      { name: 'Sign in', iconText: 'SI', path: '/session/signin' },
      { name: 'Sign up', iconText: 'SU', path: '/session/signup' },
      { name: 'Forgot Password', iconText: 'FP', path: '/session/forgot-password' },
      { name: 'Error', iconText: '404', path: '/session/404' },
    ]
  },
  {
    name: '内容管理',
    icon: 'message',
    children: [
      { name: '文章', icon: 'contact_phone',  iconText: 'SU', path: '/settings/client-template' },
      { name: '视频', icon: 'contact_phone',  iconText: 'SU', path: '/settings/role/add' },
    ]
  },

  { label: '', type: 'label' },
  {
    name: 'Settings',
    icon: 'settings',
    children: [
      { name: '客户信息模板', icon: 'contact_phone',  iconText: 'SU', path: '/settings/client-template' },
      { name: '添加角色', icon: 'contact_phone',  iconText: 'SU', path: '/settings/role/add' },
      { name: '角色列表', icon: 'contact_phone',  iconText: 'SU', path: '/settings/rolt/list' },
      { name: '角色权限', icon: 'perm_data_setting',  iconText: 'SU', path: '/settings/role/permission' },
      { name: 'Forgot Password', iconText: 'FP', path: '/session/forgot-password' },
      { name: 'Error', iconText: '404', path: '/session/404' },


    ]
  },

  { label: 'Components', type: 'label' },
  {
    name: 'Components',
    icon: 'favorite',
    badge: { value: '30+', color: 'secondary' },
    children: [
      { name: 'Auto Complete', path: '/material/autocomplete', iconText: 'A' },
      { name: 'Buttons', path: '/material/buttons', iconText: 'B' },
      { name: 'Checkbox', path: '/material/checkbox', iconText: 'C' },
      { name: 'Dialog', path: '/material/dialog', iconText: 'D' },
      { name: 'Expansion Panel', path: '/material/expansion-panel', iconText: 'E' },
      { name: 'Form', path: '/material/form', iconText: 'F' },
      { name: 'Icons', path: '/material/icons', iconText: 'I' },
      { name: 'Menu', path: '/material/menu', iconText: 'M' },
      { name: 'Progress', path: '/material/progress', iconText: 'P' },
      { name: 'Radio', path: '/material/radio', iconText: 'R' },
      { name: 'Switch', path: '/material/switch', iconText: 'S' },
      { name: 'Slider', path: '/material/slider', iconText: 'S' },
      { name: 'Snackbar', path: '/material/snackbar', iconText: 'S' },
    ]
  },
  {
    name: 'Charts',
    icon: 'trending_up',
    children: [{ name: 'Echarts', path: '/charts/echarts', iconText: 'E' }]
  },
  {
    name: 'Documentation',
    icon: 'launch',
    type: 'extLink',
    path: 'http://demos.ui-lib.com/matx-react-doc/'
  }
];
