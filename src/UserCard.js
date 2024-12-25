import React from 'react';
import PropTypes from 'prop-types';

function UserCard({ user }) {
  return (
    <div style={{display: 'flex',alignItems:'center',gap:'2rem',padding:'2rem',backgroundColor:'#EAF4FD',
    border: '2px solid black',borderRadius: '3%',boxShadow: '0 4px 6px rgba(0, 0, 0, 0.6), 0 1px 3px rgba(0, 0, 0, 0.06)'}}
    
    
    >
     
     <div >
      <img
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
       
        style={{height:'20vh'}}
      />

    </div>
     
     <div>
      <h2 className="text-center text-lg font-bold mt-4">
        {user.name.title} {user.name.first} {user.name.last}
      </h2>
      <div className="mt-4">
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Location:</strong> {`${user.location.city}, ${user.location.country}`}</p>
      </div>

      </div>
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserCard;
