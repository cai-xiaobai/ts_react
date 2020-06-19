import React from 'react';
import { Form, Input, Button } from 'antd';
import logo from '../logo.svg';
// import 'antd/dist/antd.dark.css';
import { RouteComponentProps } from 'react-router-dom';
import '../assets/css/Login.css'

interface IProps extends RouteComponentProps {}

const Login = (props: IProps) => {

    // const [submitParams, setSubmitParams] = React.useState<LoginParams>({
    //     userName: '',
    //     password: ''
    //   })

    const layout = {
        labelCol: { span: 8},
        wrapperCol: { span: 16},
    };

    const tailLayout = {
        wrapperCol: { offset: 8, span: 16},
    };

    interface userVo {
        [name: string]: string
    }
    
    const onFinish = (values: userVo) => {
        let data = {username: values.username,password: values.password}
        window.localStorage.setItem('USER_INFO', JSON.stringify(data))

        setTimeout(() => {
          props.history.push('/app')
        }, 100)
    }

    const onFinishFailed = (values: object) => {}

    //渲染
        return(
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Form
                {...layout}
                name="basic"
                className="form"
                initialValues={{ remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required:true, message: ' Please input your username!'}]}
                    style={{color:"white"}}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required:true, message: ' Please input your password!'}]}
                >
                    <Input.Password />
                </Form.Item>
    
                <Form.Item
                    {...tailLayout}
                >
                    <Button type="primary" htmlType="submit">
                        登录
                    </Button>
                </Form.Item>
            </Form>
            </header>
        )
}

export default Login