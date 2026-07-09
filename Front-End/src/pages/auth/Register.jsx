import { useState } from "react"
import { registerUser } from "../../features/actions/user/userAction";
import { nanoid} from 'nanoid';
const Register = () => {
  const [users, setUsers] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setUsers((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    users.id = nanoid();
    registerUser(users);

  };


  return (
    <div>
      <form onSubmit={submitHandler}>
        <input name="username" value={users.username} onChange={handleChange} className="outline-0" type="text" placeholder="Enter your username" /> <br /> <br />
        <input name="email" value={users.email} onChange={handleChange} className="outline-0" type="email" placeholder="Enter your email" /> <br /> <br />
        <input name="password" value={users.password} onChange={handleChange} className="outline-0" type="password" placeholder="Enter your password" /> <br /> <br />
        <input name="confirmPassword" value={users.confirmPassword} onChange={handleChange} className="outline-0" type="password" placeholder="Enter your confirm pass" /> <br /> <br />
        <button className="bg-blue-600">register</button>
      </form>
    </div>
  )
}

export default Register