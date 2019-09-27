import React, { Component, Fragment } from 'react';  // Don't forget formatting!!
import Developmentlist from './Developmentlist';
class Development extends Component {
    constructor(props) {
        super(props);
        this.State = {
            Developmentlist: Developmentlist // Nice work using state!!
        }
    }

    render() {

        return (
            <> {/* As of React 16 you can use 'fragments' so your html doesn't become cluttered */}
                {
                    this.State.Developmentlist.map((rowdata, i) => // Use the index unless you have a read database unique primary key
                        <Fragment key={i}>  {/* Nice job with the fragment here! You can use the same strategy as Component with importing. */}
                            <h5 ><i> {rowdata.Roll}</i></h5>

                            {
                                (typeof (rowdata.detail) == 'object') &&
                                <div>
                                    {rowdata.detail.map((subRowData, i) =>
                                        // You don't need this fragment since the 'ul' is already the unique parent element
                                        <ul key={i}> {/* Again use map index */}
                                            <li>{subRowData.detail1}</li>
                                            <li>{subRowData.detail2}</li>
                                            <li>{subRowData.detail3}</li>
                                        </ul>
                                    )
                                    }
                                </div>  // Since you don't have a meaningful 2nd condition for this ternary operator, you can just use a 'logical and' operator
                            }
                        </Fragment>
                    )
                }
            </>
        )
    }
} export default Development;