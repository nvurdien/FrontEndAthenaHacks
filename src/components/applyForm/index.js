import React from 'react';
import './style.css';

class ApplyForm extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // get all data in form and return object
    getFormData(event) {
        let form = event.target;
        let elements = form.elements; // all form elements
        // eslint-disable-next-line
        let fields = Object.keys(elements).map(function (k) {
            if (elements[k].name !== undefined) {
                return elements[k].name;
                // special case for Edge's html collection
            } else if (elements[k].length > 0) {
                return elements[k].item(0).name;
            }
        }).filter(function (item, pos, self) {
            return self.indexOf(item) === pos && item;
        });
        let data = {};
        fields.forEach(function(k){
            data[k] = elements[k].value;
            let str = ""; // declare empty string outside of loop to allow
                          // it to be appended to for each item in the loop
            if(elements[k].type === "checkbox"){ // special case for Edge's html collection
                str = str + elements[k].checked + ", "; // take the string and append
                                                        // the current checked value to
                                                        // the end of it, along with
                                                        // a comma and a space
                data[k] = str.slice(0, -2); // remove the last comma and space
                                            // from the  string to make the output
                                            // prettier in the spreadsheet
            }else if(elements[k].length){
                for(let i = 0; i < elements[k].length; i++){
                    if(elements[k].item(i).checked){
                        str = str + elements[k].item(i).value + ", "; // same as above
                        data[k] = str.slice(0, -2);
                    }
                }
            }
        });

        // add form-specific values into the data
        data.formDataNameOrder = JSON.stringify(fields);
        console.log(data.formDataNameOrder);
        data.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
        data.formGoogleSendEmail = form.dataset.email || ""; // no email by default

        console.log(data);
        return data;
    }

    static validEmail(email) { // see:
        let re;
        re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
    }

    static validateHuman(honeypot) {
        if (honeypot) {  //if hidden form filled up
            console.log("Robot Detected!");
            return true;
        } else {
            console.log("Welcome Human!");
        }
    }

    handleSubmit(event) {  // handles form submit without any jquery
        event.preventDefault();           // we are submitting via xhr below
        let data = this.getFormData(event);         // get the values submitted in the form
        let submit = new FormData();
        /* OPTION: Remove this comment to enable SPAM prevention, see README.md
        if (validateHuman(data.honeypot)) {  //if form is filled, form will not be submitted
          return false;
        }
        */

        document.getElementById('message_status').innerHTML = '<div id="thankyou_message" class="uk-alert-success" uk-alert=""><p>Sending ...</p></div>';

        document.getElementById("email").classList.remove("uk-form-danger");
        document.getElementById("username").classList.remove("uk-form-danger");
        document.getElementById("password").classList.remove("uk-form-danger");
        document.getElementById("background_check_text").classList.remove("uk-form-danger");

        document.getElementById("email").classList.remove("uk-form-success");
        document.getElementById("username").classList.remove("uk-form-success");
        document.getElementById("password").classList.remove("uk-form-success");

        if( !data.email || !data.username || !data.password || !data.background_check){
            let prev = false;
            let innertext = "<div id=\"invalid\" class=\"uk-alert-danger\" uk-alert=\"\"> No";
            if(!data.email){
                innertext += ' Email';
                document.getElementById("email").classList.add("uk-form-danger");
                prev = true;
            }
            if(!data.username){
                if(prev) innertext += ',';
                document.getElementById("username").classList.add("uk-form-danger");
                innertext += ' Username';
                prev = true;
            }
            if(!data.password){
                if(prev) innertext += ',';
                document.getElementById("password").classList.add("uk-form-danger");
                innertext += ' Password';
            }
            if(!data.background_check){
                if(prev) innertext += ',';
                document.getElementById("background_check_text").classList.add("uk-form-danger");
                innertext += ' Background Check document'
            }
            // language=HTML
            innertext += ' provided </div>';
            document.getElementById("message_status").innerHTML = innertext;
        }
        else if( !ApplyForm.validEmail(data.email) ) {   // if email is not valid show error
            document.getElementById('message_status').innerHTML = '<div id="invalid" class="uk-alert-danger" uk-alert="">Invalid Email</div>';
            document.getElementById("email").classList.add("uk-form-danger");
            return false;
        } else {
            submit.append('file', this.uploadInput.files[0]);
            submit.append('username', data.username);
            submit.append('password', data.password);
            submit.append('email', data.email);
            document.getElementById("email").classList.add("uk-form-success");
            document.getElementById("username").classList.add("uk-form-success");
            document.getElementById("password").classList.add("uk-form-success");
            document.getElementById("submit").innerText = "Sending";
            document.getElementById("submit").setAttribute("disabled", "");
            let url = "http://athenahacksserver.azurewebsites.net/background";  // sign in
            fetch(url, {
                method: 'POST',
                body: submit,
            }).then((response) => {
                console.log(response);
            });
            document.getElementById('message_status').innerHTML = '<div id="thankyou_message" class="uk-alert-success" uk-alert=""><p>Message Sent! Thank you!</p></div>';
            document.getElementById("email").classList.remove("uk-form-success");
            document.getElementById("username").classList.remove("uk-form-success");
            document.getElementById("password").classList.remove("uk-form-success");
            document.getElementById("submit").innerText = "Submit";
            document.getElementById("submit").removeAttribute("disabled");


            //if it doesnt work
            document.getElementById("email").value = "";
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
            document.getElementById("background_check").value = "";
            document.getElementById("background_check_text").value = "";

        }
    }

    render() {
        return (
            <div className="uk-margin-auto uk-margin-auto-vertical uk-width-1-2@s">
                <div id="message_status">

                </div>
                <form onSubmit={this.handleSubmit}>

                    <fieldset className="uk-fieldset">
                        <h1>Apply for a Background Check</h1>
                        {/*<legend className="uk-legend"></legend>*/}
                        {/*<p>You may use the form or email us at </p>*/}
                        <div className="uk-margin">
                            <input alt="username" className="uk-input uk-form-width-large" id="username" label="" required="" name="username" placeholder="Username*" title="username"/>
                        </div>
                        <div className="uk-margin">
                            <input alt="email" className="uk-input uk-form-width-large" id="email" label="" required="" name="email" placeholder="Your Email*" title="email" type="email"/>
                        </div>
                        <div className="uk-margin">
                            <input alt="password" className="uk-input uk-form-width-large" id="password" label="" required="" name="password" placeholder="Password*" title="password" type="password"/>
                        </div>
                        {/*document*/}
                        <div className="uk-margin">
                            <div uk-form-custom="target: true">
                                <input ref={(ref) => { this.uploadInput = ref; }} name="background_check" id="background_check" title="background_check" type="file"/>
                                    <input id="background_check_text" className="uk-input uk-form-width-medium" type="text" placeholder="Select file*" disabled="" /><button className="uk-button uk-button-default" type="button" tabIndex="-1">Select</button>
                            </div>
                        </div>
                        <div className="uk-margin" uk-margin="">
                            <button type="submit" value="Submit" id="submit" className="uk-button uk-button-default uk-first-column">Submit</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default ApplyForm;