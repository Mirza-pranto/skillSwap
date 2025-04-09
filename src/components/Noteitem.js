import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const Noteitem = (props) => {
    const { note } = props;

    return (
        <div className="col-md-3 my-3">
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <FontAwesomeIcon icon={faTrash} style={{ cursor: 'pointer', color: 'red' }} />
                    <FontAwesomeIcon icon={faPenToSquare} style={{ cursor: 'pointer', color: 'blue', marginLeft: '10px' }} />
                </div>
            </div>
        </div>
    );
};

export default Noteitem;
