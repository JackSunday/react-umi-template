import React from 'react';

export default class Child extends React.Component {
  constructor()
  state={
    option: null,
  }
  public getObj(){
    console.log("我是子方法")
  }
  public onClickMethods=()=>{
    this.props.childMethods()
    console.log(this.props)
  }
  public render() {
    return (
      <div>
          <button type="button" onClick={this.onClickMethods}>点击</button>
      </div>
    )
  }
}
