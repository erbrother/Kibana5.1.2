import VislibVisTypeVislibVisTypeProvider from 'ui/vislib_vis_type/vislib_vis_type';
import VisSchemasProvider from 'ui/vis/schemas';
import pieTemplate from 'plugins/kbn_vislib_vis_types/editors/pie.html';

export default function HistogramVisType(Private) {
  const VislibVisType = Private(VislibVisTypeVislibVisTypeProvider);
  const Schemas = Private(VisSchemasProvider);

  return new VislibVisType({
    name: 'pie',
    title: '饼图',
    icon: 'fa-pie-chart',
    description: '显示各项的大小与各项总和的比例。适用简单的占比比例图，在不要求数据精细的情况适用。' +
     '明确显示数据的比例情况，尤其合适渠道来源等场景。',
    params: {
      defaults: {
        shareYAxis: true,
        addTooltip: true,
        addLegend: true,
        legendPosition: 'right',
        isDonut: false
      },
      legendPositions: [{
        value: 'left',
        text: 'left',
      }, {
        value: 'right',
        text: 'right',
      }, {
        value: 'top',
        text: 'top',
      }, {
        value: 'bottom',
        text: 'bottom',
      }],
      editor: pieTemplate
    },
    responseConverter: false,
    hierarchicalData: true,
    implementsRenderComplete: true,
    schemas: new Schemas([
      {
        group: 'metrics',
        name: 'metric',
        title: 'Slice Size',
        min: 1,
        max: 1,
        aggFilter: ['sum', 'count', 'cardinality'],
        defaults: [
          { schema: 'metric', type: 'count' }
        ]
      },
      {
        group: 'buckets',
        name: 'segment',
        icon: 'fa fa-scissors',
        title: 'Split Slices',
        min: 0,
        max: Infinity,
        aggFilter: '!geohash_grid'
      },
      {
        group: 'buckets',
        name: 'split',
        icon: 'fa fa-th',
        title: 'Split Chart',
        mustBeFirst: true,
        min: 0,
        max: 1,
        aggFilter: '!geohash_grid'
      }
    ])
  });
};
