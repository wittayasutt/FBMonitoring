import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.div`
	width: 258px;
	margin-top: 48px;
	border-right: 1px solid #f2f1f1;
`

const Zone = styled.div``

const Top = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 14px;
`

const TopLeft = styled.div`
	flex: 1;

	i {
		margin-right: 8px;
	}
`

const TopRight = styled.div``

const Sort = styled.div`
	height: 24px;
	width: 72px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 11px;
	color: #6d6b77;
	margin-right: 8px;
	border: 1px solid #f2f1f1;
	border-radius: 3px;
	transition: 0.2s;
	cursor: pointer;

	:hover {
		color: #ffffff;
		background: #1abaed;
		border: 1px solid #1abaed;
	}
`

const Menu = styled.ul`
	li {
		height: 40px;
		width: 100%;
		display: flex;
		align-items: center;
		padding-left: 8px;
		transition: 0.1s;
		cursor: pointer;

		:hover {
			background: rgba(26, 186, 237, 0.1);
			border-right: 3px solid #1abaed;
		}
	}
`

const Noti = styled.div`
	height: 24px;
	width: 24px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 16px;
	font-size: 12px;
	background: #1abaed;
	color: #ffffff;
	border-radius: 50px;
	transition: 0.2s;
	cursor: pointer;
`

const More = styled.div`
	height: 26px;
	width: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 40px auto auto;
	font-size: 12px;
	border: 1px solid #f2f1f1;
	border-radius: 50px;
	transition: 0.2s;
	cursor: pointer;

	:hover {
		color: #ffffff;
		background: #1abaed;
		border: 1px solid #1abaed;
	}
`

const Divide = styled.div`
	height: 1px;
	width: 242px;
	background: #f2f1f1;
	margin: 24px auto;
`

class Filter extends Component {
	constructor(props, context) {
		super(props, context)
	}

	render() {
		const { theme } = this.props

		return (
			<Wrapper>
				<Zone>
					<Top>
						<TopLeft>Keywords (20)</TopLeft>
						<TopRight>
							<Sort>เรียงตามชื่อ</Sort>
						</TopRight>
					</Top>
					<Menu>
						<li>ทั้งหมด</li>
						<li>
							CIMB<Noti>10</Noti>
						</li>
						<li>
							TMB<Noti>10</Noti>
						</li>
						<li>
							SCB<Noti>10</Noti>
						</li>
						<li>
							KBANK<Noti>10</Noti>
						</li>
					</Menu>
					<More>ดูทั้งหมด</More>
				</Zone>
				<Divide />
				<Zone>
					<Top>
						<TopLeft>Group</TopLeft>
					</Top>
					<Menu>
						<li>ธนาคาร</li>
						<li>กองทุน</li>
						<li>หุ้น</li>
					</Menu>
					<More>ดูทั้งหมด</More>
				</Zone>
				<Divide />
				<Zone>
					<Top>
						<TopLeft>
							<i className="fas fa-bookmark" />Saved
						</TopLeft>
					</Top>
				</Zone>
			</Wrapper>
		)
	}
}

export default Filter
