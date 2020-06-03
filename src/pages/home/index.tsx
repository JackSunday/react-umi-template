import React from 'react';
import styles from './index.less';
import { history } from 'umi';
export default class Home extends React.Component {
  
  componentDidMount(){
    setTimeout(()=>{
        history.push("/map/chinaMap")
    },3000)
  }  
  render() {
    return (
      <div className={styles.home}>
          
      </div>
    )
  }
}
