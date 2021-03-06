import React, { Component } from 'react';
// import Language from '../Languages/Languages';
import LanguageModel from '../../model/language';
import { Link } from 'react-router-dom';





class LanguageList extends Component {
    state = {
        languages: [],
    }

    
    componentDidMount() {
    LanguageModel.getAllLanguages()
    .then(res => this.setState({languages: res}))
    }
    
    render() {
        let languages = this.state.languages;
        const result = languages.map((language) => {
            return  <Link to="/languages/:${language._id}">
                        <div>
                            <h2>{language.language}</h2>
                            <p>{language._id}</p>
                        </div>
                    </Link>

        })

        return (
            <div>
                {result}
            </div>
        )
    }
}

          

export default LanguageList;