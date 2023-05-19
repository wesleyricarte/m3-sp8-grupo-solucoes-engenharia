import styled from "styled-components";

export const StyledContainer = styled.div`
	width: 1160px;
	height: 100vh;

	margin: 0 auto;

	display: flex;
	flex-direction: column;

	.imgDesktop {
		width: 100%;
		@media (width < 600px) {
			display: none;
		}
	}

	.imgMobile {
		width: 100%;
		@media (width > 600px) {
			display: none;
		}
	}

	@media (width < 1200px) {
		width: 800px;
	}
	@media (width < 900px) {
		width: 600px;
	}
	@media (width < 650px) {
		width: 90%;
	}
`;

export const StyledSection1 = styled.section`
	display: flex;
	justify-content: space-between;
	text-align: justify;

	gap: 82px;
	padding-bottom: 27px;
	border-bottom: 1px solid var(--color-grey-100);

	.titleSection1 {
		margin: 20px 0px 36px 0px;
	}

	@media (width < 1200px) {
		flex-direction: column;
		gap: 2rem;
	}
`;

export const StyledBoxPictures = styled.div`
	display: flex;
	justify-content: space-between;

	width: 672px;
	height: 155px;

	& > div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;

		img {
			width: 216px;
			height: 124px;

			@media (width < 900px) {
				width: 190px;
				height: unset;
			}
			@media (width < 650px) {
				width: 250px;
				height: unset;
			}
		}
	}

	@media (width < 1200px) {
		width: 100%;
	}
	@media (width < 900px) {
		width: 100%;
	}
	@media (width < 650px) {
		width: 100%;
		flex-direction: column;
		height: unset;
	}
`;

export const StyledSection2 = styled.section`
	display: flex;
	justify-content: space-between;

	width: 100%;
	padding: 36px 0px;

	@media (width < 650px) {
		flex-direction: column;
		gap: 1rem;
	}
`;

export const StyledBoxInfo = styled.div`
	display: flex;
	flex-direction: column;

	width: 351px;
	height: 250px;
	padding: 40px;
	gap: 40px;

	background-color: var(--color-grey-600);

	ul {
		list-style: disc;
		color: var(--color-white);
		margin-left: 1rem;
	}

	@media (width < 1200px) {
		width: 250px;
		height: 330px;
	}
	@media (width < 900px) {
		width: 190px;
		height: 400px;
	}
	@media (width < 800px) {
		width: 190px;
		height: 280px;
	}
	@media (width < 650px) {
		width: 100%;
		height: 180px;
		gap: 1.5rem;
	}
	@media (width < 357px) {
		height: 200px;
	}
`;
