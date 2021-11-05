import React, { Component } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe"
import CustomForm from './CustomForm';



export default class Demo extends Component {
    render() {
      const url =
        `https://leebi.us20.list-manage.com/subscribe/post?u=${process.env.MAILCHIMP_U}&amp;id=${process.env.MAILCHIMP_ID}`; // hide secrets in prod
      return (
        <div>
          
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <CustomForm
                status={status}
                message={message}
                onValidated={formData => subscribe(formData)}
              />
            )}
          />
        </div>
      );
    }
  }