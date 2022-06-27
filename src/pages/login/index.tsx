/*
 * @Description: 更改前请留下你的姓名
 * @Author: Tokyo
 * @Date: 2021-04-24 14:30:36
 * @LastEditTime: 2021-10-25 14:47:45
 * @LastEditors: Please set LastEditors
 * @FilePath: /Tokyo_Shelf/src/pages/login/index.tsx
 */
import React,{ useEffect, useState } from 'react';
import styles from './index.less';
import { Form, Input, Button, Select } from 'antd';
import { history } from 'umi';
// import { Learn1, Learn2 } from '@/components';

// interface Props {}

const { Option } = Select;

const tailLayout = {
  wrapperCol: { offset: 0, span: 8 },
  labelCol: { span: 2, offset: 6 },
};

const Index = () => {
  const [form] = Form.useForm();
  const [flag, setFlag] = useState<boolean>(false);
  const arrInitail = [
    { value: 'a', key: 1 },
    { value: 'b', key: 2 },
    { value: 'c', key: 3 },
  ];
  const [arr, setArr] = useState(arrInitail);
  useEffect(() => {
    console.log('log注册');

    return () => {
      console.log('login注销');
    };
  }, []);
  // console.log('loginrender');
  useEffect(() => {
    console.log('注册组件影响 login');
    return () => {
      console.log('后续影响 login');
    };
  }, [flag]);
  console.log('运行login');
  const onGenderChange = (value: string) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({ note: 'Hi, man!' });
        return;
      case 'female':
        form.setFieldsValue({ note: 'Hi, lady!' });
        return;
      case 'other':
        form.setFieldsValue({ note: 'Hi there!' });
    }
  };

  const onFinish = (values: any) => {
    // console.log(values);
    history.push(`/manageCenter/user/Edit`);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };
  console.log('arr:', arr);
  return (
    <div className={styles.login}>
      {'登录'}
      <div
        style={{
          width: '50px',
          borderRadius: 5,
          backgroundColor: '#f40',
          color: 'white',
        }}
        onClick={() => setFlag(!flag)}
      >
        点击
      </div>
      {arr.map((obj) => {
        return <div key={obj.key}>{obj.value}</div>;
      })}
      {/* <Learn2 /> */}
      {/* <Form
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        {...tailLayout}
      >
        <Form.Item label="账号">
          <Input placeholder="input placeholder" autoComplete="off" />
        </Form.Item>
        <Form.Item label="密码">
          <Input
            type="password"
            placeholder="input placeholder"
            autoComplete="off"
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
          <div style={{ display: 'flex', justifyContent: 'space-evenly ' }}>
            <Button
              type="primary"
              htmlType="submit"

              // style={{ marginRight: '10px' }}
            >
              Login
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              // style={{ marginLeft: '10px' }}
            >
              cancel
            </Button>
          </div>
        </Form.Item>
      </Form> */}
    </div>
  );
};
// Index.title = '登录';
// const a = React.createElement(Index);
// console.log('index', a);
export default Index;
