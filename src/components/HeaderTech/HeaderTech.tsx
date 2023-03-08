import { HeaderTechWrapper } from './Styles';
interface Props {
	label: string;
}

const HeaderTech: React.FC<Props> = ({ label }: Props) => {
	return (
		<HeaderTechWrapper>
			<div className='headerTech__Container'>
				<h2>{label}</h2>
			</div>
		</HeaderTechWrapper>
	);
};

export default HeaderTech;
