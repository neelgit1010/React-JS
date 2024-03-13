import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import video1 from '../assets/video1.mp4';

const Background = ({playStatus, carCount}) => {
    if(playStatus){
        return(
            <video 
            autoPlay loop muted 
            className=' h-full w-full float-left top-0 left-0 right-0 bottom-0 p-0 fixed object-cover -z-10 duration-700'>
                <source src={video1} type='video/mp4'/>
            </video>
        )
    }
    else if(carCount === 0){
        return(
            <img src={image1} alt="" 
            className=' h-full w-full float-left top-0 left-0 right-0 bottom-0 p-0 fixed object-cover -z-10 duration-700'/>
        )
    }
    else if(carCount === 1){
        return(
            <img src={image2} alt="" 
            className=' h-full w-full float-left top-0 left-0 right-0 bottom-0 p-0 fixed object-cover -z-10 duration-700'/>
        )
    }
    else if(carCount === 2){
        return(
            <img src={image3} alt="" 
            className=' h-full w-full float-left top-0 left-0 right-0 bottom-0 p-0 fixed object-cover -z-10 duration-700'/>
        )
    }
}

export default Background