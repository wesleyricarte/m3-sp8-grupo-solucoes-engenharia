import { Header } from "../../components/Header";
import { StyledTitle } from "../../styles/typography";
import {
	StyledBoxInfo,
	StyledBoxPictures,
	StyledContainer,
	StyledSection1,
	StyledSection2,
} from "./style";
import imgObra1 from "../../assets/imgs/obra1.png";
import imgObra2 from "../../assets/imgs/obra2.png";
import imgObra3 from "../../assets/imgs/obra3.png";
import imgBackground from "../../assets/imgs/unsplashHome.png";
import imgBackMobile from "../../assets/imgs/unsplashMobile.png";

const Home = () => {
	return (
		<>
			<Header />
			<StyledContainer>
				<StyledSection1>
					<div>
						<StyledTitle
							className="titleSection1"
							fontSize="Heading-3-500"
							tag="h2"
						>
							NOSSOS PROJETOS
						</StyledTitle>
						<StyledBoxPictures>
							<div>
								<img src={imgObra1} alt="Galpão Mataripe" />
								<StyledTitle fontSize="Body-2-500" tag="h4">
									Galpão Mataripe
								</StyledTitle>
							</div>
							<div>
								<img src={imgObra2} alt="Boulevard Shopping" />
								<StyledTitle fontSize="Body-2-500" tag="h4">
									Boulevard Shopping
								</StyledTitle>
							</div>
							<div>
								<img src={imgObra3} alt="Estádio Rei Pelé" />
								<StyledTitle fontSize="Body-2-500" tag="h4">
									Estádio Rei Pelé
								</StyledTitle>
							</div>
						</StyledBoxPictures>
					</div>
					<div>
						<StyledTitle
							className="titleSection1"
							fontSize="Heading-3-500"
							tag="h2"
						>
							QUEM SOMOS
						</StyledTitle>
						<div>
							<StyledTitle fontSize="Body-2-400" tag="p">
								Desde 2012, a Soluções Engenharia se empenha em
								continuar cumprindo com o seu objetivo, de
								construir sonhos, colaborando com o
								desenvolvimento do país através da geração de
								empregos diretos e indiretos e contribuindo no
								desenvolvimento da nossa sociedade.
							</StyledTitle>
						</div>
					</div>
				</StyledSection1>
				<StyledSection2>
					<StyledBoxInfo>
						<StyledTitle
							fontSize="Heading-4-400"
							tag="h3"
							fontColor="white"
						>
							Missão
						</StyledTitle>
						<StyledTitle
							fontSize="Heading-6-400"
							tag="p"
							fontColor="white"
						>
							Desenvolver obras de construção de forma rentável,
							segura e com foco na qualidade dos seus serviços.
						</StyledTitle>
					</StyledBoxInfo>
					<StyledBoxInfo>
						<StyledTitle
							fontSize="Heading-4-400"
							tag="h3"
							fontColor="white"
						>
							Visão
						</StyledTitle>
						<StyledTitle
							fontSize="Heading-6-400"
							tag="p"
							fontColor="white"
						>
							Ser reconhecida como uma construtora referência em
							inovação, qualidade e satisfação do cliente.
						</StyledTitle>
					</StyledBoxInfo>
					<StyledBoxInfo>
						<StyledTitle
							fontSize="Heading-4-400"
							tag="h3"
							fontColor="white"
						>
							Valores
						</StyledTitle>
						<ul>
							<li>
								<StyledTitle
									fontSize="Heading-6-400"
									tag="p"
									fontColor="white"
								>
									Segurança
								</StyledTitle>
							</li>
							<li>
								<StyledTitle
									fontSize="Heading-6-400"
									tag="p"
									fontColor="white"
								>
									Qualidade
								</StyledTitle>
							</li>
							<li>
								<StyledTitle
									fontSize="Heading-6-400"
									tag="p"
									fontColor="white"
								>
									Inovação
								</StyledTitle>
							</li>
							<li>
								<StyledTitle
									fontSize="Heading-6-400"
									tag="p"
									fontColor="white"
								>
									Ética
								</StyledTitle>
							</li>
						</ul>
					</StyledBoxInfo>
				</StyledSection2>
				<img
					className="imgDesktop"
					src={imgBackground}
					alt="Imagem de fundo"
				/>
				<img
					className="imgMobile"
					src={imgBackMobile}
					alt="Imagem de fundo"
				/>
			</StyledContainer>
		</>
	);
};

export default Home;
