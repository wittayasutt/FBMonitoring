import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const WrapperCollapse = styled.div`
	min-height: 100vh;
	z-index: 10;

	@media screen and (max-width: 1023px) {
		position: fixed;
		left: ${props => (props.open ? '-0px' : '-350px')};
		overflow: hidden;
		transition: 0.4s;
	}
`

const Wrapper = styled.div`
	min-height: 100%;
	width: 350px;
	background: ${props => props.background};
	color: #ffffff;

	@media screen and (max-width: 1023px) {
		min-height: 100vh;
	}
`

const Head = styled.div`
	height: 60px;
	display: flex;
	flex-direction: row;
	align-items: center;
	font-size: 18px;
	padding-left: 32px;
	box-shadow: 0 2px 6px 0px rgba(0, 0, 0, 0.1);
`

const HeadMenu = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
`

const HeadHamburger = styled.div`
	display: none;

	@media screen and (max-width: 1023px) {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 60px;
		min-width: 60px;
		cursor: pointer;
	}
`

const Menu = styled.ul`
	margin-top: 40px;

	li {
		height: 45px;
		display: flex;
		align-items: center;
		font-size: 16px;
		padding-left: 32px;
		transition: 0.1s;
		cursor: pointer;

		:hover {
			background: rgba(0, 0, 0, 0.3);
		}

		:active {
			background: rgba(0, 0, 0, 0.1);
		}

		i {
			padding-right: 5px;
		}
	}
`

class Side extends Component {
	constructor(props, context) {
		super(props, context)
	}

	render() {
		const { theme, open, toggleSideBar } = this.props

		return (
			<WrapperCollapse open={open}>
				<Wrapper background={theme.dark}>
					<Head>
						<HeadMenu>FB Group Monitoring</HeadMenu>
						<HeadHamburger onClick={toggleSideBar}>
							<i className="fas fa-times" />
						</HeadHamburger>
					</Head>
					<Menu>
						<li>
							<i className="fas fa-chart-bar" />Real-Time Monitoring
						</li>
						<li>
							<i className="fas fa-cog" />Setting
						</li>
					</Menu>
				</Wrapper>
			</WrapperCollapse>
		)
	}
}

export default Side
