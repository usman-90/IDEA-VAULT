import React from "react";
import NavbarTerms from "../../components/navbar/navbar3";const Copyright = () => {
  return (
    <div>
      <NavbarTerms />
      <div className="container bg-white p-4 rounded mb-5">
        <h2>Copyright Policy:</h2>
        <ul style={{ fontSize: 20 }}>
          <li>
            <b>Intellectual Property:</b> All content and materials available on
            the Idea Vault platform, including but not limited to text,
            graphics, logos, images, software, and audiovisual elements, are the
            intellectual property of their respective owners, including the
            platform itself and its users.
          </li>{" "}
          <br />
          <li>
            <b>Ownership of Ideas: </b> Users retain the intellectual property
            rights to the ideas they submit to the platform. By submitting an
            idea, users grant the platform and other users a non-exclusive,
            royalty-free license to view, evaluate, and potentially invest in
            the idea. Users are responsible for ensuring that their submissions
            do not infringe upon the intellectual property rights of others.
          </li>{" "}
          <br />
          <li>
            <b>DMCA Compliance: </b> We respect the intellectual property rights
            of others and expect our users to do the same. If you believe that
            any content on the platform infringes upon your copyright, please
            follow the procedures outlined in our Digital Millennium Copyright
            Act (DMCA) Notice and Takedown Policy.
          </li>{" "}
          <br />
          <li>
            <b>DMCA Notice and Takedown: </b> To submit a DMCA notice for
            copyright infringement, please provide our designated copyright
            agent with the following information: <br />
            <ol>
              <li>
                A physical or electronic signature of the copyright owner or a
                person authorized to act on their behalf.
              </li>
              <li>
                Identification of the copyrighted work claimed to have been
                infringed, or, if multiple copyrighted works are covered by a
                single notification, a representative list of such works.
              </li>
              <li>
                Identification of the infringing material and its location on
                the platform, including specific URLs.
              </li>
              <li>
                Sufficient contact information to allow us to reach you, such as
                your name, address, telephone number, and email address.
              </li>
              <li>
                A statement that you have a good faith belief that the use of
                the material in the manner complained of is not authorized by
                the copyright owner, its agent, or the law.
              </li>
              <li>
                A statement that the information in the notification is
                accurate, and under penalty of perjury, that you are the
                copyright owner or authorized to act on behalf of the owner.
              </li>
            </ol>
          </li>{" "}
          <br />
          <li>
            <b>Counter-Notice: </b> If you believe that your content was removed
            or disabled as a result of a mistake or misidentification, you may
            submit a counter-notice to our designated copyright agent. The
            counter-notice must include the following information: <br />
            <ol>
              <li>Your physical or electronic signature.</li>
              <li>
                Identification of the material that has been removed or to which
                access has been disabled, including specific URLs.
              </li>
              <li>
                A statement under penalty of perjury that you have a good faith
                belief that the material was removed or disabled as a result of
                mistake or misidentification.
              </li>
              <li>Your name, address, telephone number, and email address.</li>
              <li>
                A statement that you consent to the jurisdiction of the federal
                district court for the judicial district in which your address
                is located (or the federal district courts located in that
                district if your address is outside the United States), and that
                you will accept service of process from the person who provided
                the original DMCA notification or an agent of such person.
              </li>
            </ol>
          </li>{" "}
          <br />
          <li>
            <b>Repeat Infringers: </b> We reserve the right to terminate user
            accounts that are found to be repeat infringers of copyright.
          </li>{" "}
          <br />
          <li>
            <b>Contact Information: </b> If you have any questions or concerns
            regarding our copyright policy, please contact us at [email
            protected]
          </li>{" "}
          <br />
        </ul>
      </div>
    </div>
  );
};
export default Copyright;
