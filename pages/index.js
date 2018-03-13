import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import stylesheet from 'styles/index.scss'
import theme from 'styles/theme'
import withRedux from 'next-redux-wrapper'
import { store } from '../store/configureStore'
import { setTheme, setKeywords, setGroups } from '../actions'

import Head from '../components/head'
import Side from '../components/side'
import Monitoring from '../components/monitoring'

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	background: #fafafa;
`

const Content = styled.div`
	width: 100%;
	margin: 0 auto;
`

const ContentHead = styled.div`
	height: 60px;
	display: flex;
	flex-direction: row;
	align-items: center;
	background: #ffffff;
	font-size: 16px;
	box-shadow: 0 2px 6px 0px rgba(0, 0, 0, 0.1);
`

const ContentHeadHamburger = styled.div`
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

const ContentHeadMenu = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: 0 32px;

	@media screen and (max-width: 1023px) {
		padding: 0 16px;
	}
`

class Index extends Component {
	static getInitialProps({ store }) {
		store.dispatch(setTheme(theme))
		store.dispatch(
			setKeywords([
				{ keyword: 'CIMB', unread: 5 },
				{ keyword: 'TMB', unread: 10 },
				{ keyword: 'SCB', unread: 15 },
				{ keyword: 'KBANK' }
			])
		)
		store.dispatch(
			setGroups([
				{ title: 'กองทุน', keywords: ['A', 'B', 'C'], unread: 20 },
				{ title: 'หุ้น', keywords: ['D', 'E', 'F'], unread: 15 }
			])
		)
	}

	constructor(props, context) {
		super(props, context)

		this.state = {
			open: false
		}
	}

	toggleSideBar = () => {
		const open = !this.state.open
		this.setState({ open })
	}

	render() {
		const { open } = this.state

		return (
			<Wrapper>
				<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
				<Head title="Home" />
				<Side open={open} toggleSideBar={this.toggleSideBar} />
				<Content>
					<ContentHead>
						<ContentHeadHamburger onClick={this.toggleSideBar}>
							<i className="fas fa-bars" />
						</ContentHeadHamburger>
						<ContentHeadMenu>Thanapa Suthisa-ngiam</ContentHeadMenu>
					</ContentHead>
					<Monitoring />
				</Content>
			</Wrapper>
		)
	}
}

export default withRedux(store)(Index)
