import React from 'react'

const Register = () => {
  return (
    <main>
      <div>
            <div className="form-container">
              <h1>Register</h1>
              <form >
                <input type="text" name='username' placeholder='Enter username' />
                <input type="text" name="email" placeholder='Enter email
                ' />
                <input type="password" name='password' placeholder='Enter your password' />
                <button>Register</button>
              </form>
            </div>
      </div>
    </main>
  )
}

export default Register
