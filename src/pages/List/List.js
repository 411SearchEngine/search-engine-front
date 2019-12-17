import React, {Component,Fragment} from 'react';
import router from 'umi/router';
import {connect} from 'dva';
import { Input, Card, Select, List, Tag, Icon, Avatar, Row, Col, Button } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import moment from 'moment';
import styles from './Articles.less';

@connect(({weather, loading}) => ({
  ...weather,
  submitting: loading.models.weather,
}))
class SearchList extends Component {

  state = {
    keyword: "",
    page: 0,
    size: 1000
  }


  handleText = (e) => {
    this.setState({
      keyword: e.target.value
    })
  };

  handleFormSubmit = () => {
    const {keyword, page, size} = this.state;
    const submitData = {keyword, page, size}

    const {dispatch} = this.props;
    dispatch({
      type: 'weather/fetch',
      payload: {
        submitData,
      },
    });
  };

  render() {
    const {keyword} = this.state;
    const {searchModels} = this.props;

    const ListContent = ({ data: { content, public_date, type,title, source_url } }) => (
      <div className={styles.listContent}>
        <div className={styles.description}>{title}</div>
        <div className={styles.video}>{type=="video"?"录像":"历史记录"}</div>
        <div className={styles.extra}>
          <a href={source_url}>{content}</a> 地址
          <a href={source_url}>{source_url}</a>
          <em>{public_date!==null?moment(public_date).format('YYYY-MM-DD HH:mm'):"暂无时间详情"}</em>
        </div>
      </div>
    );

    const mainSearch = (
      <div style={{textAlign: 'center', marginTop: '80px'}}>
        <Input.Search
          placeholder="请输入"
          enterButton="搜索"
          size="large"
          onSearch={this.handleFormSubmit}
          style={{width: 522}}
          value={keyword.trim()}
          onChange={this.handleText}
        />
      </div>
    );

    return (
      <PageHeaderWrapper
        content={mainSearch}
        searchModels={searchModels}
      >
        <Fragment>
          <Card
            style={{ marginTop: 24 }}
            bordered={false}
            bodyStyle={{ padding: '8px 32px 32px 32px' }}
          >
            <List
              size="large"
              rowKey="id"
              itemLayout="vertical"
              dataSource={searchModels}
              renderItem={item => (
                <List.Item
                  key={item.id}
                  extra={<div className={styles.listItemExtra} />}
                >
                  <List.Item.Meta
                    title={
                      <a className={styles.listItemMetaTitle} href={item.href}>
                        {item.title}
                      </a>
                    }
                  />
                  <ListContent data={item} />
                </List.Item>
              )}
            />
          </Card>
        </Fragment>
      </PageHeaderWrapper>

    );
  }
}

export default SearchList;
