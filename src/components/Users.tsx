import React from "react";

type userProps = {
  user: {
    name: string;
    email: string;
    skills: string[];
  };
};

const Users = ({ user: { name, email, skills } }: userProps) => {
  return (
    <div>
      <h3>{name}</h3>
      <h3>{email}</h3>
      <ul>
        {skills.map((sk) => (
          <li key={sk}>{sk}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
