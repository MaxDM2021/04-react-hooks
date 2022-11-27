import styles from './SignumForm.module.css';
import useLocalStorage from 'components/hooks';
// import { useEffect } from 'react';




export default function SignupForm() {
  const [email, setEmail] = useLocalStorage('email', '');
  const [password, setPassword] = useLocalStorage('password', '');

  // const handleEmailChange = event => {
  //     setEmail(event.target.value);
  // }

  // const handlePasswordChange = event => {
  //     setPassword(event.target.value);
  // }

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };


  return (
    <form className={styles.form} autoComplete="off">
      <label className={styles.label}>
        <span>Почта</span>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </label>

      <label className={styles.label}>
        <span>Пароль</span>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </label>

      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}

// ===Теория новый оператор ?? ===

// ( только  если undefined или null возвращает значение справа )

// console.log(undefined ?? 1); - вернет 1
// console.log(null ?? 5); вернет 5
// console.log(0 ?? 1); вернет 0
// console.log(false ?? true) вернет false



// Подсказки по ДЗ:

// useEffect(() => {
//   // http
// }, [query, page])

// Кнопка Load more
// {/* <button onClick={() => setPage(page => page + 1)}>Load more</button> */}

// Время 1:56




// ========== Старая версия ============



// class OldSignupForm extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = evt => {
//     const { name, value } = evt.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <form className={styles.form} autoComplete="off">
//         <label className={styles.label}>
//           <span>Почта</span>
//           <input
//             type="email"
//             name="email"
//             onChange={this.handleChange}
//             value={this.state.email}
//           />
//         </label>

// <label className={styles.label}>
//   <span>Пароль</span>
//   <input
//     type="password"
//     name="password"
//     onChange={this.handleChange}
//     value={this.state.password}
//   />
// </label>

//         <button type="submit">Зарегистрироваться</button>
//       </form>
//     );
//   }
// }