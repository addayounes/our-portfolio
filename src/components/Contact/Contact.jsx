import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import emailjs from "emailjs-com";
import MyTextField from "../TextField/MyTextField";
import "../TextField/TextField.css";
import language from "../../language";

const messageSchema = yup.object({
    name: yup
        .string()
        .required("le nom est un champ obligatoire")
        .max(22)
        .min(3, "le nom doit comporter au moins 3 caractères"),
    email: yup
        .string()
        .email("l'email doit être un email valide")
        .required("l'adresse mail est un champ obligatoire"),
    message: yup.string().required(),
});

const sendMessage = (templateId, userId, variables) => {
    emailjs
        .send("service_ykd0m2u", templateId, variables, userId)
        .then((res) => {
            console.log();
        })
        .catch((err) => console.error(err));
};
const submitForm = (data) => {
    const templateId = "template_dhcj2le";
    const userId = "user_spT0gesNImN6sDQ9pUGBm";
    sendMessage(templateId, userId, data);
};

const Contact = ({ Language }) => {
    const [messageSent, setMessageSent] = useState(false);
    const initialValues = {
        name: "",
        email: "",
        message: "",
    };
    return (
        <section className="contact" name="contact">
            <div className="contact-us">
                <h1>{language[Language].Contact.heading}</h1>
                <Formik
                    validationSchema={messageSchema}
                    initialValues={initialValues}
                    onSubmit={(data, { resetForm, setSubmitting }) => {
                        setSubmitting(true);
                        submitForm(data);
                        setSubmitting(false);
                        setMessageSent(true);
                        resetForm();
                        setTimeout(function () {
                            setMessageSent(false);
                        }, 2000);
                    }}
                >
                    {({ isSubmitting }) => {
                        return (
                            <Form>
                                <Field
                                    name="name"
                                    placeholder={
                                        language[Language].Contact
                                            .namePlaceholder
                                    }
                                    type="text"
                                    as={MyTextField}
                                />
                                <Field
                                    name="email"
                                    placeholder={
                                        language[Language].Contact
                                            .emailPlaceholder
                                    }
                                    type="text"
                                    as={MyTextField}
                                />
                                <Field
                                    placeholder="Message"
                                    name="message"
                                    type="text"
                                    messageSent={messageSent}
                                    textarea
                                    as={MyTextField}
                                />
                                <input
                                    disabled={isSubmitting}
                                    type="submit"
                                    value={language[Language].Contact.Button}
                                    className={`active-submit ${
                                        isSubmitting ? "disabled" : ""
                                    }`}
                                />
                            </Form>
                        );
                    }}
                </Formik>
            </div>
        </section>
    );
};

export default Contact;
