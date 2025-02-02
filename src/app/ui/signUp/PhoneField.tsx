import { useState, useEffect } from 'react';

type RestCountry = {
  name: {
    common: string;
  };
  idd?: {
    root: string;
    suffixes?: string[];
  };
  flag: string;
};

type Country = {
  name: string;
  code: string;
  flag: string;
}
const PhoneField = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then((res) => res.json())
    .then((data: RestCountry[]) => {
      const countryList: Country[] = data.map((country) => ({
        name: country.name.common,
        code: `+${country.idd?.root || ''}${country.idd?.suffixes ? country.idd.suffixes[0] : ''}`,
        flag: country.flag || '🏳️',
      }));
      setCountries(countryList);
    });
  }, []);

  return (
    <div className='flex mb-4'>
      <select className='border rounded-l-lg px-3 py-2 focus:outline-none'>
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.flag} {country.code}
          </option>
        ))}
      </select>
      <input
        type='tel'
        placeholder='Phone Number'
        className='flex-grow px-4 py-2 border rounded-r-lg focus:outline-none focus:ring focus:ring-orange-300'
      />
    </div>
  );
};

export default PhoneField;
