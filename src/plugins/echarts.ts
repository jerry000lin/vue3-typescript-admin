import * as echarts from "echarts/core";
import {
  BarChart,
  // 系列类型的定义后缀都为 SeriesOption
  BarSeriesOption,
  LineChart,
  LineSeriesOption
} from "echarts/charts";
import { GridComponent, GridComponentOption } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = echarts.ComposeOption<
  BarSeriesOption | LineSeriesOption | GridComponentOption
>;

// 注册必须的组件
echarts.use([GridComponent, BarChart, LineChart, CanvasRenderer]);

export default echarts;
