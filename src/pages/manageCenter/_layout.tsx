/*
 * @Description: 更改前请留下你的姓名
 * @Author: Tokyo
 * @Date: 2021-04-26 09:36:40
 * @LastEditTime: 2021-06-24 18:06:51
 * @LastEditors: Tokyo
 */
import React, { FC, ReactElement, useEffect, useState } from 'react';
import { Layout, Menu, Breadcrumb, Tabs } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import styles from './_layout.less';
import { history } from 'umi';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { TabPane } = Tabs;

interface Props {
  children: ReactElement;
  location: any;
}

const ManageLayout = ({ children, location }: Props)=> {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [activeKey, setActiveKey] = useState<string>('');
  const [panes, setPanes] = useState<any[]>([]);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const onChange = (activeKey: string) => {
    setActiveKey(activeKey);
    history.replace(`${activeKey}`);
    // this.setState({ activeKey });
  };

  const onEdit = (
    targetKey:
      | string
      | React.MouseEvent<Element, MouseEvent>
      | React.KeyboardEvent<Element>,
    action: 'add' | 'remove',
  ) => {
    const newPanes = [...panes];
    const dataIndex = panes.findIndex((item: any) => item.key === targetKey);
    if (dataIndex > -1) {
      newPanes.splice(dataIndex, 1);
      const index: boolean = newPanes.includes(newPanes[dataIndex - 1]);
      let key: string;
      if (index) {
        key = newPanes[dataIndex - 1].key;
      } else {
        const postIndex = newPanes.includes(newPanes[dataIndex]);
        key = postIndex ? newPanes[dataIndex].key : '/manageCenter';
      }
      history.replace(`${key}`);
      setActiveKey(key);
    }
    setPanes(newPanes);
    // console.log('targetKey', targetKey);
  };

  const clickMenuItem = (data: any) => {
    const { key } = data;
    const newPanes = [...panes];
    const dataIndex = panes.findIndex((item: any) => item.key === key);
    if (dataIndex === -1) {
      newPanes.push({ key: `${key}`, title: `${key}` });
    }
    history.replace(`${key}`);
    // console.log('location', data);
    setActiveKey(key);
    setPanes(newPanes);
  };

  // const goRouter = () => {};

  return (
    <div className={styles.managegeLayout}>
      <Layout className={styles.layout}>
        <Header className={styles.header}>
          <div className={styles.backHome}>返回首页</div>
          <div className={styles.manageCenter}>管理中心</div>
          <div className={styles.personal}>个人中心</div>
        </Header>
        <Layout className={styles.layoutContent}>
          <Sider
            width={200}
            className={styles.contentLeft}
            collapsed={collapsed}
          >
            <Menu
              mode="inline"
              // defaultSelectedKeys={['1']}
              // defaultOpenKeys={['sub1']}
              onClick={clickMenuItem}
              style={{ height: '100%', borderRight: 0 }}
              // onSelect={addTaps}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                <Menu.Item key="/manageCenter/user" title="用户">
                  option1
                </Menu.Item>
                <Menu.Item key="/manageCenter/user/edit" title="用户编辑">
                  option2
                </Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                icon={<NotificationOutlined />}
                title="subnav 3"
              >
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout
            className={[
              `${styles.contentRight}`,
              `${collapsed && styles.collapsed}`,
            ].join(' ')}
          >
            <Tabs
              type="editable-card"
              onChange={onChange}
              activeKey={activeKey}
              onEdit={onEdit}
              hideAdd={true}
            >
              {panes.length > 0
                ? panes.map(
                    (pane: {
                      title: string;
                      key: React.Key;
                      closable: boolean | undefined;
                      content:
                        | boolean
                        | React.ReactChild
                        | React.ReactFragment
                        | React.ReactPortal
                        | null
                        | undefined;
                    }) => (
                      <TabPane
                        tab={pane.title}
                        key={pane.key}

                        // closable={pane.closable}
                      >
                        {pane.content}
                      </TabPane>
                    ),
                  )
                : null}
            </Tabs>
            <div className={styles.breadcrumb}>
              {collapsed ? (
                <MenuUnfoldOutlined
                  onClick={toggle}
                  className={styles.triggle}
                />
              ) : (
                <MenuFoldOutlined onClick={toggle} className={styles.triggle} />
              )}

              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <Content className={styles.childrenContent}>{children}</Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default ManageLayout;
