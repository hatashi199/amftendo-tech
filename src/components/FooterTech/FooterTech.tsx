import { FooterTechWrapper } from './Styles';
import { ImgContainer } from '../General/ImgContainer';
import nsw_icon from '../../assets/NintendoSwitch-HandheldIcon.png';

const FooterTech: React.FC = () => {
	return (
		<FooterTechWrapper>
			<div className='footerTech__Container'>
				<ImgContainer figWidth='75px'>
					<img src={nsw_icon} alt='nsw-handheld' />
				</ImgContainer>
			</div>
		</FooterTechWrapper>
	);
};

export default FooterTech;
