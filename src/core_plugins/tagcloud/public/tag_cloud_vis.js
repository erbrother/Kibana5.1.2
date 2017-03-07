import 'plugins/tagcloud/tag_cloud.less';
import 'plugins/tagcloud/tag_cloud_controller';
import 'plugins/tagcloud/tag_cloud_vis_params';
import TemplateVisTypeTemplateVisTypeProvider from 'ui/template_vis_type/template_vis_type';
import VisSchemasProvider from 'ui/vis/schemas';
import tagCloudTemplate from 'plugins/tagcloud/tag_cloud_controller.html';
import visTypes from 'ui/registry/vis_types';

visTypes.register(function TagCloudProvider(Private) {
  const TemplateVisType = Private(TemplateVisTypeTemplateVisTypeProvider);
  const Schemas = Private(VisSchemasProvider);

  return new TemplateVisType({
    name: 'tagcloud',
    title: '词云',
    implementsRenderComplete: true,
    description: '标签云可视化是文本数据的可视化表示, ' +
    '通常用于可视化自由形式文本。标签通常是单个单词。字体的大小与它的重要性相关。',
    icon: 'fa-cloud',
    template: tagCloudTemplate,
    params: {
      defaults: {
        scale: 'linear',
        orientation: 'single',
        minFontSize: 18,
        maxFontSize: 72
      },
      scales: ['linear', 'log', 'square root'],
      orientations: ['single', 'right angled', 'multiple'],
      editor: '<tagcloud-vis-params></tagcloud-vis-params>'
    },
    schemas: new Schemas([
      {
        group: 'metrics',
        name: 'metric',
        title: 'Tag Size',
        min: 1,
        max: 1,
        aggFilter: ['!std_dev', '!percentiles', '!percentile_ranks'],
        defaults: [
          { schema: 'metric', type: 'count' }
        ]
      },
      {
        group: 'buckets',
        name: 'segment',
        icon: 'fa fa-cloud',
        title: 'Tags',
        min: 1,
        max: 1,
        aggFilter: ['terms']
      }
    ])
  });
});


