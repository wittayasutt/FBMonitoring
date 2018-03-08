import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.div`
	height: 32px;
	width: 212px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background: #f4f4f4;
	padding: 4px;
	border-radius: 50px;
`

const SwitchButton = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 24px;
	font-size: 12px;
	background: ${props =>
		props.select ? props => props.active : 'transparent'};
	color: ${props => (props.select ? '#ffffff' : 'rgba(0, 0, 0, 0.3)')};
	border-radius: 50px;
	transition: 0.2s;
	cursor: pointer;
`

class Switch extends Component {
	constructor(props, context) {
		super(props, context)
	}

	render() {
		const { theme, handleSwitch, select } = this.props

		return (
			<Wrapper>
				<SwitchButton
					onClick={() => handleSwitch('all')}
					select={select === 'all'}
					active={theme.accent}>
					All
				</SwitchButton>
				<SwitchButton
					onClick={() => handleSwitch('saved')}
					select={select === 'saved'}
					active={theme.accent}>
					Saved
				</SwitchButton>
			</Wrapper>
		)
	}
}

export default Switch
