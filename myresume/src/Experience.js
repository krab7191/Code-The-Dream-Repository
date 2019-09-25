import React, { Component } from 'react'
import ExperienceList from './ExperienceList'
class Experience extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ExperienceList: ExperienceList
        }
    }
    render() {
        return (
            <div className="Experince">
                
                <div style={{ paddingLeft: '80px' }}>{

                    this.state.ExperienceList.map((rowdata, exp) =>
                        <div>
                            <p  >
                               <b><i>{rowdata.Roll}</i></b><br/>
                               <b><i>{rowdata.Company}</i></b> <br/>
                                <i>{rowdata.Descriprion}</i>
                            </p>


                            {
                                (typeof (rowdata.detail) == 'object') ?
                                    <div>
                                        {rowdata.detail.map((subRowData, exp1) =>
                                            <div>
                                                <ul>

                                                    <li>{subRowData.detail1}</li>
                                                    <li>{subRowData.detail2}</li>
                                                    <li>{subRowData.detail3}</li>
                                                    <li>{subRowData.detail4}</li>
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
            } 
export default Experience;