const ModalLoginForm: React.FC = () => {
  return (
    <>
      <div className = 'login-form'>
        <div className = 'header-text'>LogIn MooMark</div>
        <input type='text' placeholder = 'Your Email Address'/>
        <input type='password' placeholder = 'PassWord'/>
        <input type="checkbox" id="terms"/><p>Remember me</p>
        <button>Login</button>
      </div>

   </>
  );
};

export default ModalLoginForm;
