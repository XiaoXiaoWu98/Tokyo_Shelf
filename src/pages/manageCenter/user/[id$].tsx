/**
 * @Author: Tokyo
 * @Date: 2021-04-24 14:57:47
 * @LastEditTime: 2021-04-24 15:34:41
 * @LastEditors: Tokyo
 * @Description: 更改请一定备注修改姓名！
 * @FilePath: \learn-umi\src\pages\Home\_layout.tsx
 *
 */
import React, { useState, useMemo } from 'react';
import styles from './index.less';
import { Form, Input, Button, Select } from 'antd';
import { history } from 'umi';
import { Learn1 } from '@/components';
interface Props {}

const { Option } = Select;

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Index = () => {
  const [form] = Form.useForm();
  const [demo, setDemo] = useState<number>(0);
  const url = 'url';
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
    history.push(`/manageCenter/user`);
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
  const updateState = async () => {
    setDemo(demo + 1);
  };

  const reQurl = useMemo(() => <Learn1 url="urlFirst" />, [url]);

  return (
    <div>
      <div className={styles.login}> 动态路由头部</div>
      {reQurl}
    </div>
  );
};
// Index.title = '登录';

export default Index;
