import React from 'react';
import styles from './index.less';
import CodeMirror from 'react-codemirror';
import EchartsLine from "@/components/echarts/echartsLine"
import { EchartsAreaJiangsuMap,options} from "@/config"
import 'codemirror/lib/codemirror.css';
export default class jiangsuMap extends React.Component {
  state = {
    option: EchartsAreaJiangsuMap,
  }
  public componentDidMount() {
    this.CodeMirror = this.refs.editorSql.getCodeMirror();  
    this.CodeMirror.setSize('auto', '100vh');
  }
  public onloadeChart(code: any) {
    this.setState({ option: code })
  }
  public render() {
    return (
      <div className={styles[`jiangsumap-map`]}>
        <div className={styles[`jiangsumap-map-left`]}>
          <CodeMirror ref="editorSql" value={this.state.option} onChange={code => this.onloadeChart(code)} options={options} />
        </div>
        <div className={styles[`jiangsumap-map-right`]}>
          <EchartsLine option={this.state.option} />
        </div>
      </div>
    )
  }
}
