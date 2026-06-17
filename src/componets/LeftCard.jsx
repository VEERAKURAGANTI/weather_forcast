import './LeftCard.css'
import SunIcon from '../assets/incons/sunyday.svg'
// import { WeatherStats } from './WeatherStats';
export function LeftCard(){
    return(
        <>
        <div className="today-info">
            <div className='current-weather'>
                <img src={SunIcon} alt="sun-icon" />
                <div className='display-temp'> 30°c</div>
                <div className='temp-description'>Partly sunny</div>
            </div>
            {/* <WeatherStats/> */}
        </div>
        </>
    );
}

