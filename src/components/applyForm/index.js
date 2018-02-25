import React from 'react';
import './style.css';

class ApplyForm extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            questions: [
                {
                    name: "username",
                    type: "text",
                    label: "Username",
                    placeholder: "Username*"
                },
                {
                    name: "email",
                    type: "email",
                    label: "Email",
                    placeholder: "Email*"
                },
                {
                    name: "password",
                    type: "password",
                    label: "Password",
                    placeholder: "Password*"
                },
                {
                    name: "lastName",
                    type: "text",
                    label: "Last Name",
                    placeholder: "Last Name*"
                },
                {
                    name: "firstName",
                    type: "text",
                    label: "First Name",
                    placeholder: "First Name*"
                },
                {
                    name: "middleName",
                    type: "text",
                    label: "Middle Name",
                    placeholder: "Middle Name*"
                },
                {
                    name: "street",
                    type: "text",
                    label: "Number and Street Address",
                    placeholder: "Number and Street Address*"
                },
                {
                    name: "city",
                    type: "text",
                    label: "City",
                    placeholder: "City*"
                },
                {
                    name: "county",
                    type: "text",
                    label: "County",
                    placeholder: "County*"
                },
                {
                    name: "birth",
                    type: "text",
                    label: "Place of birth (County, State OR Foreign Country",
                    placeholder: "Place of birth*"
                },
                {
                    name: "height_feet",
                    type: "text",
                    label: "Height in feet",
                    placeholder: "Height (feet)*"
                },
                {
                    name: "height_inches",
                    type: "text",
                    label: "Height in inches",
                    placeholder: "Height (inches)*"
                },
                {
                    name: "weight",
                    type: "text",
                    label: "Weight in pounds",
                    placeholder: "Weight (lb)*"
                },
                {
                    name: "sex",
                    type: "choice",
                    label: "Sex",
                    choices: [
                        "Female", "Male"
                    ]
                },
                {
                    name: "birthday_month",
                    type: "text",
                    label: "Birthday Month",
                    placeholder: "Birthday Month*"
                },
                {
                    name: "birthday_day",
                    type: "text",
                    label: "Birthday Day",
                    placeholder: "Birthday Day*"
                },
                {
                    name: "birthday_year",
                    type: "text",
                    label: "Birthday Year",
                    placeholder: "Birthday Year*"
                },
                {
                    name: "ssn",
                    type: "text",
                    label: "Social Security Number",
                    placeholder: "SSN"
                },
                {
                    name: "upin",
                    type: "text",
                    label: "Unique Personal Identification Number",
                    placeholder: "UPIN"
                },
                {
                    name: "ethnicity",
                    type: "choice",
                    label: "Ethnicity",
                    choices: [
                        "Hispanic or Latino", "Not Hispanic or Latino"
                    ]
                },
                {
                    name: "race",
                    type: "choice",
                    label: "Race",
                    choices: [
                        "American Indian or Alaska Native", "Asian", "Black or African American", "Native Hawaiian or Other Pacific Islander", "White"
                    ]
                },
                {
                    name: "buyer",
                    type: "choice",
                    label: "Are you the actual transferee/buyer of the firearms listed?",
                    choices: [
                        "Yes", "No"
                    ]
                },
                {
                    name: "indictment",
                    type: "choice",
                    label: "Are you under the indictment or information in any court for a felony?",
                    choices: [
                        "Yes", "No"
                    ]
                },
                {
                    name: "felony",
                    type: "choice",
                    label: "Have you ever been convicted in any court of a felony?",
                    choices: [
                        "Yes", "No"
                    ]
                },
                {
                    name: "fugitive",
                    type: "choice",
                    label: "Are you a fugitive from justice?",
                    choices: [
                        "Yes", "No"
                    ]
                },
                {
                    name: "substance",
                    type: "choice",
                    label: "Are you an unlawful user of any controlled substance?",
                    choices: [
                        "Yes", "No"
                    ]
                },
                {
                    name: "mental",
                    type: "choice",
                    label: "Have you ever been adjudicated as a mental defective?",
                    choices: [
                        "Yes", "No"
                    ]
                },
                {
                    name: "discharged_army",
                    type: "choice",
                    label: "Have you been discharged from the Armed Forces under dishonorable conditions?",
                    choices: [
                        "Yes", "No"
                    ]
                },
                {
                    name: "restraining_order",
                    type: "choice",
                    label: "Are you subject to a court restraining order?",
                    choices: [
                        "Yes", "No"
                    ]
                },
                {
                    name: "misdemeanor",
                    type: "choice",
                    label: "Have you ever been convicted in any court of a misdemeanor?",
                    choices: [
                        "Yes", "No"
                    ]
                },
                {
                    name: "citizenship",
                    type: "text",
                    placeholder: "Country of Citizenship",
                    label: "Country of Citizenship (USA or Other please specify)*",
                    choices: [
                        "Yes", "No"
                    ]
                },
                {
                    name: "renounced_citizenship",
                    type: "choice",
                    label: "Have you ever renounced your US citizenship?",
                    choices: [
                        "Yes", "No"
                    ]
                },
                {
                    name: "alien",
                    type: "choice",
                    label: "Are you an alien illegally and unlawfully in the US?",
                    choices: [
                        "Yes", "No"
                    ]
                },
                {
                    name: "alien_number",
                    type: "text",
                    placeholder: "US issued Alien or Admission Number",
                    label: "If you are an alien, record your US issued Alien or Admission Number:"
                },
                {
                    name: "signature_1",
                    type: "choice",
                    label: "I certify that my answers in Section A are true, correct, and complete. I have read and understand the Notices," +
                    "Instructions, and Definitions on ATF Form 4473. I understand that answering 'yes' to previous questions if I am not the " +
                    "actual transferee/buyer is a crime punishable as a felony under Federal law, and may also violate State and/or local law. I understand" +
                    " that a person who answers 'yes' previous questions is prohibited from purchasing or receiving a firearm. I understand that a " +
                    "person who answers 'yes' to previous questions is prohibited from receiving or possessing a firearm, unless the person answers 'yes' to previous questions and provides the documentation" +
                    " required in a previous question. I also understand that making any false oral or written statement, or exhibiting any false " +
                    "or misrepresented identification with respect to this transaction, is a crime punishable as a felony under Federal law, and " +
                    "may also violate State and/or local law. I further understand that the repetitive purchase of firearms for the purpose of resale for livelihood" +
                    " and profit without a Federal firearms license is a violation of Federal law. ",
                    choices: [
                        "Yes", "No"
                    ]
                }
            ]
        };
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

        this.state.questions.forEach((question) => {
            if((question.type == "text" || question.type == "password" || question.type == "email")){
                document.getElementById(question.name).classList.remove("uk-form-danger");
            }
        });

        document.getElementById('message_status').innerHTML = '<div id="thankyou_message" class="uk-alert-success" uk-alert=""><p>Sending ...</p></div>';

        console.log(data);
        let prev = false;
        let innertext = "<div id=\"invalid\" class=\"uk-alert-danger\" uk-alert=\"\"> No";
        this.state.questions.forEach((question) => {
            if(question.type == "text" || question.type == "password" || question.type == "email")
            if(!document.getElementById(question.name).value){
                if(prev) innertext += `, `;
                innertext += ` ${question.label}`;
                document.getElementById(question.name).classList.add("uk-form-danger");
                prev = true;
            }
        });
        innertext = "</div>";
        if(prev) {
            document.getElementById('message_status').innerHTML = innertext;
            return false;
        }


        if( !ApplyForm.validEmail(data.email) ) {   // if email is not valid show error
            document.getElementById('message_status').innerHTML = '<div id="invalid" class="uk-alert-danger" uk-alert="">Invalid Email</div>';
            document.getElementById("email").classList.add("uk-form-danger");
            return false;
        } else {
            submit.append('username', data.username);
            submit.append('passwd', data.password);
            submit.append('email', data.email);
            submit.append("status", "yes");
            document.getElementById("submit").innerText = "Sending";
            document.getElementById("submit").setAttribute("disabled", "");
            let url = "https://athenahacksserver.azurewebsites.net/background";  // sign in
            fetch(url, {
                headers: {  'Access-Control-Allow-Origin': 'http://localhost:3000' },
                method: 'POST',
                body: submit,
            }).then((response) => {
                console.log(response);
            });
            document.getElementById('message_status').innerHTML = '<div id="thankyou_message" class="uk-alert-success" uk-alert=""><p>Message Sent! Thank you!</p></div>';
            document.getElementById("submit").innerText = "Submit";
            document.getElementById("submit").removeAttribute("disabled");
            //if it doesnt work
            document.getElementById("email").value = "";
            document.getElementById("username").value = "";
            document.getElementById("password").value = "";

        }
    }

    render() {
        let variables = this.state.questions;
        return (
            <div>
                <div id="message_status">

                </div>
                <div className="uk-margin-auto uk-margin-auto-vertical uk-width-1-2@s">

                    <form onSubmit={this.handleSubmit}>
                        <input name="_key" type="hidden" value="138ejFgO6EuEQoFps0JdlA"/>
                            <input name="_redirecturl" type="hidden" value="http://localhost:5000/"/>
                        <fieldset className="uk-fieldset">
                            <h1>Apply for a Background Check</h1>
                            {/*<legend className="uk-legend"></legend>*/}
                            {/*<p>You may use the form or email us at </p>*/}

                            {
                                variables.map((val) => {
                                    if (val.type === "choice") {
                                        return <div>
                                            <label for={val.name}>{val.label}</label>
                                            <div className="uk-margin-small">
                                                {
                                                    val.choices.map((c) => (
                                                        <label><input value={val.name} className="uk-radio" type="radio" name={val.name} title={val.name}/> {c} </label>
                                                    ))
                                                }

                                            </div>
                                        </div>
                                    }
                                    else {
                                        return <div>
                                            <label for={val.name}>{val.label}</label>
                                            <div className="uk-margin-small">
                                                <input alt={val.name} className="uk-input uk-form-width-large"
                                                       id={val.name} label="" required="" name={val.name}
                                                       placeholder={val.placeholder} type={val.type} title={val.name}/>
                                            </div>
                                        </div>
                                    }
                                })
                            }
                            <div className="uk-margin-small" uk-margin="">
                                <button type="submit" value="Submit" id="submit" className="uk-button uk-button-default uk-first-column">Submit</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}

export default ApplyForm;