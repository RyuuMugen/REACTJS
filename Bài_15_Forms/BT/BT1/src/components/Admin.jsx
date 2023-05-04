import React, { useState, useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';

export default function Admin() {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsAdmin(false);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isAdmin) {
        navigate('/');
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [isAdmin, navigate]);

  return (
    <div>
      <h1>{isAdmin.toString()} back to home after 2s</h1>
      <h1>Admin Page</h1>
    </div>
  );
}
