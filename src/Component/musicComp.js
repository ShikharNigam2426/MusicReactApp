import React from 'react'
import './style.css'
import ProgrssBar from './ProgrssBar';
import Logos from './Logos';
import PlayBackButtons from './PlayBackButtons';
import '@fortawesome/fontawesome-free/css/all.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Song1 from '../Songs/0.mp3'
// import './musicCompp'


const MusicComp = () => {
    const [play , setPlay] = React.useState('fa-play')
    const [Hide, setHide] = React.useState(false)

    React.useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 768) {
                setHide(true);
            } else {
                setHide(false);
            }
        }
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const mp3Array = [];

    for (let i = 0; i < 10; i++) {
        // mp3Array.push(`.../Songs${i}.mp3`);
        mp3Array.push(`${Song1}`);
    }


    const songNameArray = [
        "295",
        "Celebrity Killer",
        "Jatt Da Muqabla",
        "Just Listen",
        "Never Fold",
        "Signed To God",
        "SYL",
        "So High",
        "The Last Ride",
        "THESE DAYS",
        "TOCHAN"
    ];
    let count = 0;
    
    const handleClick = (event) => {
        let icon = event.target.id;
        if(play === ('fa-play'))
        setPlay('fa-pause');
        else{
            setPlay('fa-play')
        }
    }

    return (
        <div className='row m-4'>
            <div className="col-lg-5 col-md-4 col-12" id='SongLists'>

                <ul className='bg-glass list-group-item'>
                    <p className='m-0 p-0'>{songNameArray[`${count++}`]}</p>
                    <i className={`fas ${play}`} onClick={handleClick} id='0'></i>
                </ul>
                <ul className='bg-glass list-group-item'>
                    <p className='m-0 p-0'>{songNameArray[`${count++}`]}</p>
                    <i className={`fas ${play}`} onClick={handleClick} id='1'></i>
                </ul>
                <ul className='bg-glass list-group-item'>
                    <p className='m-0 p-0'>{songNameArray[`${count++}`]}</p>
                    <i className={`fas ${play}`} onClick={handleClick} id='2'></i>
                </ul>
                <ul className='bg-glass list-group-item'>
                    <p className='m-0 p-0'>{songNameArray[`${count++}`]}</p>
                    <i className={`fas ${play}`} onClick={handleClick} id='3'></i>
                </ul>
                <ul className='bg-glass list-group-item'>
                    <p className='m-0 p-0'>{songNameArray[`${count++}`]}</p>
                    <i className={`fas ${play}`} onClick={handleClick} id='4'></i>
                </ul>
                <ul className='bg-glass list-group-item'>
                    <p className='m-0 p-0'>{songNameArray[`${count++}`]}</p>
                    <i className={`fas ${play}`} onClick={handleClick} id='5'></i>
                </ul>
                <ul className='bg-glass list-group-item'>
                    <p className='m-0 p-0'>{songNameArray[`${count++}`]}</p>
                    <i className={`fas ${play}`} onClick={handleClick} id='6'></i>
                </ul>
                <ul className='bg-glass list-group-item'>
                    <p className='m-0 p-0'>{songNameArray[`${count++}`]}</p>
                    <i className={`fas ${play}`} onClick={handleClick} id='7'></i>
                </ul>
                <ul className='bg-glass list-group-item'>
                    <p className='m-0 p-0'>{songNameArray[`${count++}`]}</p>
                    <i className={`fas ${play}`} onClick={handleClick} id='8'></i>
                </ul>
                <ul className='bg-glass list-group-item'>
                    <p className='m-0 p-0'>{songNameArray[`${count++}`]}</p>
                    <i className={`fas ${play}`} onClick={handleClick} id='9'></i>
                </ul>

            </div>
            <div className="col-lg-7 col-md-8 col-12">
                <div className='musicPlayerContainer d-flex flex-column align-items-center'>
                    <div className='row logo' id='PosterImage' hidden={Hide} style={{ background: 'gray' }}><Logos /></div>
                    <div className='row Player'><ProgrssBar /></div>
                    <div className="row"><PlayBackButtons /></div>
                </div>
            </div>
        </div>
    )
}

export default MusicComp