import React from 'react';

export default ({ data, active, id }) => {
  if (!data || !data.person[active]) { return <h3>Nothing found :(</h3>; }

  const people = data.person[active];

  return (
    <div className="table_active">
        <img src={people.avatar} alt={people.firstName} />
          <div className="nameActiveUser">
            {people.firstName + ' '}
            {people.lastName}
          </div>
          <div className="jobActiveUser">
            {people.company + ', '}
            {people.position}
          </div>
    </div>
  );
};  