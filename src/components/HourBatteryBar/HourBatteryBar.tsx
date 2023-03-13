import { useEffect, useState } from 'react';
import { HourBatteryContainer } from './Styles';
import wifi from '../../assets/Wifi.png';
import battery from '../../assets/Battery.png';
import { ImgContainer } from '../General/ImgContainer';

const HourBatteryBar: React.FC = () => {
	const [hour, setHour] = useState<Date>(new Date());

	const hourOptions: Intl.DateTimeFormatOptions = {
		hour: 'numeric',
		minute: 'numeric'
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setHour(new Date());
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<HourBatteryContainer>
			<span>{hour.toLocaleTimeString('es-ES', hourOptions)}</span>
			<ImgContainer figWidth='24px'>
				<img src={wifi} alt='wifi-icon' />
			</ImgContainer>
			<ImgContainer figWidth='24px'>
				<img src={battery} alt='battery-icon' />
			</ImgContainer>
		</HourBatteryContainer>
	);
};

export default HourBatteryBar;
