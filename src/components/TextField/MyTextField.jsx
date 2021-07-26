import { useField } from "formik";
import { FaCheck } from "react-icons/fa";
import "./TextField.css";

const ErrorText = ({ errorMessage, className, sent }) => {
    return (
        <div className={`error-text ${className}`}>
            {sent && <FaCheck className="message-sent-icon" />}
            {errorMessage}
        </div>
    );
};

const MyTextField = ({
    placeholder,
    errorMessage,
    textarea,
    type,
    messageSent,
    ...props
}) => {
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : "";
    return (
        <>
            {textarea ? (
                <div className="input">
                    <textarea
                        rows="3"
                        type={type}
                        placeholder={placeholder}
                        {...field}
                    />
                    {messageSent && (
                        <ErrorText
                            className="message-sent"
                            errorMessage="Message Sent"
                            sent
                        />
                    )}
                </div>
            ) : (
                <div className="input">
                    <input type={type} placeholder={placeholder} {...field} />
                    <ErrorText errorMessage={errorText} />
                </div>
            )}
        </>
    );
};

export default MyTextField;
