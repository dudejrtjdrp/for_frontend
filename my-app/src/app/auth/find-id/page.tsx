'use client'

import { useState } from 'react'
import AuthLayout from '../components/AuthLayout'
import { Button, Form, Input, theme, Grid } from 'antd'
import { getStyles } from '../styles/commonStyles'
import { LockOutlined, MailOutlined } from '@ant-design/icons'
import { validateBusinessNumber } from '../utils/validateBusinessNumber'

interface FormValue {
  email: string
  businessNumber: string
}

export default function FindId() {
  const [form] = Form.useForm()
  const screens = Grid.useBreakpoint()
  const { token } = theme.useToken()

  const styles = getStyles(token, screens)
  const [value, setValue] = useState('')
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/[^0-9]/g, '') // 숫자만
    if (input.length > 3 && input.length <= 5) {
      input = input.slice(0, 3) + '-' + input.slice(3)
    } else if (input.length > 5) {
      input =
        input.slice(0, 3) + '-' + input.slice(3, 5) + '-' + input.slice(5, 10)
    }
    console.log(input)
    setValue(input)
  }

  const onFinish = (values: FormValue) => {
    console.log('Received values of form: ', values)
  }

  return (
    <AuthLayout>
      <Form
        form={form}
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
          label="사업자등록번호"
          name="businessNumber"
          rules={[
            { required: true, message: '사업자등록번호를 입력해주세요' },
            // {
            //   pattern: /^\d{3}-\d{2}-\d{5}$/,
            //   message: '형식이 올바르지 않습니다. (예: 123-45-67890)',
            // },
            { validator: validateBusinessNumber },
          ]}
        >
          <Input
            placeholder="123-45-67890"
            // value={value}
            // onChange={handleChange}
            maxLength={12}
          />
        </Form.Item>
        <Form.Item></Form.Item>

        <Form.Item shouldUpdate style={{ marginBottom: '0px' }}>
          {() => {
            const hasErrors = form
              .getFieldsError()
              .some(({ errors }) => errors.length > 0)
            const allTouched = form.isFieldsTouched(true)
            return (
              <Button
                block="true"
                type="primary"
                htmlType="submit"
                disabled={!allTouched || hasErrors}
              >
                비밀번호 찾기
              </Button>
            )
          }}
        </Form.Item>
      </Form>
    </AuthLayout>
  )
}
