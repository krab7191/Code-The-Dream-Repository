import React, { Component } from 'react'
class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="this is my footer">
                    <div className="container">
                        <div className="columns">
                            <div className="column">
                                <p style={{ paddingLeft: '500px' }}>{this.props.pageNo}</p>
                            </div>

                        </div>
                    </div>
                </footer>

            </div>

        )
    }
} export default Footer;