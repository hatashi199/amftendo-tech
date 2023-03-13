import { FooterTechWrapper } from './Styles';
import { ImgContainer } from '../General/ImgContainer';
import nsw_icon from '../../assets/NintendoSwitch-HandheldIcon.png';

interface Props {
	icon?: boolean;
	borderTop?: boolean;
}

const FooterTech: React.FC<Props> = ({ icon = true, borderTop = true }: Props) => {
	return (
		<FooterTechWrapper borderTp={borderTop}>
			{icon && (
				<div className='footerTech__Container'>
					<ImgContainer figWidth='75px'>
						<img src={nsw_icon} alt='nsw-handheld' />
					</ImgContainer>
				</div>
			)}
		</FooterTechWrapper>
	);
};

export default FooterTech;
