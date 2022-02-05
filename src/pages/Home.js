import React, { useEffect } from 'react';
import Findip from './Findip';
import axios from 'axios';
import Maps from './Maps';

const Home = () => {
  const [ip, setIP] = React.useState('');

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
    try {
      const response = await axios.get(
        `https://geo.ipify.org/api/v1?apiKey=at_LkuyHSIH0HH8BFBgA5b5EtpBLVfxL&${query}=${value}`
      );
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const validate = (value) => {
    if (
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
        value
      )
    )
      fetchData('ipAddress');
    else if (
      /[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/.test(value)
    )
      fetchData('domain');
    else setValue('');
  };

  const submitHandler = async () => {
    validate(value);
  };

  return (
    at && (
      <>
        <div className='h-screen'>
          <div>
            <Findip
              value={value}
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
    )
  );
};

export default Home;
