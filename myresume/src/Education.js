import React, { Component } from 'react'
import EdictionList from './EducationList'
class Education extends Component {
    constructor(props) {
        super(props)
        this.state = {
            EducationList: EdictionList
        }
    }
    render() {
        return (
            <div className="Education" style={{ paddingLeft: '83px' }}>
                
                <div>
                    {
                        this.state.EducationList.map((datarow, edu) =>
                            <div>
                                <p>
                                   <b><i>{datarow.university}</i></b> <br />
                                    <i>{datarow.country}</i>
                                </p>
                                {
                                    (typeof (datarow.Description) == 'object') ?
                                    <div>
                                        {datarow.Description.map((subDatarow, edu) =>
                                            <div>
                                                <ul>

                                                    <li>{subDatarow.Description1}</li>

                                                </ul>
                                            </div>
                                        )
                                        }
                                    </div> : null
                                }
                            </div>
                        )
                    }

                </div>


            </div>
        )
    }
} export default Education;
