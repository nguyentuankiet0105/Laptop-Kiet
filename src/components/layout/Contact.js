import { Button, Form, Input, Row, Col } from 'antd';
import {
  EnvironmentOutlined,
  WhatsAppOutlined,
  HistoryOutlined,
  MailOutlined,
} from '@ant-design/icons';
import React from 'react';
import Support from '../common/Support/index';

const { TextArea } = Input;

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="contact__Form">
            <Form
              layout={'vertical'}
              name="basic"
              initialValues={{
                remember: true,
              }}
            >
              <h1>CONTACT US</h1>
              <p>
                We love hearing from you, our Shop customers.
                <br />
                Please contact us and we will make sure to get back to you as soon as we possibly
                can.
              </p>
              <Form.Item>
                <Form.Item
                  label="Your Name"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your name!',
                    },
                  ]}
                  style={{ display: 'inline-block', width: 'calc(50% )', fontWeight: '600' }}
                >
                  <Input className="contact__Form--input" placeholder="Enter your email..." />
                </Form.Item>
                <Form.Item
                  label="Your Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your email!',
                    },
                  ]}
                  style={{ display: 'inline-block', width: 'calc(50% )', fontWeight: '600' }}
                >
                  <Input className="contact__Form--input" placeholder="Enter your email..." />
                </Form.Item>
              </Form.Item>
              <Form.Item
                label="Your Phone Number"
                name="phone number"
                rules={[
                  {
                    required: true,
                    message: 'Please input your phone number!',
                  },
                ]}
                style={{ fontWeight: '600' }}
              >
                <Input className="contact__Form--input" placeholder="Enter your phone number..." />
              </Form.Item>
              <Form.Item
                label="What’s on your mind? "
                name="mind"
                rules={[
                  {
                    required: true,
                    message: 'Please input your mind!',
                  },
                ]}
                style={{ fontWeight: '600' }}
              >
                <TextArea
                  rows={10}
                  placeholder="Jot us a note and we’ll get back to you as quickly as possible"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="contact__Content">
            <Form layout={'vertical'} name="basic">
              <Form.Item>
                <h3>
                  <EnvironmentOutlined /> Address:
                </h3>
                <p>1234 Street Adress City Address, 1234</p>
                <br />
                <h3>
                  <WhatsAppOutlined /> Phone:
                </h3>
                <p>(00)1234 5678</p>
                <br />
                <h3>
                  <HistoryOutlined /> We are open:
                </h3>
                <p>
                  Monday - Thursday: 9:00 AM - 5:30 PM <br /> Friday 9:00 AM - 6:00 PM <br />{' '}
                  Saturday: 11:00 AM - 5:00 PM
                </p>
                <br />
                <h3>
                  <MailOutlined /> E-mail:
                </h3>
                <a>shop@email.com</a>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <Support />
    </>
  );
};
export default Contact;
