import React, { PureComponent } from 'react';
import { Input } from 'antd';
import { router } from 'umi';
import styles from './index.less';

class index extends PureComponent {
  handleSearh = () => {
    router.push('/list/search');
  };

  render() {
    return (
      <div style={{ textAlign: 'center' }} className={styles.input}>
        <Input.Search
          placeholder="请输入"
          enterButton="搜索"
          size="large"
          onSearch={this.handleSearh}
          style={{ width: 522 }}
        />
      </div>
    );
  }
}

export default index;
