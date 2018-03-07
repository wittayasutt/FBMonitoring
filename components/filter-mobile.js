import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Select, Tabs, Menu, Dropdown, Button } from 'antd'
const Option = Select.Option
const TabPane = Tabs.TabPane
import forEach from 'lodash/forEach'

const Wrapper = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
	}
`

const TabsStyled = styled(Tabs)`
	.ant-tabs-bar {
		margin: 0;
	}

	.ant-tabs-nav {
		display: flex;
	}

	.ant-tabs-nav > .ant-tabs-tab {
		flex: 1;
		border: 1px solid transparent !important;
		border-bottom: 1px solid #e8e8e8 !important;
		text-align: center;
		transition: 0.2s;

		:nth-last-child(1) {
			margin-right: 0 !important;
		}
	}

	.ant-tabs-nav > .ant-tabs-tab-active {
		border: 1px solid #e8e8e8 !important;
	}
`

const TabPaneStyled = styled(TabPane)`
	display: flex;
	flex-direction: row;
	background: #ffffff;
	padding: 16px 10px;
	border: 1px solid #eaeaea;
	border-top: 0;
	border-bottom: 0;
`

const SelectFilter = styled(Select)`
	flex: 1;

	.ant-select-selection-selected-value {
		width: 100%;
		display: flex !important;

		> * {
			:nth-last-child(1) {
				display: block;
			}
		}
	}
`

const SelectSort = styled(Select)`
	margin-left: 8px !important;

	span {
		display: none;
	}

	.ant-select-selection-selected-value {
		padding: 0;
	}
`

const Text = styled.div`
	flex: 1;
`

const Noti = styled.div`
	height: 20px;
	width: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: auto;
	background: #1abaed;
	color: #ffffff;
	font-size: 8px;
	border-radius: 50%;
`

const Divide = styled.div`
	display: none;
	height: 14px;
	width: 1px;
	margin: auto 0 auto 8px;
	background: #e8e8e8;
`

class Filter extends Component {
	constructor(props, context) {
		super(props, context)
	}

	handleFilter = () => {}

	handleSort = () => {}

	render() {
		const { theme } = this.props
		const dataFilter = [
			{ text: 'CIMB', noti: 10 },
			{ text: 'TMB', noti: 10 },
			{ text: 'SCB', noti: 10 },
			{ text: 'KBANK', noti: 10 }
		]

		let all = 0
		forEach(dataFilter, value => (all += value.noti))

		const filter = (
			<SelectFilter defaultValue="ALL" onChange={this.handleFilter}>
				<Option value="ALL" style={{ display: 'flex' }}>
					<Text>ทั้งหมด</Text>
					<Noti>{all}</Noti>
					<Divide />
				</Option>
				{dataFilter.map((f, index) => (
					<Option value={f.text} style={{ display: 'flex' }} key={index}>
						<Text>{f.text}</Text>
						<Noti>{f.noti}</Noti>
						<Divide />
					</Option>
				))}
			</SelectFilter>
		)
		const sort = (
			<SelectSort defaultValue="A-Z" onChange={this.handleSort}>
				<Option value="A-Z" style={{ display: 'flex' }}>
					A-Z
				</Option>
				<Option value="Z-A" style={{ display: 'flex' }}>
					Z-A
				</Option>
			</SelectSort>
		)

		return (
			<Wrapper>
				<TabsStyled type="card">
					<TabPaneStyled tab="Keywords" key="1">
						{filter}
						{sort}
					</TabPaneStyled>

					<TabPaneStyled tab="Group" key="2">
						{filter}
						{sort}
					</TabPaneStyled>

					<TabPaneStyled tab="Saved" key="3">
						Saved
					</TabPaneStyled>
				</TabsStyled>
			</Wrapper>
		)
	}
}

export default Filter
