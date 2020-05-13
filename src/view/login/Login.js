import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { withRouter } from 'react-router-dom'

const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        // offset: 8,
        span: 17,
    },
};

class Login extends Component {
    state = {}

    render() {
        return (
            <div className="login">
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }

    onFinish = values => {
        console.log('Success:', values)
        let { history } = this.props
        history.push({pathname:'/home/index'})
    }

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo)
    }
}

export default withRouter(Login);