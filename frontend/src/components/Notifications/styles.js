import styled, { css } from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { lighten } from 'polished';

export const Container = styled.div`
	position: relative;
`;

export const Badge = styled.button`
	background: none;
	border: 0;
	position: relative;
	${props =>
		props.hasUnread &&
		css`
			&::after {
				position: absolute;
				right: 0;
				top: 0;
				width: 8px;
				height: 8px;
				background: #ff892e;
				content: '';
				border-radius: 50%;
			}
		`}
`;

export const NotificationList = styled.div`
	position: absolute;
	width: 260px;
	left: calc(50% - 130px);
	top: calc(100% + 30px);
	background: rgba(0, 0, 0, 0.6);
	border-radius: 4px;
	padding: 15px 5px;
	display: ${props => (props.visible ? 'block' : 'none')};
	&::before {
		content: '';
		position: absolute;
		left: calc(50% - 20px);
		top: -20px;
		width: 0;
		height: 0;
		border-left: 20px solid transparent;
		border-right: 20px solid transparent;
		border-bottom: 20px solid rgba(0, 0, 0, 0.6);
	}
`;

export const Scroll = styled(PerfectScrollbar)`
	max-height: 260px;
	padding: 5px 15px;
`;

export const Notification = styled.div`
	color: #fff;
	& + div {
		margin-top: 15px;
		padding-top: 15px;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
	}
	p {
		font-size: 13px;
		line-height: 18px;
	}
	time {
		display: block;
		font-size: 12px;
		opacity: 0.6;
		margin-bottom: 5px;
	}
	button {
		font-size: 12px;
		border: 0;
		background: none;
		color: ${lighten(0.2, '#7159c1')};
	}
	${props =>
		props.unread &&
		css`
			&::after {
				content: '';
				display: inline-block;
				width: 8px;
				height: 8px;
				background: #ff892e;
				border-radius: 50%;
				margin-left: 10px;
			}
		`}
`;
