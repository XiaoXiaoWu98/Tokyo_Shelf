/*
 * @Description: 更改前请留下你的姓名
 * @Author: Tokyo
 * @Date: 2021-04-26 11:52:56
 * @LastEditTime: 2021-10-06 20:07:51
 * @LastEditors: Tokyo
 * @FilePath: /Tokyo_Shelf/src/pages/manageCenter/user/[id$]/index.tsx
 */
import { CreateUser } from '@/interface';
import { useEffect, useState } from 'react';
import { useParams } from 'umi';
import { Form, Input, InputNumber, Button, Radio, DatePicker } from 'antd';
import { NavigationHelpButtonViewModel } from 'cesium';
// import Img from '/assets/'
interface IProps {}

const Index = (props: IProps) => {
  const [form] = Form.useForm();
  const [email, setEmail] = useState<string>('');
  const [test, setTest] = useState<string>('');
  const [timerNumber, setTimerNumber] = useState<number | null>(null);
  useEffect(() => {
    // (async () => {
    //   await CreateUser({ name: '王德发', age: 24 }).then((res) => {
    //     console.log('res', res.data);
    //     // console.log('res', res);
    //   });
    // })();
    return () => {};
  }, []);

  useEffect(() => {
    // (async () => {
    // console.log('Tokyo');
    // const newTest = test + 'test';
    // setTest(newTest)

    return () => {};
  }, [test]);

  useEffect(() => {
    (async () => {
      // console.log('test测试');
      const newTest = test + 'test';
      setTest(newTest);
    })();
    return () => {};
  }, [email]);

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8 },
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  const validateMessages = {
    required: '${label}是必填项!',
    types: {
      email: '请输入正确的${label}!',
      number: '不是合理的${label}!',
    },
    number: {
      range: '${label} 必须在 ${min}岁 到 ${max}岁之间',
    },
  };

  const checkPassword = async (
    rule: any,
    value: string,
    warning: (arg0?: string | undefined) => void,
  ) => {
    if (!value) warning();
    if (value && !/^[1-9]\d{10}$/.test(value)) warning('请输入正确的联系方式!');
    if (!value) warning();
    if (value && !/^[1-9]\d{10}$/.test(value)) warning('请输入正确的联系方式!');
  };

  const mobileRules = async (
    _rules: any,
    value: string,
    warning: (arg0?: string | undefined) => void,
  ) => {
    if (!value) warning();
    if (value && !/^[1-9]\d{10}$/.test(value)) warning('请输入正确的联系方式!');
  };

  const emailChange = (e: { target: { value: string } }) => {
    const {
      target: { value },
    } = e;

    setEmail(value);
    const fn = () => {
      console.log(e.target.value);
      setTimerNumber(null);
    };
    if (timerNumber != null) {
      clearTimeout(timerNumber);
      console.log('timer', timerNumber);
    }
    const timer = window.setTimeout(fn, 500); // 简化写法
    setTimerNumber(timer);
  };

  return (
    <Form
      {...layout}
      name="user"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name="loginAccount"
        label="登陆账号"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="登陆密码"
        rules={[{ validator: checkPassword, required: true }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="confirmPassword"
        label="确认密码"
        rules={[{ validator: checkPassword, required: true }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item name="name" label="姓名" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="date" label="日期" rules={[{ required: true }]}>
        <DatePicker />
      </Form.Item>

      <Form.Item name="sex" label="性别" rules={[{ required: true }]}>
        <Radio.Group>
          <Radio value={0}>男</Radio>
          <Radio value={1}>女</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item name="email" label="邮箱" rules={[{ type: 'email' }]}>
        <Input onChange={emailChange} />
      </Form.Item>
      <Form.Item
        name="age"
        label="年龄"
        rules={[{ type: 'number', min: 0, max: 99 }]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name="phone"
        label="电话号码"
        rules={[{ validator: mobileRules, type: 'email' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="introduction" label="自我介绍">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Index;
