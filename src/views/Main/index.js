import React, { useContext } from 'react';
import { UserContext } from '../../providers/UserProvider';
import { auth } from '../../firebaseInit';
import Form from '../../components/Form';
import Button from '../../components/Button';

export default function Main() {
  const { user } = useContext(UserContext);

  return (
    <div className="w-full min-h-full">
      <h1>Hi {user.displayName}!</h1>
      <Form/>
      <Button onClick={() => auth.signOut()}>Sign Out</Button>
    </div>

  )
};