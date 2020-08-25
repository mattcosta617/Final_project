import React from 'react';
import Language from '../Languages/Languages';


function LanguageList(props) {
    const languageList = props.languages.map((languageObj) => {
        return <Language key={languageObj._id} language={languageObj} list={true} />
    });

        return (
            <div>
            {languageList}
            </div>
        )
}

          

export default LanguageList;