import React from 'react';

interface Prop {
  age: number;
  isAdmin?: boolean;
}

const UserProfile: React.FC<Prop> = ({ age, isAdmin = false }) => {
  return (
    <div>
      <p>Age: {age}</p>
      {isAdmin && <p>Admin User</p>}
    </div>
  );
};

export default UserProfile;
