import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setData } from '../Modules/Redux/Slice/DataSlice';
import { setValid } from '../Modules/Redux/Slice/FigSlice';

const Form = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [adress, setAdress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  const [nameDirty, setNameDirty] = useState(false);
  const [surnameDirty, setSurnameDirty] = useState(false);
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [dateDirty, setDateDirty] = useState(false);
  const [adressDirty, setAdressDirty] = useState(false);
  const [cityDirty, setCityDirty] = useState(false);
  const [stateDirty, setStateDirty] = useState(false);
  const [zipDirty, setZipDirty] = useState(false);

  const [nameError, setNameError] = useState('This field could not be empty!');
  const [surnameError, setSurnameError] = useState('This field could not be empty!');
  const [phoneEror, setPhoneEror] = useState('This field could not be empty!');
  const [emailError, setEmailError] = useState('This field could not be empty!');
  const [dateError, setDateError] = useState('This field could not be empty!');
  const [adressError, setAdressError] = useState('This field could not be empty!');
  const [cityError, setCityError] = useState('This field could not be empty!');
  const [stateError, setStateError] = useState('');
  const [zipError, setZipError] = useState('This field could not be empty!');

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

  const blurHander = (e) => {
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

  const nameHandler = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 11) {
      setNameError('Too long or too short name');
    } else {
      setNameError('');
    }
  };

  const surnameHandler = (e) => {
    setSurname(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 11) {
      setSurnameError('Too long or too short surname');
    } else {
      setSurnameError('');
    }
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (!re.test(e.target.value)) {
      setPhoneEror('Invalid phone format - (123)123-1234');
    } else {
      setPhoneEror('');
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(e.target.value)) {
      setEmailError('Invalid email format - example@server.com');
    } else {
      setEmailError('');
    }
  };

  const dateHandler = (e) => {
    setDate(e.target.value);
    const date = new Date();
    const currentYear = date.getFullYear();
    const re = /^(?:0[1-9]|1[012])([/])(?:0[1-9]|[12]\d|3[01])\1(?:19|20)\d\d$/;
    if (!re.test(e.target.value)) {
      setDateError('Invalid date format - mm/dd/yyyy');
    } else if (e.target.value.slice(6, 10) >= currentYear - 18) {
      setDateError('Your have to be over 18!');
    } else {
      setDateError('');
    }
  };

  const cityHandler = (e) => {
    setCity(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 50) {
      setCityError('Too long or too short city');
    } else {
      setCityError('');
    }
  };

  const stateHandler = (e) => {
    setState(e.target.value);
    if (!e.target.value) {
      setCityError('Too long or too short city');
    } else {
      setCityError('');
    }
  };

  const adressHandler = (e) => {
    setAdress(e.target.value);
    if (e.target.value.length < 3 || e.target.value.length > 50) {
      setAdressError('Too long or too short city');
    } else {
      setAdressError('');
    }
  };

  const zipHandler = (e) => {
    setZip(e.target.value);
    const re = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    if (!re.test(e.target.value)) {
      setZipError('Incorrect zip format 12345');
    } else {
      setZipError('');
    }
  };

  return (
    <div className="container">
      <h1>SHIPPING DETAILS</h1>
      <form>
        <label htmlFor="name" className="short">
          <h2>Name</h2>
          {nameDirty && nameError && (
            <div style={{ color: 'red', marginBottom: '5px' }}>{nameError}</div>
          )}
          <input
            value={name}
            onChange={(e) => nameHandler(e)}
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
            onChange={(e) => surnameHandler(e)}
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
            onChange={(e) => phoneHandler(e)}
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
            onChange={(e) => emailHandler(e)}
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
            onChange={(e) => dateHandler(e)}
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
            onChange={(e) => adressHandler(e)}
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
            onChange={(e) => cityHandler(e)}
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
          <select onChange={(e) => stateHandler(e)} value={state} onBlur={(e) => blurHander(e)}>
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
            onChange={(e) => zipHandler(e)}
            onBlur={(e) => blurHander(e)}
            name="zip"
            type="text"
          />
        </label>
      </form>
    </div>
  );
};

export default Form;
