import sendIcon from "./assets/send.svg";

export default function InputField() {
    return (
        <div className="input-field-container">
            <input
                type="text"
                className="input-field"
                placeholder="Talk to our AI finance expert"
            />
            <button className="send-button">
                <img src={sendIcon} alt="Send Icon" />
            </button>
        </div>
    );
}
