import { Formik } from 'formik';
//children?: ((props: FormikProps<Values>) => React.ReactNode) | React.ReactNode;

const validate = (values: any) => {
  const errors: any = {};

  if (!values.name) {
    errors.firstName = 'Required';
  } else if (values.name.length < 3 || values.name.length > 11) {
    errors.firstName = 'Too long or too short name';
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
};
const ShipingForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        surname: '',
        phone: '',
        email: '',
        date: '',
        adress: '',
        city: '',
        state: '',
        zip: '',
      }}
      validate={validate}
      onSubmit={(values) => {
        console.log(values);
      }}>
          {formik =>(
              <form onSubmit={formik.handleSubmit}></form>
          )}
      </Formik>
  );
};

export default ShipingForm;
