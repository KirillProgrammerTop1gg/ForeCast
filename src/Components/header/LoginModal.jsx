import React, { useState } from 'react';
import {
    ModalOverlay,
    ModalContent,
    Button
} from './Header.styled';

const LoginModal = ({ onClose, onLogin }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        if (name && email) {
            onLogin({ name, email });
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <ModalOverlay>
            <ModalContent>
                <h2>Register</h2>
                <p>Enter your details below:</p>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{ width: '100%', padding: '10px', margin: '10px 0' }}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: '100%', padding: '10px', margin: '10px 0' }}
                />
                <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                    <Button onClick={handleSubmit}>Register</Button>
                    <Button onClick={onClose} style={{ backgroundColor: '#ddd', color: '#333' }}>
                        Cancel
                    </Button>
                </div>
            </ModalContent>
        </ModalOverlay>
    );
};

export default LoginModal;