import React from 'react';
const Findip = ({
  value,
  setValue,
  submitHandler,
  head_address,
  loc_region,
  loc_city,
  timezone,
  isp_name,
}) => {
  const keyHandler = (e) => {
    if (e.keyCode === 13) submitHandler();
    return;
  };
  return (
    <div className='flex h-full justify-center items-center bg-pattern 2xl:rounded-md max-w-mw mx-auto'>
      <div className='items-center justify-center flex-col w-5/6 sm:space-y-6 space-y-4'>
        <div className='font-sreg my-4 sm:my-6 text-xl sm:text-3xl text-white  text-center px-2'>
          IP Address Trakcer
        </div>
        {/*TODO: SEARCHBAR */}
        <div className=' flex items-center justify-center sm:w-3/6 sm:px-8 mx-auto'>
          <input
            type='text'
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            onKeyDown={keyHandler}
            placeholder='Search for any IP address or domain'
            className='h-12 sm:h-14 w-full rounded-tl-xl rounded-bl-xl pl-4 focus:outline-none truncate cursor-pointer active:'
          />
          <span
            className='bg-black bg-opacity-90 h-12 sm:h-14 w-16 flex items-center justify-center rounded-tr-xl rounded-br-xl cursor-pointer'
            onClick={submitHandler}
          >
            <svg xmlns='http://www.w3.org/2000/svg' width='11' height='14'>
              <path
                fill='none'
                stroke='#FFF'
                strokeWidth='3'
                d='M2 1l6 6-6 6'
              />
            </svg>
          </span>
        </div>

        <div className='space-y-1 p-6 sm:px-0 sm:space-y-0 sm:flex justify-between text-center items-start rounded-xl bg-white z-50 '>
          <div className='font-breg text-[18px] h-full text-black text-opacity-80 sm:text-2xl  md:text-left sm:w-min mx-auto'>
            <div className='text-xs font-sreg tracking-wider text-gray-400'>
              IP ADDRESS
            </div>{' '}
            {head_address ? head_address : '-'}
          </div>

          <div className='sm:border-r border-gray-300 sm:h-16 sm:-mr-6'></div>

          <div className='font-breg text-[18px] text-black text-opacity-80 sm:text-2xl md:text-left sm:w-min mx-auto  '>
            <div className='text-xs font-sreg tracking-wider text-gray-400 '>
              LOCATION
            </div>
            {loc_region ? loc_region : '-'}
            {loc_city ? loc_city : ''}
          </div>
          <div className='sm:border-r border-gray-300 sm:h-16 sm:-mr-6'></div>
          <div className='font-breg text-[18px] text-black text-opacity-80 sm:text-2xl md:text-left sm:w-max mx-auto '>
            <div className='text-xs font-sreg tracking-wider text-gray-400'>
              TIMEZONE
            </div>
            {timezone ? 'UTC' + timezone : '-'}
          </div>
          <div className='sm:border-r border-gray-300 sm:h-16 sm:-mr-6'></div>
          <div className='font-breg text-[18px] text-black text-opacity-80 sm:text-2xl md:text-left sm:w-min mx-auto  '>
            <div className='text-xs font-sreg tracking-wider text-gray-400'>
              ISP
            </div>
            {isp_name ? isp_name : '-'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Findip;
