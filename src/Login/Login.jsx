// Suggested code may be subject to a license. Learn more: ~LicenseLog:1802234084.
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3505889855.
import { Button, Input, Form, FormGroup, Label } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Login() {
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2146666888.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3222477534.
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        //Basico para la autenticacion
        if (email === 'admin@admin.com' && password === 'admin') {
            navigate('/home');
        } else {
            alert('Credenciales incorrectas');
        }
    };

    return (
        <div className="login-form">
            <h2>Iniciar Sesión</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Contraseña</Label>
                    <Input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </FormGroup>
                <Button color="primary" type="submit">Iniciar Sesión</Button>
            </Form>

        </div>            
    );

}
export default Login;