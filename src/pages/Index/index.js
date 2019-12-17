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
      </div>
    );
  }
}

export default index;
