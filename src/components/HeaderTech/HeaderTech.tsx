import HourBatteryBar from '../HourBatteryBar/HourBatteryBar';
import { HeaderTechWrapper } from './Styles';
interface Props {
	title?: string;
	hourBatteryBar?: boolean;
	borderBottom?: boolean;
}

const HeaderTech: React.FC<Props> = ({
	title,
	hourBatteryBar = false,
	borderBottom = true
}: Props) => {
	return (
		<HeaderTechWrapper borderBot={borderBottom}>
			{title && <h2>{title}</h2>}
			{hourBatteryBar && <HourBatteryBar />}
		</HeaderTechWrapper>
	);
};

export default HeaderTech;
