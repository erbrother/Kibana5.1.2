import uiModules from 'ui/modules';
let module = uiModules.get('kibana');

module.constant('refreshIntervals', [
  { value : 0, display: '停止自动刷新', section: 0},

  { value : 5000, display: '5 秒', section: 1},
  { value : 10000, display: '10 秒', section: 1},
  { value : 30000, display: '30 秒', section: 1},
  { value : 45000, display: '45 秒', section: 1},

  { value : 60000, display: '1 分钟', section: 2},
  { value : 300000, display: '5 分钟', section: 2},
  { value : 900000, display: '15 分钟', section: 2},
  { value : 1800000, display: '30 分钟', section: 2},

  { value : 3600000, display: '1 小时', section: 3},
  { value : 7200000, display: '2 小时', section: 3},
  { value : 43200000, display: '12 小时', section: 3},
  { value : 86400000, display: '1 天', section: 3}
]);

