import { Button, Form, Input } from "antd"
import GuestLayout from "../layouts/GuestLayout"

const Register = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values:', values);
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }

    return (
        <GuestLayout>
            <div className="flex flex-col gap-3 justify-center h-screen bg-gray-100">
                <h1 className="text-4xl font-bold mb-5">Register</h1>
                <Form
                    form={form}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}  // Capture failed validation
                    className="w-96"
                >
                    <Form.Item
                        hasFeedback
                        name="firstName"
                        rules={[{ required: true, message: 'Please input your First Name!' }]}
                    >
                        <Input placeholder="First Name" />
                    </Form.Item>
                    <Form.Item
                        hasFeedback
                        name="lastName"
                    >
                        <Input placeholder="Last Name" />
                    </Form.Item>
                    <Form.Item
                        hasFeedback
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        hasFeedback
                        name="email"
                        rules={[
                            { required: true, message: 'Please input your email!' },
                            { type: 'email', message: 'The input is not a valid E-mail!' }
                        ]}
                    >
                        <Input placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        hasFeedback
                        name="password"
                        rules={[
                            { required: true, message: 'Please input your password!' },
                            { min: 8, message: 'Password must be at least 8 characters!' },
                            {
                                pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/,
                                message: 'Password must contain at least one uppercase letter, one digit, and one special character.'
                            }
                        ]}
                    >
                        <Input.Password placeholder="Password" />
                    </Form.Item>
                    <Form.Item
                        hasFeedback
                        name="address"
                    >
                        <Input placeholder="Address" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Register</Button>
                    </Form.Item>
                </Form>
            </div>
        </GuestLayout>
    );
};

export default Register;
