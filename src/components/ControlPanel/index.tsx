import {
	ButtonLogout,
	DivList,
	DivLogout,
	DivMain,
	DivPanel,
	DivTitle,
	DivTitleList,
	DivUser,
	IconArrow,
	IconItem,
	IconLogout,
	IconPanel,
	IconTool,
	ImgLogo,
	ImgUser,
	ItemList,
	List,
	SpanUser,
	TitleItem,
	TitleList,
	TitleMain,
} from "./style";
import logo from "../../imgs/logo.png";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../provider/productsContext";
import { useNavigate } from "react-router";

const ControlPanel = () => {
    const navigate = useNavigate()
	const { products } = useContext(ProductsContext);
	const [open, setOpen] = useState(false);
    
	const [categories, setCategories] = useState<any>([]);
   const userDash = JSON.parse(localStorage.getItem("@USER")!);
  
const navigateLogin = ()=>{
    navigate("/login")
    localStorage.clear()
}
	useEffect(() => {
		let types: any = [];
		let flag = true;
		if (products) {
			for (let i = 0; i < products.length; i++) {
				for (let j = 0; j <= types.length; j++) {
					if (products[i].type === types[j]) {
						flag = false;
					}
				}
				if (flag) {
					types.push(products[i].type);
				}
				flag = true;
			}
			setCategories(types);
		}
	}, [products]);

	return (
		<DivPanel>
			<ImgLogo src={logo} alt="logo-img" />

			<DivUser>
				<ImgUser src={userDash.avatarUrl} alt="usuario-img" />
				<SpanUser>{userDash.email}</SpanUser>
			</DivUser>

			<DivMain>
				<DivTitle>
					<IconPanel />
					<TitleMain>Painel de Controle</TitleMain>
				</DivTitle>

				<DivList>
					<DivTitleList>
						<IconTool />
						<TitleList>Categorias</TitleList>
						<IconArrow
							onClick={() =>
								open === false ? setOpen(true) : setOpen(false)
							}
							style={
								open === false
									? { transform: "rotate(0deg)" }
									: { transform: "rotate(180deg)" }
							}
						/>
					</DivTitleList>

					<List
						style={
							open === false
								? { display: "none" }
								: { display: "flex" }
						}
					>
						{categories.map((categ: string) => (
							<ItemList
                                key={categories.indexOf(categ)}
                                onClick={()=> console.log(categ)}
                            >
								<IconItem />
								<TitleItem>{categ}</TitleItem>
							</ItemList>
						))}
					</List>
				</DivList>

				<DivLogout onClick={ navigateLogin}>
					<IconLogout />
					<ButtonLogout>Sair da aplicação</ButtonLogout>
				</DivLogout>
			</DivMain>
		</DivPanel>
	);
};

export default ControlPanel;
