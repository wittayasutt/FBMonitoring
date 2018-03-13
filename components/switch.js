import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { connect } from 'react-redux'

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

		this.state = {
			select: 'all'
		}
	}

	handleSwitch = select => {
		this.setState({ select })
	}

	render() {
		const { theme } = this.props
		const { select } = this.state

		return (
			<Wrapper>
				<SwitchButton
					onClick={() => this.handleSwitch('all')}
					select={select === 'all'}
					active={theme.accent}>
					All
				</SwitchButton>
				<SwitchButton
					onClick={() => this.handleSwitch('saved')}
					select={select === 'saved'}
					active={theme.accent}>
					Saved
				</SwitchButton>
			</Wrapper>
		)
	}
}

const mapStateToProps = ({ theme }) => ({ theme })

export default connect(mapStateToProps)(Switch)
