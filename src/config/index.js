import EchartLine from "./src/mapLine/EchartsLine"
import EchartsAreaChinaMap from "./src/mapArea/EchartsAreaChinaMap"
import EchartsAreaJiangsuMap from "./src/mapArea/EchartsAreaJiangsuMap"

const options = {
  lineNumbers: true,                     //显示行号  
  mode: { name: "text/x-mysql", json: true },          //定义mode  
  extraKeys: { "Ctrl": "autocomplete" },   //自动提示配置  
  theme: "ambiance",                 //选中的theme  
  lineSeparator: '', //换行符号
  indentUnit: 2,//首行缩进
  autofocus: true,
  gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"],
};
export{
  options,
  EchartLine,
  EchartsAreaChinaMap,
  EchartsAreaJiangsuMap
}