import React from "react";
import "./About.css";
import pic1 from "./pic/pic1.jpg";

export default function About() {
  return (
    <div>
      <div className="container_about1">
        <div className="blue_div">
          <h2 className="h2_Style">About us</h2>
        </div>
        <div className="pic_div">
          <img src={pic1} alt="pic1_about" className="pic1_style"></img>
        </div>
      </div>
      <div className="container_p">
        <p className="p_style">
          InsureNexus revolutionizes the insurance experience, offering
          consumers a comprehensive platform to compare top insurance providers,
          access expert advice, purchase policies seamlessly. Our cutting-edge
          technology integrates with leading insurance carriers, providing an
          unparalleled digital journey for both consumers and insurers, we are
          committed to driving positive change in the insurance industry and
          empowering individuals to make informed decisions about their
          coverage. Together, we will shape the future of insurance, making it
          more accessible, transparent, and customer-centric than ever before.
        </p>
      </div>
      <div className="why_different">
        <h3 className="h3_style">
          Why we're different{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#cbb26b"
            class="bi bi-building-fill-check"
            viewBox="0 0 16 16"
          >
            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514" />
            <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7.256A4.5 4.5 0 0 0 12.5 8a4.5 4.5 0 0 0-3.59 1.787A.5.5 0 0 0 9 9.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .39-.187A4.5 4.5 0 0 0 8.027 12H6.5a.5.5 0 0 0-.5.5V16H3a1 1 0 0 1-1-1zm2 1.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5m3 0v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5m3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5M7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5M4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
          </svg>
        </h3>
        <h4 className="h4_style">Easily Compare Quotes</h4>
        <p className="p_dif_style">
          Say goodbye to filling out forms on numerous websites. With
          InsureNexus's cutting-edge tools, you can swiftly compare quotes from
          several top insurance providers side by side within minutes. Already
          insured? Let us assist you in re-evaluating your policy to seek out a
          better rate.
        </p>

        <h4 className="h4_style">Putting your needs first is our priority</h4>
        <p className="p_dif_style">
          Our team of licensed insurance agents is always available to provide
          personalized advice and guidance tailored to your specific situation.
          Additionally, our extensive library of fact-checked articles ensures
          that you have access to reliable information whenever you need it,
          whether you prefer to speak with an expert or conduct research
          independently.
        </p>

        <h4 className="h4_style">Comprehensive Policy Management</h4>
        <p className="p_dif_style">
          Managing your insurance policies has never been easier. With
          InsureNexus, you can conveniently track all your policies in one
          place, update coverage details, and even file claims seamlessly. Our
          user-friendly platform simplifies the entire process, giving you peace
          of mind knowing that your insurance needs are well taken care of.
        </p>
      </div>

      <div className="why_different">
        <h4 className="h3_style">
          How We Generate Revenue{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="#cbb26b"
            class="bi bi-cash-coin"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
            />
            <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z" />
            <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z" />
            <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567" />
          </svg>
        </h4>
        <p className="p_dif_style">
          As an independent insurance broker, our revenue comes from commissions
          paid by insurance companies for each policy sold. These commissions
          are already included in the price of the insurance policy, so you
          won't incur any additional costs by choosing to work with us. The
          compensation we receive for each sale may vary depending on factors
          such as the type and size of the policy, the insurer, and our business
          volume with them. However, it's important to note that we do not
          prioritize or favor any insurer over another based on commission. Our
          priority is advocating for your needs, not our own financial gain.
        </p>
        <div className="container_Q">
          <div className="Q_">
            <div className="wavyShape">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="currentColor"
                class="bi bi-cash-coin"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
                />
                <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195z" />
                <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083q.088-.517.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1z" />
                <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 6 6 0 0 1 3.13-1.567" />
              </svg>
            </div>
            <h5 className="h5_style">
              Is purchasing insurance <br></br>through InsureNexus more
              affordable?
            </h5>
            <p className="p_money_style">
              Insurance premiums are regulated by law, meaning discounts on
              policies cannot be offered by any company, broker, or agent.
              However, there are still opportunities to save money! Each insurer
              assesses risk differently, aiming to provide competitive pricing
              for policies. InsureNexus simplifies the process by allowing you
              to compare quotes from various companies in one location, making
              it effortless to identify potential savings on the ideal policy
              for your requirements.
            </p>
          </div>
          <div className="Q_">
            <div className="wavyShape">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </div>
            <h5 className="h5_style">
              Is InsureNexus a corporate affiliate of any insurance company?
            </h5>
            <p className="p_money_style">
              InsureNexus operates as an independent insurance agency, not
              affiliated with or owned by any insurance company. This
              independence allows us to offer policies from a variety of
              insurers impartially, without preference or bias. Our primary goal
              is to assist you in finding the insurance policy that best fits
              your needs, regardless of the insurance provider.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
