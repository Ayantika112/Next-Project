import React from 'react';

export default function UserDetail({ userData }){
  return (
    <div>
      <h1>User Details</h1>
      <p>ID: {userData.id}</p>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params; 

  const response = await fetch(`https://dummyjson.com/users/${id}`);
  const userData = await response.json();

  return { props: { userData } };
}
