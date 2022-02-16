import React, { useEffect } from 'react';
import axios from 'axios';
import Findip from '../components/Findip';
import Maps from '../components/Maps';
import { Link } from 'react-router-dom';

const Home = () => {
  const [errmsg, setErrmsg] = React.useState(false);
  const [ip, setIP] = React.useState('');
  const IPIFY = 'at_LkuyHSIH0HH8BFBgA5b5EtpBLVfxL';

  const at = localStorage.getItem('vt');

  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/');
    setIP(res.data.IPv4);
  };

  useEffect(() => {
    getData();
  }, []);

  const [data, setData] = React.useState('');
  const [value, setValue] = React.useState(ip);

  async function fetchData(query) {
    setErrmsg(true);
    try {
      const response = await axios.get(
        `https://geo.ipify.org/api/v1?apiKey=${IPIFY}&${query}=${value}`
      );
      setData(response.data);
    } catch (error) {
      <Findip er={error} />;
    }
  }

  const validate = (value) => {
    if (
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
        value
      )
    ) {
      fetchData('ipAddress') && setErrmsg(false);
    } else if (
      /[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/.test(value)
    ) {
      fetchData('domain') && setErrmsg(false);
    } else setErrmsg(!errmsg);
  };

  const submitHandler = async () => {
    value !== '' ? validate(value) : alert('Please enter a value');
  };

  return at ? (
    <>
      <div className='h-screen'>
        <div>
          <Findip
            value={value}
            emg={[errmsg, setErrmsg]}
            validate={'pls'}
            setValue={setValue}
            submitHandler={submitHandler}
            head='Ip Address'
            head_address={data?.ip}
            loc='Location'
            loc_region={data?.location?.region}
            loc_city={data?.location?.city}
            time='Timezone'
            timezone={data?.location?.timezone}
            isp='ISP'
            isp_name={data?.isp}
          />
        </div>
        <div className=''>
          <Maps data={data} />
        </div>
      </div>
    </>
  ) : (
    <p className='bg-blue-500  text-white text-2xl font-bold flex justify-center h-screen items-center'>
      {' '}
      Please Login First 🧐
      <Link to='/' className='text-base px-2 underline text-gray-200'>
        login
      </Link>
    </p>
  );
};

export default Home;
