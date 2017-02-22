import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import styles from './Family.css';

const Family = (props) => (
  <div className={styles.familyContainer}>
    <h3>
      { props.lastname } Family
    </h3>
    <div className={styles.familyPhone}>
      Phone: {props.phone}
    </div>
    <div className={styles.familyMembers}>
      {props.members.join(',')}
    </div>
    {props.editable &&
      <div className={styles.familyActions}>
        <Button bsStyle="success" style={{ float: 'right' }}>
          <Link to={`/admin/family/edit/${props.id}`} title="Edit Family">
            Edit Family
          </Link>
        </Button>
      </div>
    }

  </div>
);

Family.propTypes = {
  id: React.PropTypes.number,
  lastname: React.PropTypes.string,
  phone: React.PropTypes.string,
  members: React.PropTypes.arrayOf(React.PropTypes.string),
  editable: React.PropTypes.bool
};

export default Family;
