/**
 * @Author: Tokyo
 * @Date: 2021-04-24 14:57:47
 * @LastEditTime: 2021-04-24 15:34:41
 * @LastEditors: Tokyo
 * @Description: 更改请一定备注修改姓名！
 * @FilePath: \learn-umi\src\pages\Home\_layout.tsx
 *
 */
import React from 'react';
import styles from './index.less';
import { Form, Input, Button, Select } from 'antd';
import { history } from 'umi';
interface Props {}

const { Option } = Select;

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Index = () => {
  const [form] = Form.useForm();
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
    console.log(values);
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
  return (
    <div className={styles.login}>
      {'登录'}
      <Form form={form} name="control-hooks" onFinish={onFinish}>
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
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
// Index.title = '登录';

export default Index;
