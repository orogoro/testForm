import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
// import { Loader } from '../';

import styles from './Form.module.scss';

const Form = () => {
  const [disable, setDisable] = useState(true);
  const [phoneValue, setPhoneValue] = useState('');
  const [birthdayValue, setBirthdayValue] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      file: [],
    },
  });

  const file = watch('file')[0]?.name;
  const name = watch('name');
  const surname = watch('surname');
  const email = watch('email');
  const phone = watch('phone');
  const birthday = watch('birthday');

  const resultFile = file?.length > 30 ? file.slice(0, 30) + '...' : file;

  const handleSubmitForm = data => {
    // getToken().then(response => {
    // const config = { headers: { Token: response } };
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('surname', data.surname);
    formData.append('birthday', data.birthday);
    formData.append('photo', data.file[0]);

    // onSubmit(formData, config);
    // });

    console.log(data);
    setPhoneValue('');
    setBirthdayValue('');
    reset();
  };

  useEffect(() => {
    if (name && email && phone && surname && file && birthday) {
      setDisable(false);
    }
  }, [email, file, name, phone, surname, birthday]);

  return (
    <div className={styles.form_container} id="form">
      <h2 className={styles.form_title}>Working with POST request</h2>
      <form
        className={styles.form_form}
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <div className={styles.form_input__container}>
          <input
            className={errors.name ? styles.input_error : styles.form_input}
            type="text"
            {...register('name', {
              required: 'This is required',
              minLength: {
                value: 2,
                message: 'Min length is 2',
              },
              maxLength: {
                value: 60,
                message: 'Max length is 60',
              },
              pattern: {
                value: /^[a-zA-Zа-яА-ЯА-ЯЁёЇїІіЄєҐґ]*$/,
              },
            })}
            placeholder="Your name"
          />
          <label>Your name</label>
          <p className={styles.error}>{errors.name?.message}</p>
        </div>

        <div className={styles.form_input__container}>
          <input
            className={errors.surname ? styles.input_error : styles.form_input}
            type="text"
            {...register('surname', {
              required: 'This is required',
              minLength: {
                value: 2,
                message: 'Min length is 2',
              },
              maxLength: {
                value: 60,
                message: 'Max length is 60',
              },
              pattern: {
                value: /^[a-zA-Zа-яА-ЯА-ЯЁёЇїІіЄєҐґ]*$/,
              },
            })}
            placeholder="Your surname"
          />
          <label>Your surname</label>
          <p className={styles.error}>{errors.surname?.message}</p>
        </div>

        <div className={styles.form_input__container}>
          <input
            className={errors.email ? styles.input_error : styles.form_input}
            type="email"
            {...register('email', {
              required: 'This is required',
              minLength: {
                value: 2,
                message: 'Min length is 2',
              },
              maxLength: {
                value: 100,
                message: 'Max length is 100',
              },
              pattern: {
                value:
                  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                message: 'example@gmail.com',
              },
            })}
            placeholder="Your email"
          />
          <label>Email</label>
          <p className={styles.error}>{errors.email?.message}</p>
        </div>

        <div className={styles.form_input__container}>
          <InputMask
            className={errors.phone ? styles.input_error : styles.form_input}
            type="tel"
            value={phoneValue}
            mask={'+380999999999'}
            {...register('phone', {
              onChange: e => {
                setPhoneValue(e.target.value);
              },
              required: 'This is required',
              pattern: /^[+]{0,1}380([0-9]{9})$/,
            })}
            placeholder="Your phone"
          />
          <label>Phone</label>
          <p className={styles.form_phone}>
            {errors.phone ? (
              <span className={styles.error}>+38 (XXX) XXX - XX - XX</span>
            ) : (
              '+38 (XXX) XXX - XX - XX'
            )}
          </p>
        </div>

        <div className={styles.form_input__container}>
          <InputMask
            className={errors.birthday ? styles.input_error : styles.form_input}
            type="text"
            value={birthdayValue}
            mask={'99.99.9999'}
            {...register('birthday', {
              required: 'This is required',
              onChange: e => {
                setBirthdayValue(e.target.value);
              },
              validate: value => {
                const yearNow = new Date().getFullYear();

                if (value.slice(6).length === 4 && value.slice(6) > yearNow) {
                  return false;
                }
              },
              pattern:
                /(0?[1-9]|[12][0-9]|3[01]).(0?[1-9]|1[012]).((19|20)\d\d)$/,
            })}
            placeholder="Your birthday"
          />
          <label>Birthday</label>
          <p className={styles.form_phone}>
            {errors.birthday ? (
              <span className={styles.error}>DD.MM.YYYY</span>
            ) : (
              'DD.MM.YYYY'
            )}
          </p>
        </div>

        <div className={styles.field__wrapper}>
          <label className={styles.field__lable}>
            <input
              className={styles.field__file}
              type="file"
              {...register('file', {
                required: 'This is required',
              })}
              accept=".jpg, .jpeg, .png"
              multiple
            />
            <div className={styles.field__button}>Upload</div>
            <div className={styles.field__fake}>
              {file ? (
                <span className={styles.span_file}>{resultFile}</span>
              ) : (
                'Upload your photo'
              )}
            </div>
          </label>
        </div>
        <p className={styles.error}>{errors.file?.message}</p>

        {/* {!loading ? ( */}
        <button className={styles.button} type="submit" disabled={disable}>
          Sign up
        </button>
        {/* ) : (
          <Loader />
        )} */}
      </form>
    </div>
  );
};

export default Form;
