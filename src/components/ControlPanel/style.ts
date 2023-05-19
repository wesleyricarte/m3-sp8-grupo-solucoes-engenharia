import styled from "styled-components";
import { RiDashboardLine } from "react-icons/ri";
import { AiFillCaretDown } from "react-icons/ai";
import { VscTools } from "react-icons/vsc";
import { MdOutlineLogout } from "react-icons/md";

const DivPanel = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px;
	background-color: var(--color-grey-100);

	min-width: 291px;
	height: 100vh;
	position: relative;

	@media (max-width: 800px) {
		width: 40%;
		padding: 10px;
	}

	/* position: absolute;
    left: 0;
    top: 0; */
`;

const ImgLogo = styled.img`
	width: 100%;
	height: 80px;
	margin: 0 auto;

	@media (max-width: 800px) {
		max-height: 60px;
	}
	@media (max-width: 400px) {
		max-height: 50px;
	}
`;

const DivUser = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	gap: 10px;
	height: 80px;
	border-bottom: 2px solid var(--color-grey-300);

	@media (max-width: 800px) {
		height: 50px;
	}
	@media (max-width: 400px) {
		gap: 5px;
	}
`;
const ImgUser = styled.img`
	border-radius: 50%;
	width: 50px;
	height: 50px;

	@media (max-width: 800px) {
		width: 25px;
		height: 25px;
	}
`;

const SpanUser = styled.span`
	color: var(--color-grey-600);
	font-size: 18px;

	@media (max-width: 800px) {
		font-size: 12px;
	}
	@media (max-width: 500px) {
		font-size: 10px;
		word-break: break-all;
	}
	@media (max-width: 450px) {
		font-size: 8px;
		word-break: break-all;
		width: 100%;
	}
`;

const DivMain = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const DivTitle = styled.div`
	width: 100%;
	height: 50px;
	background-color: var(--color-primary);
	border-radius: 4px;
	border: 2px solid var(--color-white);
	margin-top: 20px;
	display: flex;
	align-items: center;
	gap: 5px;
	padding: 5px 15px;

	@media (max-width: 800px) {
		padding: 5px;
		height: 35px;
	}
`;

const TitleMain = styled.h2`
	font-size: 20px;
	font-weight: 700;
	color: var(--color-white);

	@media (max-width: 800px) {
		font-size: 12px;
	}
	@media (max-width: 400px) {
		font-size: 9px;
	}
`;

const DivList = styled.div`
	width: 100%;
	height: fit-content;
	border-radius: 4px;
	background-color: var(--color-grey-0);
	padding: 10px 20px;
	margin-top: 10px;

	@media (max-width: 800px) {
		padding: 10px;
	}
`;

const DivTitleList = styled.div`
	display: flex;
	align-items: center;
	position: relative;
`;

const TitleList = styled.h3`
	color: var(--color-secundary);
	font-size: 18px;
	font-weight: 700;
	margin-left: 10px;

	@media (max-width: 800px) {
		font-size: 12px;
		margin-left: 5px;
	}
`;

const List = styled.ul`
	list-style: none;
	/* display: none; */
	flex-direction: column;
	margin-left: 7.5%;
	margin-top: 7.5%;
	gap: 15px;

	@media (max-width: 800px) {
		margin-top: 15px;
	}
`;

const ItemList = styled.li`
	display: flex;
	align-items: center;
	cursor: pointer;
    user-select: none;
    opacity: 80%;

    :hover {
        opacity: 100%;
    }
`;

const TitleItem = styled.h4`
	color: var(--color-grey-600);
	font-size: 16px;
	margin-left: 10px;
	font-weight: 400;

	@media (max-width: 800px) {
		font-size: 10px;
		margin-left: 5px;
	}
`;

const IconItem = styled.span`
	background-color: var(--color-primary);
	height: 14px;
	width: 14px;
	border-radius: 2px;

	@media (max-width: 800px) {
		width: 8px;
		height: 8px;
	}
`;

const DivLogout = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 20px;
	gap: 5px;
	bottom: 20px;
	left: 25%;

	:hover * {
		color: var(--color-negative);
		transition: 0.2s ease;
	}

	@media (max-width: 800px) {
		gap: 2px;
	}
`;
const ButtonLogout = styled.button`
	font-size: 24px;
	font-weight: 500;
	color: var(--color-grey-600);
	transition: 0.2s ease;

	@media (max-width: 800px) {
		font-size: 12px;
	}
`;

const IconPanel = styled(RiDashboardLine)`
	width: 32px;
	height: 32px;
	color: var(--color-black);

	@media (max-width: 800px) {
		width: 20px;
		height: 20px;
	}
`;

const IconTool = styled(VscTools)`
	color: var(--color-black);
	width: 20px;
	height: 20px;

	@media (max-width: 600px) {
		width: 12px;
		height: 12px;
	}
`;

const IconArrow = styled(AiFillCaretDown)`
	color: var(--color-black);
	width: 20px;
	height: 20px;
	position: absolute;
	right: 0;
	cursor: pointer;
	transform: rotate(0deg);

	@media (max-width: 600px) {
		width: 12px;
		height: 12px;
	}
`;

const IconLogout = styled(MdOutlineLogout)`
	color: var(--color-black);
	width: 35px;
	height: 35px;
	transition: 0.2s ease;
	cursor: pointer;

	@media (max-width: 800px) {
		width: 20px;
		height: 20px;
	}
`;

export {
	DivPanel,
	ImgLogo,
	DivUser,
	ImgUser,
	SpanUser,
	DivMain,
	DivTitle,
	TitleMain,
	DivList,
	DivTitleList,
	TitleList,
	List,
	ItemList,
	TitleItem,
	IconItem,
};
export { DivLogout, ButtonLogout, IconPanel, IconTool, IconArrow, IconLogout };
