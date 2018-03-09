import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Radio } from 'antd'
const RadioButton = Radio.Button
const RadioGroup = Radio.Group
import onClickOutside from 'react-onclickoutside'

const Wrapper = styled.div`
	position: relative;
`

const DropdownToggle = styled.i`
	height: 24px;
	width: 24px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${props => (props.open ? props => props.accent : '#6d6b77')};
	border: 1px solid;
	border-color: ${props => (props.open ? props => props.accent : '#eaeaea')};
	border-radius: 5px;
	transition: 0.2s;
	cursor: pointer;

	:hover {
		color: ${props => props.accent};
		border-color: ${props => props.accent};
	}
`

const DropdownContent = styled.div`
	display: ${props => (props.open ? 'flex' : 'none')};
	flex-direction: column;
	min-width: 250px;
	top: 28px;
	right: 0;
	position: absolute;
	background-color: #ffffff;
	padding: 16px;
	border: 1px solid ${props => props.accent};
	border-radius: 5px;
	z-index: 1;
`

const Title = styled.div`
	margin-bottom: 8px;
`

const Divide = styled.div`
	height: 1px;
	background: #eaeaea;
	margin: 16px 0;
`

const RadioGroupStyle = styled(RadioGroup)`
	display: flex !important;
`

const RadioButtonStyle = styled(RadioButton)`
	flex: 1;
	text-align: center;
`

class Filter extends Component {
	constructor(props, context) {
		super(props, context)

		this.state = {
			open: false
		}
	}

	toggle = () => {
		const open = !this.state.open
		this.setState({ open })
	}

	handleRead = e => {
		console.log(`${e.target.value}`)
	}

	handleSentiment = e => {
		console.log(`${e.target.value}`)
	}

	handleClickOutside = () => {
		this.setState({ open: false })
	}

	disableOnClickOutside = () => {}

	render() {
		const { theme } = this.props
		const { open } = this.state

		return (
			<Wrapper>
				<DropdownToggle accent={theme.accent} open={open} onClick={this.toggle}>
					<i className="fas fa-filter" />
				</DropdownToggle>
				<DropdownContent accent={theme.accent} open={open}>
					<Title>Filter by Read</Title>
					<RadioGroupStyle onChange={this.handleRead} defaultValue="read">
						<RadioButtonStyle accent={theme.accent} value="read">
							Read
						</RadioButtonStyle>
						<RadioButtonStyle accent={theme.accent} value="unread">
							Unread
						</RadioButtonStyle>
					</RadioGroupStyle>
					<Divide />
					<Title>ความหมาย</Title>
					<RadioGroupStyle
						onChange={this.handleSentiment}
						defaultValue="neutral">
						<RadioButtonStyle accent={theme.accent} value="positive">
							Positive
						</RadioButtonStyle>
						<RadioButtonStyle accent={theme.accent} value="neutral">
							Neutral
						</RadioButtonStyle>
						<RadioButtonStyle accent={theme.accent} value="negative">
							Negative
						</RadioButtonStyle>
					</RadioGroupStyle>
				</DropdownContent>
			</Wrapper>
		)
	}
}

export default onClickOutside(Filter)
