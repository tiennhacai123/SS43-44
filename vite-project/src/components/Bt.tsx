import React from 'react'
import { Button, Form } from 'react-bootstrap'

export default function Bt() {
  return (
    <div>Bt
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-[850px]">
  <div className="md:flex">
    <div className="md:shrink-0">
    <img className='"h-48 w-full object-cover md:h-full md:w-48"' src="https://www.si.com/esports/.image/t_share/MjAxMDgzMTI3MjE1NDMzNTkz/reynavalorant.jpg" style={{width:'400px',height:'450px'}}  alt="" />
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold text-[20px]">Login</div><br />
      <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control style={{width:'400px'}} type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        <a href="#" style={{color:'blue',display:'flex',justifyContent:'end'}}>Forget password ?</a>
        <br />
        <div>
        <Button style={{width:'400px'}} variant="primary">Login</Button>{' '}
        </div><br />
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <hr style={{ flex: 1, borderWidth: '1px', borderColor: 'black' }} />
            <span style={{ padding: '0 10px' }}>or</span>
            <hr style={{ flex: 1, borderWidth: '1px', borderColor: 'black' }} />
        </div>
        <div>
        <Button style={{width:'400px'}} variant="secondary">Register now</Button>{' '}
        </div>
      </Form.Group>
    </Form>
    </div>
  </div>
</div>
    </div>
  )
}
