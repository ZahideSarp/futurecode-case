import React from "react";
import { ContactUs } from "../components/contact/contact";
import Spacer from "../components/common/spacer";
const ContactPages = () => {
  return (
    <>
      <Spacer height={110} />
      <ContactUs />
      <Spacer height={30} />
    </>
  );
};

export default ContactPages;
