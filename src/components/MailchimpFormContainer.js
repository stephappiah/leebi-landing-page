import React, { Component } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe"
import CustomForm from './CustomForm';



export default class Demo extends Component {
    render() {
      const url =
        "https://leebi.us20.list-manage.com/subscribe/post?u=f2c401429ba181ddcae164829&amp;id=7e2b75c9bc"; // hide secrets in prod
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