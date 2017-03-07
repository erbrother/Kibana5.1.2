import VislibVisTypeVislibVisTypeProvider from 'ui/vislib_vis_type/vislib_vis_type';
import VisSchemasProvider from 'ui/vis/schemas';
import areaTemplate from 'plugins/kbn_vislib_vis_types/editors/area.html';

export default function HistogramVisType(Private) {
  const VislibVisType = Private(VislibVisTypeVislibVisTypeProvider);
  const Schemas = Private(VisSchemasProvider);

  return new VislibVisType({
    name: 'area',
    title: '面积图',
    icon: 'fa-area-chart',
    description: '强调数量随时间而变化的程度，也可用于引起人们对总值趋势的注意。' + 
    '堆积面积图、百分比堆积面积图还可以显示部分与整体之间（或者几个数据变量之间）的关系。',
    params: {
      defaults: {
        shareYAxis: true,
        addTooltip: true,
        addLegend: true,
        legendPosition: 'right',
        smoothLines: false,
        scale: 'linear',
        interpolate: 'linear',
        mode: 'stacked',
        times: [],
        addTimeMarker: false,
        defaultYExtents: false,
        setYExtents: false,
        yAxis: {}
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
      scales: ['linear', 'log', 'square root'],
      modes: ['stacked', 'overlap', 'percentage', 'wiggle', 'silhouette'],
      editor: areaTemplate
    },
    implementsRenderComplete: true,
    schemas: new Schemas([
      {
        group: 'metrics',
        name: 'metric',
        title: 'Y-Axis',
        min: 1,
        aggFilter: '!std_dev',
        defaults: [
          { schema: 'metric', type: 'count' }
        ]
      },
      {
        group: 'buckets',
        name: 'segment',
        title: 'X-Axis',
        min: 0,
        max: 1,
        aggFilter: '!geohash_grid'
      },
      {
        group: 'buckets',
        name: 'group',
        title: 'Split Area',
        min: 0,
        max: 1,
        aggFilter: '!geohash_grid'
      },
      {
        group: 'buckets',
        name: 'split',
        title: 'Split Chart',
        min: 0,
        max: 1,
        aggFilter: '!geohash_grid'
      }
    ])
  });
};
