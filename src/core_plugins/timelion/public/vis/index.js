define(function (require) {
  // we also need to load the controller and used by the template
  require('plugins/timelion/vis/timelion_vis_controller');
  require('plugins/timelion/vis/timelion_vis_params_controller');

  // Stylin
  require('plugins/timelion/vis/timelion_vis.less');

  // register the provider with the visTypes registry so that other know it exists
  require('ui/registry/vis_types').register(TimelionVisProvider);

  function TimelionVisProvider(Private) {
    var TemplateVisType = Private(require('ui/template_vis_type'));

    // return the visType object, which kibana will use to display and configure new
    // Vis object of this type.
    return new TemplateVisType({
      name: 'timelion',
      title: '时间序列',
      icon: 'fa-clock-o',
      description: '使用timelion表达式语言创建时间系列图表。 ' +
        '完美的计算和组合时间系列集与函数，如导数和移动平均线',
      template: require('plugins/timelion/vis/timelion_vis.html'),
      params: {
        editor: require('plugins/timelion/vis/timelion_vis_params.html')
      },
      requiresSearch: false,
      implementsRenderComplete: true,
    });
  }

  // export the provider so that the visType can be required with Private()
  return TimelionVisProvider;
});
