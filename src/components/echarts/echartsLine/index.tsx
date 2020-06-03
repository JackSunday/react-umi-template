import React from "react"
import ReactDOM from "react"
import Echarts from "echarts"
import request from 'umi-request';
require("echarts/map/js/china.js");
require("echarts/map/js/province/jiangsu.js");
require('echarts/map/js/world.js')
const style = {
  width: '100%',
  height: '100%'
}
export default class EchartsLine extends React.Component {
  state = {
    myChart:null
  }
  private echartsElement: HTMLDivElement;
  public componentWillReceiveProps(nextProps: any) {
    this.initChart(this.echartsElement, nextProps)
  }
  public componentDidMount() {
    this.initChart(this.echartsElement, this.props)
  }
  private initChart(el: HTMLDivElement, obj: any) {
    console.log(obj, "09")
    this.state.myChart = Echarts.init(el)
    if (obj) {
      const options = obj.option
      console.log(options)
      let a = new Function(options)
      a()
      try {
        this.state.myChart.setOption(option)
        delete window.option
      } catch (error) {

      }
    }
  }
  public componentWillUnmount() {
    this.state.myChart.clear()
  }
  public render() {
    return (
      <div style={style} ref={node => this.echartsElement = node}></div>
    )
  }
}