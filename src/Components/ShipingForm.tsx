import { useFormik } from 'formik';
import { FormEvent, useEffect } from 'react';
import { useAppDispatch } from '../Hooks';
import { setValid } from '../Modules/Redux/Slice/FigSlice';

const validate = (values: any) => {
  const errors: any = {};

  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 3 || values.name.length > 11) {
    errors.name = 'Too long or too short name';
  }

  if (!values.surname) {
    errors.surname = 'Required';
  } else if (values.name.length < 3 || values.name.length > 11) {
    errors.surname = 'Too long or too short surname';
  }

  if (!values.phone) {
    errors.phone = 'Required';
  } else if (!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(values.phone)) {
    errors.phone = 'Invalid phone format - (123)123-1234';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (
    !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      values.email,
    )
  ) {
    errors.email = 'Invalid email format - example@server.com';
  }

  const date = new Date();
  const currentYear = date.getFullYear();

  if (!values.date) {
    errors.date = 'Required';
  } else if (!/^(?:0[1-9]|1[012])([/])(?:0[1-9]|[12]\d|3[01])\1(?:19|20)\d\d$/.test(values.date)) {
    errors.date = 'Invalid date format - mm/dd/yyyy';
  } else if (Number(values.date.slice(6, 10)) >= currentYear - 18) {
    errors.date = 'You have to be over 18!';
  }

  if (!values.adress) {
    errors.adress = 'Required';
  } else if (values.adress.length < 3 || values.adress.length > 50) {
    errors.adress = 'Too long or too short adress';
  }

  if (!values.city) {
    errors.city = 'Required';
  } else if (values.city.length < 3 || values.city.length > 50) {
    errors.city = 'Too long or too short city';
  }

  if (!values.zip) {
    errors.zip = 'Required';
  } else if (!/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(values.zip)) {
    errors.zip = 'Incorrect zip format 12345';
  }
  
  return errors;
};

const ShipingForm = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      phone: '',
      email: '',
      date: '',
      adress: '',
      city: '',
      state: '',
      zip: '',
    },
    validateOnMount: true,
    validate: validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    if (formik.isValid && Object.keys(formik.touched).length > 0) {
      dispatch(setValid(true));
    }
  }, [formik.errors]);

  return (
    <div className="container">
      <h1>SHIPPING DETAILS</h1>
      <form
        onSubmit={(event: FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          formik.handleSubmit();
        }}>
        <label htmlFor="name" className="short">
          <h2>Name</h2>
          {formik.touched.name && formik.errors.name && (
            <div style={{ color: 'red', marginBottom: '5px' }}>{formik.errors.name}</div>
          )}
          <input
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
        </label>
        <label htmlFor="surname" className="short">
          <h2>Surname</h2>
          {formik.touched.surname && formik.errors.surname && (
            <div style={{ color: 'red', marginBottom: '5px' }}>{formik.errors.surname}</div>
          )}
          <input
            name="surname"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.surname}
          />
        </label>
        <label htmlFor="phone">
          <h2>Phone Number</h2>
          {formik.touched.phone && formik.errors.phone && (
            <div style={{ color: 'red', marginBottom: '5px' }}>{formik.errors.phone}</div>
          )}
          <input
            name="phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            type="tel"
          />
        </label>
        <label htmlFor="email">
          <h2>Email</h2>
          {formik.touched.email && formik.errors.email && (
            <div style={{ color: 'red', marginBottom: '5px' }}>{formik.errors.email}</div>
          )}
          <input
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            type="email"
          />
        </label>
        <label htmlFor="date">
          <h2>Date of birth</h2>
          {formik.touched.date && formik.errors.date && (
            <div style={{ color: 'red', marginBottom: '5px' }}>{formik.errors.date}</div>
          )}
          <input
            name="date"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.date}
          />
        </label>
        <label htmlFor="adress">
          <h2>Adress</h2>
          {formik.touched.adress && formik.errors.adress && (
            <div style={{ color: 'red', marginBottom: '5px' }}>{formik.errors.adress}</div>
          )}
          <input
            name="adress"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.adress}
          />
        </label>
        <label htmlFor="city">
          <h2>City</h2>
          {formik.touched.city && formik.errors.city && (
            <div style={{ color: 'red', marginBottom: '5px' }}>{formik.errors.city}</div>
          )}
          <input
            name="city"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
          />
        </label>
        <label htmlFor="state" className="short">
          <h2>State</h2>
          {formik.touched.state && formik.errors.state && (
            <div style={{ color: 'red', marginBottom: '5px' }}>{formik.errors.state}</div>
          )}
          <select
            onChange={formik.handleChange}
            value={formik.values.state}
            onBlur={formik.handleBlur}
            name="state">
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
          {formik.touched.zip && formik.errors.zip && (
            <div style={{ color: 'red', marginBottom: '5px' }}>{formik.errors.zip}</div>
          )}
          <input
            name="zip"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.zip}
          />
        </label>
      </form>
    </div>
  );
};

export default ShipingForm;
