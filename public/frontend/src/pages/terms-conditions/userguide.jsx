import NavbarTerms from "./navbar/navbar3";

const User = () => {
  return (
    <div>
      <NavbarTerms />
      <div className="container  bg-white p-4 rounded mb-5">
        <h2>User Guidelines:</h2>
        <ul style={{ fontSize: 20 }}>
          <li>
            {" "}
            <b>Respect Intellectual Property: </b> Ensure that you have the
            necessary rights or permissions to the ideas and content you submit
            to the platform. Do not infringe upon the intellectual property
            rights of others. If you believe your intellectual property rights
            have been violated, follow the procedures outlined in our Copyright
            Policy.
          </li>{" "}
          <br />
          <li>
            <b>Professional and Ethical Conduct:</b> Interact with other users
            in a professional and respectful manner. Avoid engaging in abusive,
            offensive, or harassing behavior. Treat others with courtesy and
            uphold ethical standards throughout your interactions on the
            platform.
          </li>{" "}
          <br />
          <li>
            <b>Accuracy of Information:</b> Provide accurate and truthful
            information when submitting ideas or engaging in discussions.
            Misleading or false information can harm the credibility of the
            platform and undermine the trust within the community.
          </li>
          <br />
          <li>
            <b>Confidentiality and Privacy:</b> Respect the confidentiality of
            ideas and information shared on the platform. Do not disclose or
            misuse sensitive or proprietary information without proper
            authorization. Protect your own privacy by not sharing personal
            contact information or engaging in any form of unauthorized data
            collection.
          </li>
          <br />
          <li>
            <b>Compliance with Laws and Regulations:</b> Ensure that your
            activities on the platform comply with applicable laws, regulations,
            and industry standards. Do not engage in any illegal or unethical
            activities that may jeopardize the platform or its users.
          </li>{" "}
          <br />
          <li>
            <b>Responsible Investing: </b>Investors are responsible for
            conducting their due diligence and making informed investment
            decisions. Assess the risks associated with each investment
            opportunity and seek professional advice when necessary. Avoid
            engaging in fraudulent or deceptive investment practices.{" "}
          </li>
          <br />
          <li>
            <b>Feedback and Ratings:</b> Provide constructive and respectful
            feedback when rating ideas or interacting with other users. The
            feedback system is designed to promote fair and helpful evaluations.
            Do not engage in fake or malicious ratings.
          </li>
          <br />
          <li>
            <b>Security and Account Protection: </b>Safeguard your account
            credentials and protect them from unauthorized access. Do not share
            your login information with others. If you suspect any suspicious
            activity, promptly report it to our support team.{" "}
          </li>
          <br />
          <li>
            <b>Compliance with Terms and Policies:</b> Familiarize yourself with
            and adhere to the terms and conditions, privacy policy, and
            copyright policy of the platform. Failure to comply with these
            policies may result in the suspension or termination of your
            account.{" "}
          </li>
          <br />
          <li>
            <b>Reporting Violations:</b> If you encounter any violations of
            these user guidelines or observe any inappropriate behavior on the
            platform, please report it to our support team for appropriate
            action.
          </li>
          <br />
        </ul>
      </div>
    </div>
  );
};
export default User;
