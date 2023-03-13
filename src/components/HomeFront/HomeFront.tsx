import { ImgContainer } from '../General/ImgContainer';
import { RiHome3Fill } from 'react-icons/ri';
import { HomeFrontContainer, HomeFrontWrapper, HomeRightSide, IconFrontContainer } from './Styles';
import AsideHome from '../AsideHome/AsideHome';
import HeaderTech from '../HeaderTech/HeaderTech';
import FooterTech from '../FooterTech/FooterTech';

const HomeFront: React.FC = () => {
	return (
		<HomeFrontWrapper>
			<AsideHome />
			<HomeRightSide>
				<HeaderTech hourBatteryBar borderBottom={false} />
				<HomeFrontContainer>
					<IconFrontContainer>
						<ImgContainer figWidth='100%'>
							<RiHome3Fill size='100%' color='#FFF' />
						</ImgContainer>
					</IconFrontContainer>
				</HomeFrontContainer>
				<FooterTech icon={false} borderTop={false} />
			</HomeRightSide>
		</HomeFrontWrapper>
	);
};

export default HomeFront;
