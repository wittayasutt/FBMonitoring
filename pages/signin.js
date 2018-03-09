import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import stylesheet from 'styles/index.scss'
import Head from '../components/head'
import { Form, Input, Button } from 'antd'
const FormItem = Form.Item

const Wrapper = styled.div`
	min-height: 100vh;
	min-width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: ${props => props.background};
	padding: 16px;
`

const Logo = styled.div`
	height: 100px;
	width: 100px;
	background: #eaeaea;
	border-radius: 50%;
`

const Content = styled.div`
	height: 428px;
	width: 476px;
	display: flex;
	flex-direction: column;
	background: #ffffff;
	margin-top: 44px;
	border-radius: 10px;
	padding: 56px;

	h2 {
		font-size: 32px;
		margin-bottom: 32px;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
		padding: 16px;

		h2 {
			font-size: 24px;
		}
	}
`

const FormStyle = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
`

const FormInput = styled(FormItem)`
	input {
		height: 45px;
		font-size: 16px !important;
	}

	.ant-form-explain {
		margin-top: 1px;
	}
`

const FormSubmit = styled(FormItem)`
	flex: 1;
	display: flex !important;
	flex-direction: column;
	justify-content: flex-end;
	margin-bottom: 0 !important;
	text-align: center;
`

const ButtonSubmit = styled(Button)`
	min-height: 45px;
	width: 100%;
	border-radius: 50px !important;
`

class SignIn extends Component {
	static getInitialProps({ req }) {
		// Ensures material-ui renders the correct css prefixes server-side
		let userAgent
		if (process.browser) {
			userAgent = navigator.userAgent
		} else {
			userAgent = req.headers['user-agent']
		}

		let theme = {}
		theme.primary = '#71aeef'
		theme.accent = '#1abaed'
		theme.dark = '#2f2c3d'
		theme.light = '#f2f1f1'

		return { userAgent, theme }
	}

	constructor(props, context) {
		super(props, context)
	}

	handleSubmit = e => {
		e.preventDefault()
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values)
			}
		})
	}

	render() {
		const { userAgent, theme, form } = this.props
		const { getFieldDecorator } = form

		return (
			<Wrapper background={theme.dark}>
				<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
				<Head title="Home" />
				<Logo />
				<Content>
					<h2>Sign In</h2>
					<FormStyle onSubmit={this.handleSubmit} className="login-form">
						<FormInput>
							{getFieldDecorator('email', {
								rules: [
									{
										type: 'email',
										message: 'The input is not valid E-mail!'
									},
									{
										required: true,
										message: 'Please input your E-mail!'
									}
								]
							})(<Input placeholder="Email" />)}
						</FormInput>
						<FormInput>
							{getFieldDecorator('password', {
								rules: [
									{ required: true, message: 'Please input your Password!' }
								]
							})(<Input type="password" placeholder="Password" />)}
						</FormInput>
						<FormSubmit>
							<ButtonSubmit
								type="primary"
								htmlType="submit"
								className="login-form-button">
								Login
							</ButtonSubmit>
							<a className="login-form-forgot" href="#">
								Forgot password
							</a>
						</FormSubmit>
					</FormStyle>
				</Content>
			</Wrapper>
		)
	}
}

export default Form.create({})(SignIn)
