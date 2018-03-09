import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.div`
	background: #ffffff;
	border: 1px solid #eaeaea;
	border-radius: 5px;
	padding-bottom: 24px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`

const Zone = styled.div``

const Top = styled.div`
	display: flex;
	flex-direction: row;
	margin: 18px 16px;
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
		padding-left: 16px;
		transition: 0.1s;
		cursor: pointer;

		:hover {
			background: rgba(26, 186, 237, 0.1);
			border-right: 3px solid #1abaed;
		}
	}
`

const Text = styled.div`
	flex: 1;
`

const Noti = styled.div`
	color: #1abaed;
	margin-right: 16px;
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
	width: 218px;
	background: #f2f1f1;
	margin: 24px auto;
`

class Keywords extends Component {
	constructor(props, context) {
		super(props, context)
	}

	render() {
		const { theme, data } = this.props
		const { dataKeywords, allKeywords, dataGroup } = data

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
						<li>
							<Text>ทั้งหมด</Text>
							<Noti>{allKeywords}</Noti>
						</li>
						{dataKeywords.map((k, index) => (
							<li key={index}>
								<Text>{k.text}</Text>
								<Noti>{k.noti}</Noti>
							</li>
						))}
					</Menu>
					<More>ดูทั้งหมด</More>
				</Zone>
				<Divide />
				<Zone>
					<Top>
						<TopLeft>Group (10)</TopLeft>
					</Top>
					<Menu>
						{dataGroup.map((g, index) => (
							<li key={index}>
								<Text>{g.text}</Text>
								<Noti>{g.noti}</Noti>
							</li>
						))}
					</Menu>
					<More>ดูทั้งหมด</More>
				</Zone>
			</Wrapper>
		)
	}
}

export default Keywords
