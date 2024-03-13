import arrow_btn from '../assets/arrow_btn.png';
import play_icon from '../assets/play_icon.png';
import pause_icon from '../assets/pause_icon.png';

const Cars = ({setPlayStatus,carData,carCount,playStatus,setCarCount}) => {
  return (
    <div className=' m-0 mt-32'>
      <div className=' text-white font-bold leading-10'>
        <p className='text-white font-bold leading-10'>{carData.text1}</p>
        <p className='text-white font-bold leading-10'>{carData.text2}</p>
      </div>

      <div className=' flex items-center gap-10 w-fit mt-7 ml-7 rounded-full bg-white cursor-pointer p-4 text-2xl'>
        <p className=' text-2xl font-semibold ml-4'>Explore the features</p>
        <img src={arrow_btn} alt="" />
      </div>

      <div className=' flex justify-between mt-36'>
        <ul className=' flex items-center gap-5 ml-6 font-bold'>
          <li onClick={() => {setCarCount(0)}} 
          className={ carCount === 0?' text-yellow-400 cursor-pointer ':'text-white cursor-pointer'}>1</li>
          <li onClick={() => {setCarCount(1)}} 
          className={carCount === 1?' text-yellow-400 cursor-pointer ':'text-white cursor-pointer'}>2</li>
          <li onClick={() => {setCarCount(2)}} 
          className={carCount === 2?' text-yellow-400 cursor-pointer ':'text-white cursor-pointer'}>3</li>
        </ul>
      </div>

      <div onClick={() => {setPlayStatus(!playStatus)}}
       className=' flex items-center gap-8 justify-end mr-11 cursor-pointer'>
        <img src={playStatus?pause_icon:play_icon} alt="" />
         <p className=' text-white text-2xl font-semibold'>Watch Demo</p>
      </div>
    </div>
  )
}

export default Cars