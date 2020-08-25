import React from 'react';
import { Link } from 'react-router-dom';

function Language(props) {
    const { language, list } = props;

    return(
        <Link to={'/languages/${language._id}'}>
        <div className="">
            <section>
                <h4>{language}</h4>
               
            </section>
        </div>
        </Link>
    )
}

export default Language;