import React from 'react';
import Header from './Header';
const It=() =>{
  return (
<>
    <Header/>
    <div className="container1">
        <h2>Income Tax Self-Assessment Filing and Payment Deadlines</h2>
    <div className="container">
          <div>
            <h3>Self-Assessment - Submission Deadlines</h3>
            <p>For paper self-assessment returns (SA 100s).<br/><br/>
            Taxpayers wishing to file paper self-assessment tax returns must ensure their documents are received by HMRC on, or by the 31st of October where a notice to file is issued prior to the 31st July following the tax year concerned.<br/><br/>
Where a notice is issued after the 31st of July taxpayers must ensure their documents are received within three months of the issue of the notice or within two months if HMRC is to calculate the tax liability.<br/><br/>
This includes where a taxpayer wishes underpayments of less than £3,000 to be coded out.
<h4>For electronic self-assessment returns.</h4>
Taxpayers wishing to file online self-assessment tax returns must ensure their documents are received by HMRC on or before the 31st January following the tax year end.<br/><br/>
Where a taxpayer wishes an underpayment of less than £3,000 to be collected through a payroll coding out their return must be transmitted to HMRC on or before the 31st December following end of tax year.
<h4>Paper / electronic return and notices to file returns issued after 31st October following the end of the tax year.</h4>
Within three months of the date of issue; or two months, where the return is paper-based and HMRC is to calculate the tax liability.</p>
          </div>
        </div>
        <br/> <br/>
        <div className="container">
            <div>
            <h3>Other Self-Assessment - Deadlines</h3>
                <p>HMRC must be notified of a taxpayer's potential chargeability linked to a new source of taxable income or capital disposals which arose in the preceding tax year (where a person was not previously registered for self-assessment and the income concerned is not from employment).<br/> <br/>
On or before the 5th of October following the end of the tax year concerned.</p>
            </div>
        </div>
        <br/> <br/>
          <div className="container">
            <div>
              <h4>Self-Assessment Tax Payment Deadlines</h4>
              <p>Balance of tax due (balancing payment) in respect of the preceding tax year.<br/><br/>
On or before the 31st January following the tax year concerned.<br/><br/>
1st payment on account (for current tax year). On or before the 31st January following the tax year concerned.<br/><br/>
2nd payment on account (for the recently ended tax year).<br/><br/>
On or before the 31st July following the tax year concerned.</p>
            </div>
          </div>
          <br/><br/>
          <div className='container'>
            <h4>Disclaimer</h4>
            <p>Please note that you should not take any action based on these tax dates, they are for advisory purposes only.<br/><br/>
You should consult us before making any decisions so that we can advise you on the best course of action.</p>
          </div>
    </div>

</>
  );
}

export default It;
