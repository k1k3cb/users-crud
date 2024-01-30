import styled from 'styled-components';

export const StyledTable = styled.table`
	display: flex;
	flex-direction: column;
`;

export const StyledRow = styled.tr`
	box-shadow:
		0 4px 8px 0 rgba(0, 0, 0, 0.2),
		0 6px 20px 0 rgba(0, 0, 0, 0.19);

	height: 50px;
	padding-inline: 20px;
    display: flex;
    align-items: center;
	font-size: 15px;
`;

// export const StyledUserImg = styled.img`
// 	width: 50px;
// 	height: 50px;
// 	object-fit: cover;
// 	border-radius: 50%;
// `;
