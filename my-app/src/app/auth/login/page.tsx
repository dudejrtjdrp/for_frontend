"use client";

import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Checkbox, Form, Grid, Input, theme, Typography } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import Image from 'next/image'


interface FormValue {
  email: string;
  password: string;
}



export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data: any) => {
    console.log(data);
  };

  console.log(errors);
  const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Text, Title, Link } = Typography;

const { token } = useToken();
  const screens = useBreakpoint();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const styles = {
    section: {
      alignItems: "center",
      backgroundColor: token.colorBgContainer,
      // position: 'fixed',
      display: "flex",
      // height: screens.sm ? "100vh" : "auto",
      // minHeight: '90vh',
      padding: "0px",
      height: "100%"
      // padding: screens.md ? `${token.sizeXXL}px 0px` : "0px"
    },
    container: {
      margin: "0 auto",
      // padding: 0,
      padding: screens.md ? `${token.paddingXL}px` : `${token.sizeXXL}px ${token.padding}px`,
      width: "380px",
    },
    footer: {
      marginTop: token.marginLG,
      textAlign: "center",
      width: "100%",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: "10px"
    },
    forgotPassword: {
      float: "right"
    },
    header: {
      marginBottom: token.marginXL,
      // height:'100%'
    },
    text: {
      color: token.colorTextSecondary
    },
    title: {
      fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3
    },
    logo : {
      width: "auto" ,
      height : "24px"
    }
  };

    return (
 <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.header}>
          <Image sizes="100vw" style={{width: styles.logo.width ,height: styles.logo.height,}} width={500} height={300} src="/logo-toss-shopping.png" alt="토스쇼핑로고"/>
          {/* <Title style={styles.title}>로그인</Title> */}
          <Text style={styles.text}>
            
          </Text>
        </div>
        <Form
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          layout="vertical"
          requiredMark="optional"
        >
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "올바른 이메일을 입력해주세요",
              },
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="이메일"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "비밀번호를 입력해주세요",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="비밀번호"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember"  noStyle>
              <Checkbox >이메일 기억하기</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item style={{ marginBottom: "0px" }}>
            <Button block="true" type="primary" htmlType="submit">
              로그인
            </Button>
            <div style={styles.footer}>
              <Link href="">회원가입</Link>
              <div>·</div>
              <Link href="">내 계정 찾기</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </section>
    );
}