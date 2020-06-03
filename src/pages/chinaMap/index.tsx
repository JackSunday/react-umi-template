import React from 'react';
import styles from './index.less';
import CodeMirror from 'react-codemirror';
import EchartsLine from "@/components/echarts/echartsLine"
import { EchartsAreaChinaMap,options} from "@/config"
import 'codemirror/lib/codemirror.css';
export default class ChinaMap extends React.Component {
  state = {
    option: EchartsAreaChinaMap,
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
      <div className={styles[`china-map`]}>
        <div className={styles[`china-map-left`]}>
          <CodeMirror ref="editorSql" value={this.state.option} onChange={code => this.onloadeChart(code)} options={options} />
        </div>
        <div className={styles[`china-map-right`]}>
          <EchartsLine option={this.state.option} />
        </div>
      </div>
    )
  }
}
