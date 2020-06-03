import React from 'react';
import Child from "@/components/echarts/map"
export default class Map extends React.Component {
  state={
    option: 0,
  }
  public childMethods=()=>{
    this.setState({
      option:1
    })
  }
  public componentDidMount(){
    this.refs.child.getObj()
  }
  public render() {
    return (
      <div>
          <div>{this.state.option}</div>
          <Child ref="child" childMethods={this.childMethods}/>
      </div>
    )
  }
}
