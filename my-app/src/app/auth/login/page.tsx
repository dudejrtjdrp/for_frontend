'use client'

import { useForm } from 'react-hook-form'
import { Button, Checkbox, Form, Grid, Input, theme, Typography } from 'antd'
import { LockOutlined, MailOutlined } from '@ant-design/icons'
import Image from 'next/image'
import {useRouter} from 'next/navigation'
import AuthLayout from '../components/AuthLayout'
import { getStyles } from '../styles/commonStyles'

interface FormValue {
  email: string
  password: string
  remember: boolean
}

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const submitForm = (data: any) => {
    console.log(data)
  }

  const router = useRouter();
  
  const screens = Grid.useBreakpoint()
  const { token } = theme.useToken()

  const styles = getStyles(token, screens)

  const { Text, Title, Link } = Typography


  const onFinish = (values:FormValue) => {
    console.log('Received values of form: ', values)
    router.push('/dashboard/index')
  }
  // const onSignUp = () => {
  //   router.push('/auth/signup')
  // }
  
  // const onFindId = () => {
  //   router.push('/auth/find-password')
  // }

  // const onFindPassword = () => {
  //   router.push('/auth/find-id')
  // }

  if (process.env.NODE_ENV === 'development') {
      const warn = console.warn
      console.warn = (...args) => {
        if (
          typeof args[0] === 'string' &&
          args[0].includes('[antd: compatible]')
        ) {
          console.log(args)
          return // antd 호환성 경고는 무시
        }
        warn(...args)
        console.log(...args)
        console.log(console)
      }
    }

  return (
    <AuthLayout>
        <Form
          name="normal_login"
          initialValues={{
            remember: false,
          }}
          onFinish={onFinish}
          layout="vertical"
          requiredMark="optional"
        >
          <Form.Item
            style={styles.form.item}
            name="email"
            rules={[
              {
                type: 'email',
                required: true,
                message: '올바른 이메일을 입력해주세요',
              },
            ]}
          >
            <Input
              style={styles.form.input}
              prefix={<MailOutlined />}
              placeholder="이메일"
            />
          </Form.Item>
          <Form.Item
            style={styles.form.item}
            name="password"
            rules={[
              {
                required: true,
                message: '비밀번호를 입력해주세요',
              },
            ]}
          >
            <Input.Password
              style={styles.form.input}
              prefix={<LockOutlined />}
              type="password"
              placeholder="비밀번호"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" noStyle valuePropName="checked" >
              <Checkbox>이메일 기억하기</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item style={{ marginBottom: '0px' }}>
            <Button block="true" type="primary" htmlType="submit">
              로그인
            </Button>
            <div style={styles.footer}>
              <Link href="/auth/signup">회원가입</Link>
              <div>·</div>
              <Link href="/auth/find-id">내 계정 찾기</Link>
            </div>
          </Form.Item>
        </Form>
    </AuthLayout>
  )
}
