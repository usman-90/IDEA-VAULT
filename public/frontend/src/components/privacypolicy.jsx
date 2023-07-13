import NavbarTerms from "./navbar/navbar3";
const Privacy = () => {
  return (
    <div>
      <NavbarTerms />
      <div className="container bg-white p-4 rounded mb-5">
        <h2> Privacy Policy: </h2>
        <p>
          <ul>
            <li>
              {" "}
              <b>Data Collection: </b> We collect personal information (such as
              name and email address) during the registration process. We may
              also collect non-personal information, such as usage statistics
              and cookies, to improve the platform&apos;s performance and user
              experience.{" "}
            </li>{" "}
            <br></br>
            <li>
              {" "}
              <b>Data Usage: </b> We use the collected information to provide
              and improve our services, personalize user experience, communicate
              with users, and facilitate investor-entrepreneur connections. We
              do not sell or share personal information with third parties
              without user consent, except as required by law.{" "}
            </li>{" "}
            <br></br>
            <li>
              {" "}
              <b>Security: </b>We implement reasonable security measures to
              protect user information from unauthorized access, alteration, or
              disclosure. However, no method of transmission or storage is 100%
              secure, and we cannot guarantee absolute security.{" "}
            </li>{" "}
            <br></br>
            <li>
              {" "}
              <b>Third-Party Links: </b>The platform may contain links to
              third-party websites or services. We are not responsible for the
              privacy practices or content of those websites. Users should
              review the privacy policies of third-party sites before providing
              any personal information.
            </li>{" "}
            <br></br>
            <li>
              <b>Data Retention:</b> We retain user information as long as
              necessary to fulfill the purposes for which it was collected,
              comply with legal obligations, resolve disputes, and enforce our
              agreements.
            </li>{" "}
            <br></br>
            <li>
              <b>Childrens Privacy:</b> The platform is not intended for use by
              individuals under the age of 18. We do not knowingly collect
              personal information from children. If we become aware of any data
              collected from children, we will take appropriate steps to delete
              it.{" "}
            </li>{" "}
            <br></br>
            <li>
              <b>Contact Information:</b> If you have any questions or concerns
              regarding our terms and conditions or privacy policy, please
              contact us at [email protected]{" "}
            </li>{" "}
            <br></br>
          </ul>
        </p>
      </div>
    </div>
  );
};
export default Privacy;
