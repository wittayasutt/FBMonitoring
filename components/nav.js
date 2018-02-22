import React, { Component } from 'react'
import Head from './head'
import Link from 'next/link'
import styled from 'styled-components'

const NavBar = styled.div`
	height: 120px;
	padding: 32px 0;
	display: flex;
	flex-direction: row;
`

const Left = styled.div`
	flex: 1;
`

const Center = styled.div`
	flex: 1;
`

const Right = styled.div`
	flex: 1;
`

const Hamburger = styled.div`
	height: 56px;
	width: 56px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${props => props.background};
	color: #ffffff;
	border-radius: 50%;
	cursor: pointer;
`

const List = styled.ul`
	display: flex;
	flex-direction: row;

	@media (max-width: 768px) {
		display: none;
	}
`

const Menu = styled.li`
	height: 32px;
	width: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(0, 0, 0, 0);
	color: #ffffff;
	font-size: 18px;
	border-radius: 20px;
	margin: 0 5px;
	cursor: pointer;
	transition: 0.2s;

	:hover {
		background: rgba(0, 0, 0, 0.3);
	}
`

class Nav extends Component {
	constructor(props, context) {
		super(props, context)
	}

	render() {
		const { theme } = this.props

		return (
			<NavBar>
				<Left>
					<Hamburger background={theme.accent}>H</Hamburger>
				</Left>
				<Center />
				<Right>
					<List>
						<Menu>menu</Menu>
						<Menu>menu</Menu>
						<Menu>menu</Menu>
						<Menu>menu</Menu>
						<Menu>menu</Menu>
					</List>
				</Right>
			</NavBar>
		)
	}
}

export default Nav
