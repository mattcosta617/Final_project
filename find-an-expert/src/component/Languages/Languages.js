import React from 'react';
import { Link } from 'react-router-dom';
// import LanguageModel from '../../model/language';

function Language(props) {
    

    return(
        <Link to={'/languages/${language._id}'}>
        <div className="">
            <section>
                <h4>Language Page</h4>
               
            </section>
        </div>
        </Link>
    )
}

export default Language;