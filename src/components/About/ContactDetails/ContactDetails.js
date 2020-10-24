import React from 'react';
import classes from './ContactDetails.module.css';

import DownloadButton from '../../UI/Button/DownloadButton/DownloadButton';

const ContactDetails = (props) => {

    let name;
    let currentCity;
    let email;

    if(props.data) {
        name = props.data.name;
        currentCity = props.data.currentCity;
        email = props.data.email;
    }



    return (
        <div className={classes.ContactDetails}>
            <h2>Contact Details</h2>
            <div className={classes.Content}>
                <div>
                    <table>
                        <tr>
                            <td>Name：</td>
                            <td>Gaku Jinyama</td>
                        </tr>
                        <tr>
                            <td>Place：</td>
                            <td>Tokyo, Japan</td>
                        </tr>
                        <tr>
                            <td>Email：</td>
                            <td>gaku.jinyama.jp@gmail.com</td>
                        </tr>
                    </table>
                </div>
                <div className={classes.Download}>
                    <DownloadButton>Download Resume</DownloadButton>
                </div>
            </div>
        </div>
    );
}

export default ContactDetails;