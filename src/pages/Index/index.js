import React, {PureComponent, Fragment} from 'react'
import router from 'umi/router';
import {Form, Row, Col, Button, Input} from 'antd'

import styles from './index.less'

@Form.create()
class Index extends PureComponent {


  handleClick = () => {
    router.push(`/list/search/?question=1`);
  }



  render() {

    return (
      <Fragment>
        <Form className={styles.form}>
          <div style={{ textAlign: 'center' }}>
            <Input.Search
              placeholder="请输入"
              enterButton="搜索"
              size="large"
              onSearch={this.handleClick}
              style={{ width: 522 }}
            />
          </div>
        </Form>
      </Fragment>
    )
  }

}

export default Index;
