import React, {PureComponent} from 'react';
import {Input, Button} from 'antd';
import {router} from 'umi';
import styles from './index.less';
import {connect} from "dva";


@connect(({weather, loading}) => ({
  ...weather,
  submitting: loading.effects['weather/login']
}))
class index extends PureComponent {

  componentDidMount() {

  }

  handleSearh = () => {
    router.push('/list/search');
  };

  test = () => {
    const {dispatch} = this.props;
    console.log(this.props);
    console.log("1111111111111111111111")
    console.log("2")
    dispatch({
      type: 'weather/fetch',
    });
  };

  render() {
    return (
      <div style={{textAlign: 'center'}} className={styles.input}>
        <Input.Search
          placeholder="请输入"
          enterButton="搜索"
          size="large"
          onSearch={this.handleSearh}
          style={{width: 522}}
        />
        <Button onClick={this.test}>test</Button>
      </div>
    );
  }
}

export default index;
