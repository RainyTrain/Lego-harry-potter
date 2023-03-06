import React, { FormEvent, useEffect, useState } from 'react';
import { useAppDispatch } from '../Hooks';
import { setData } from '../Modules/Redux/Slice/DataSlice';
import { setValid } from '../Modules/Redux/Slice/FigSlice';

const Form = React.memo(() => {
  const dispatch = useAppDispatch();

  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [adress, setAdress] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [zip, setZip] = useState<string>('');

  const [nameDirty, setNameDirty] = useState<boolean>(false);
  const [surnameDirty, setSurnameDirty] = useState<boolean>(false);
  const [phoneDirty, setPhoneDirty] = useState<boolean>(false);
  const [emailDirty, setEmailDirty] = useState<boolean>(false);
  const [dateDirty, setDateDirty] = useState<boolean>(false);
  const [adressDirty, setAdressDirty] = useState<boolean>(false);
  const [cityDirty, setCityDirty] = useState<boolean>(false);
  const [stateDirty, setStateDirty] = useState<boolean>(false);
  const [zipDirty, setZipDirty] = useState<boolean>(false);

  const [nameError, setNameError] = useState<string>('This field could not be empty!');
  const [surnameError, setSurnameError] = useState<string>('This field could not be empty!');
  const [phoneEror, setPhoneEror] = useState<string>('This field could not be empty!');
  const [emailError, setEmailError] = useState<string>('This field could not be empty!');
  const [dateError, setDateError] = useState<string>('This field could not be empty!');
  const [adressError, setAdressError] = useState<string>('This field could not be empty!');
  const [cityError, setCityError] = useState<string>('This field could not be empty!');
  const [stateError, setStateError] = useState<string>('');
  const [zipError, setZipError] = useState<string>('This field could not be empty!');

  useEffect(() => {
    if (
      nameError ||
      surnameError ||
      phoneEror ||
      emailError ||
      dateError ||
      adressError ||
      cityError ||
      stateError ||
      zipError
    ) {
      dispatch(setValid(false));
    } else {
      dispatch(setValid(true));
      dispatch(
        setData({
          name,
          surname,
          phone,
          email,
          date,
          adress,
          city,
          state,
          zip,
        }),
      );
    }
  }, [
    nameError,
    surnameError,
    phoneEror,
    emailError,
    dateError,
    adressError,
    cityError,
    stateError,
    zipError,
  ]);

  const blurHander = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    switch (e.target.name) {
      case 'name':
        setNameDirty(true);
        break;
      case 'surname':
        setSurnameDirty(true);
        break;
      case 'phone':
        setPhoneDirty(true);
        break;
      case 'email':
        setEmailDirty(true);
        break;
      case 'date':
        setDateDirty(true);
        break;
      case 'adress':
        setAdressDirty(true);
        break;
      case 'city':
        setCityDirty(true);
        break;
      case 'state':
        setStateDirty(true);
        break;
      case 'zip':
        setZipDirty(true);
        break;
      default:
        break;
    }
  };

  const nameHandler = (arg: string) => {
    setName(arg);
    if (arg.length < 3 || arg.length > 11) {
      setNameError('Too long or too short name');
    } else {
      setNameError('');
    }
  };

  const surnameHandler = (arg: string) => {
    setSurname(arg);
    if (arg.length < 3 || arg.length > 11) {
      setSurnameError('Too long or too short surname');
    } else {
      setSurnameError('');
    }
  };

  const phoneHandler = (arg: string) => {
    setPhone(arg);
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (!re.test(arg)) {
      setPhoneEror('Invalid phone format - (123)123-1234');
    } else {
      setPhoneEror('');
    }
  };

  const emailHandler = (arg: string) => {
    setEmail(arg);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(arg)) {
      setEmailError('Invalid email format - example@server.com');
    } else {
      setEmailError('');
    }
  };

  const dateHandler = (arg: string) => {
    setDate(arg);
    const date = new Date();
    const currentYear = date.getFullYear();
    const re = /^(?:0[1-9]|1[012])([/])(?:0[1-9]|[12]\d|3[01])\1(?:19|20)\d\d$/;
    if (!re.test(arg)) {
      setDateError('Invalid date format - mm/dd/yyyy');
    } else if (Number(arg.slice(6, 10)) >= currentYear - 18) {
      setDateError('Your have to be over 18!');
    } else {
      setDateError('');
    }
  };

  const cityHandler = (arg: string) => {
    setCity(arg);
    if (arg.length < 3 || arg.length > 50) {
      setCityError('Too long or too short city');
    } else {
      setCityError('');
    }
  };

  const stateHandler = (arg: string) => {
    setState(arg);
  };

  const adressHandler = (arg: string) => {
    setAdress(arg);
    if (arg.length < 3 || arg.length > 50) {
      setAdressError('Too long or too short city');
    } else {
      setAdressError('');
    }
  };

  const zipHandler = (arg: string) => {
    setZip(arg);
    const re = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    if (!re.test(arg)) {
      setZipError('Incorrect zip format 12345');
    } else {
      setZipError('');
    }
  };

  return (
    <div className="container">
      <h1>SHIPPING DETAILS</h1>
      <form onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault}>
        <label htmlFor="name" className="short">
          <h2>Name</h2>
          {nameDirty && nameError && (
            <div style={{ color: 'red', marginBottom: '5px' }}>{nameError}</div>
          )}
          <input
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => nameHandler(e.target.value)}
            onBlur={(e) => blurHander(e)}
            name="name"
            type="text"
          />
        </label>
        <label htmlFor="surname" className="short">
          <h2>Surname</h2>
          {surnameDirty && surnameError && (
            <div style={{ color: 'red', marginBottom: '5px' }}>{surnameError}</div>
          )}
          <input
            value={surname}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => surnameHandler(e.target.value)}
            onBlur={(e) => blurHander(e)}
            name="surname"
            type="text"
          />
        </label>
        <label htmlFor="phone">
          <h2>Phone Number</h2>
          {phoneDirty && phoneEror && (
            <div style={{ color: 'red', marginBottom: '5px' }}>{phoneEror}</div>
          )}
          <input
            value={phone}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => phoneHandler(e.target.value)}
            onBlur={(e) => blurHander(e)}
            name="phone"
            type="tel"
          />
        </label>
        <label htmlFor="email">
          <h2>Email</h2>
          {emailDirty && emailError && (
            <div style={{ color: 'red', marginBottom: '5px' }}>{emailError}</div>
          )}
          <input
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => emailHandler(e.target.value)}
            onBlur={(e) => blurHander(e)}
            name="email"
            type="email"
          />
        </label>
        <label htmlFor="date">
          <h2>Date of birth</h2>
          {dateDirty && dateError && (
            <div style={{ color: 'red', marginBottom: '5px' }}>{dateError}</div>
          )}
          <input
            value={date}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => dateHandler(e.target.value)}
            onBlur={(e) => blurHander(e)}
            name="date"
            type="text"
          />
        </label>
        <label htmlFor="adress">
          <h2>Adress</h2>
          {adressDirty && adressError && (
            <div style={{ color: 'red', marginBottom: '5px' }}>{adressError}</div>
          )}
          <input
            value={adress}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => adressHandler(e.target.value)}
            onBlur={(e) => blurHander(e)}
            name="adress"
            type="text"
          />
        </label>
        <label htmlFor="city">
          <h2>City</h2>
          {cityDirty && cityError && (
            <div style={{ color: 'red', marginBottom: '5px' }}>{cityError}</div>
          )}
          <input
            value={city}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => cityHandler(e.target.value)}
            onBlur={(e) => blurHander(e)}
            name="city"
            type="text"
          />
        </label>
        <label htmlFor="state" className="short">
          <h2>State</h2>
          {stateDirty && stateError && (
            <div style={{ color: 'red', marginBottom: '5px' }}>{stateError}</div>
          )}
          <select
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => stateHandler(e.target.value)}
            value={state}
            onBlur={(e) => blurHander(e)}>
            <option value="Alabama">Alabama (AL)</option>
            <option value="Alaska">Alaska (AK)</option>
            <option value="Arizona">Arizona (AZ)</option>
            <option value="Arkansas">Arkansas (AR)</option>
            <option value="California">California (CA)</option>
            <option value="Colorado">Colorado (CO)</option>
            <option value="Connecticut">Connecticut (CT)</option>
            <option value="Delaware">Delaware (DE)</option>
            <option value="District Of Columbia">District Of Columbia (DC)</option>
            <option value="Florida">Florida (FL)</option>
            <option value="Georgia">Georgia (GA)</option>
            <option value="Hawaii">Hawaii (HI)</option>
            <option value="Idaho">Idaho (ID)</option>
            <option value="Illinois">Illinois (IL)</option>
            <option value="Indiana">Indiana (IN)</option>
            <option value="Iowa">Iowa (IA)</option>
            <option value="Kansas">Kansas (KS)</option>
            <option value="Kentucky">Kentucky (KY)</option>
            <option value="Louisiana">Louisiana (LA)</option>
            <option value="Maine">Maine (ME)</option>
            <option value="Maryland">Maryland (MD)</option>
            <option value="Massachusetts">Massachusetts (MA)</option>
            <option value="Michigan">Michigan (MI)</option>
            <option value="Minnesota">Minnesota (MN)</option>
            <option value="Mississippi">Mississippi (MS)</option>
            <option value="Missouri">Missouri (MO)</option>
            <option value="Montana">Montana (MT)</option>
            <option value="Nebraska">Nebraska (NE)</option>
            <option value="Nevada">Nevada (NV)</option>
            <option value="New Hampshire">New Hampshire (NH)</option>
            <option value="New Jersey">New Jersey (NJ)</option>
            <option value="New Mexico">New Mexico (NM)</option>
            <option value="New York">New York (NY)</option>
            <option value="North">North Carolina (NC)</option>
            <option value="North">North Dakota (ND)</option>
            <option value="Ohio">Ohio (OH)</option>
            <option value="Oklahoma">Oklahoma (OK)</option>
            <option value="Oregon">Oregon (OR)</option>
            <option value="Pennsylvania">Pennsylvania (PA)</option>
            <option value="Rhode Island">Rhode Island (RI)</option>
            <option value="South Carolina">South Carolina (SC)</option>
            <option value="South Dakota">South Dakota (SD)</option>
            <option value="Tennessee">Tennessee (TN)</option>
            <option value="Texas">Texas (TX)</option>
            <option value="Utah">Utah (UT)</option>
            <option value="Vermont">Vermont</option>
            <option value="Virginia">Virginia</option>
            <option value="Washington">Washington</option>
            <option value="West Virginia">West Virginia</option>
            <option value="Wisconsin">Wisconsin</option>
            <option value="Wyoming">Wyoming</option>
          </select>
        </label>
        <label htmlFor="zip" className="short">
          <h2>Zip Code</h2>
          {zipDirty && zipError && (
            <div style={{ color: 'red', marginBottom: '5px' }}>{zipError}</div>
          )}
          <input
            value={zip}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => zipHandler(e.target.value)}
            onBlur={(e) => blurHander(e)}
            name="zip"
            type="text"
          />
        </label>
      </form>
    </div>
  );
});

export default Form;
