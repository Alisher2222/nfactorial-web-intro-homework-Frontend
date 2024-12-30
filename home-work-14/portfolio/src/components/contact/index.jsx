import "./../style/contact.css";
export default function Contact(){
    return(
        <div className="contact" id = "contact">
            <p className="contact-heading">Contact</p>
            <p className="contact-description">Got a question or interested in collaborating? Share your details, and I'll reach out to you as soon as possible.</p>
            <input type="text" placeholder="Name" className="input"/>
            <input type="text" placeholder="Email" className="input"/>
            <input type="text" placeholder="Message" className="input-message"/>
            <button className="submit-button">SUBMIT</button>
        </div>
    );
}