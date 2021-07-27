import React from "react";

const Vta = () => {
  return (
    <>
      <div className="container1">
        <div>
          <h2>VAT Filing and Payment Deadlines</h2>
          <div className="container">
            <h4>VAT - Submission Deadlines</h4>
            <p>
              For submitting a monthly/quarterly VAT return.
              <br />
              <br />
              1 calendar month and 7 days from the end of a VAT accounting
              period (see note a. below).
              <br />
              <br />
              For submitting a VAT return under the VAT Annual Accounting
              Scheme.
              <br />
              <br />
              2 months from the end of the VAT annual accounting year (see note
              b).
              <br />
              <br />
              Note:
              <br />
              <br />
              a. Most businesses are required to submit VAT returns online
              either via HMRC's business tax account or via third-party software
              to complying with Making Tax Digital requirements.
              <br />
              <br />
              b. Those who qualify for an exemption from filing online must file
              their paper-based returns within 1 calendar month of an accounting
              period.
              <br />
              <br />
              c. Where there is a part-year of less than 4 months, an entity
              will only be permitted a month to submit their return and
              balancing payment.
            </p>
          </div>
        </div>
        <br />
        <div className="container">
          <div>
            <h4>VAT - Payment</h4>
            <p>
              Payment of VAT associated with a monthly/quarterly return.
              <br />
              <br />
              The payment deadline for returns submitted electronically is 1
              calendar month and 7 days from the end of a VAT accounting period.
              <br />
              <br />
              Where payment is made by Direct Debit, HMRC will normally collect
              the amount due 3 workings days after the return filing deadline.
              <br />
              <br />
              Note:
              <br />
              <br />
              Different rules apply for those who account for their VAT under
              the Annual Accounting Scheme.
            </p>
          </div>
        </div>

        <br />
        <div className="container">
          <div>
            <h4>Disclaimer</h4>
            <p>
              Please note that you should not take any action based on these tax
              dates, they are for advisory purposes only.
              <br />
              <br />
              You should consult with us before making any decisions so that we
              can advise you on the best course of action.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vta;
