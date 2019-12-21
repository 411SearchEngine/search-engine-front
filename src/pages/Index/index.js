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


  state = {
    keyword: " "
  }

  handleText = (e) => {
    this.setState({
      keyword: e.target.value
    })
  };

  handleSearh = () => {
    const {keyword} = this.state;

    console.log("1231", keyword);
    router.push(`/list/search/articles/${keyword}`);
  };

  test = () => {
    const {dispatch} = this.props;
    dispatch({
      type: 'weather/fetch',
    });
  };

  render() {
    const {keyword} = this.state;
    return (
      <div style={{textAlign: 'center'}} className={styles.input}>
        <Input.Search
          placeholder="请输入"
          enterButton="搜索"
          size="large"
          value={keyword}
          onSearch={this.handleSearh}
          onChange={this.handleText}
          style={{width: 522}}
        />
      </div>
    );
  }
}

export default index;
