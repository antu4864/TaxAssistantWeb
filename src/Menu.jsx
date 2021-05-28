import React from 'react';
import { Link} from "react-router-dom";
import Header from './Header';


const Menu=() => {
  return (
   <>
  
     <Header/>
     
          <div className='con'>
             <div >
               
              <Link to="/keytaxdate" className='Link'>Capital Grains Tax Filing and Payment Deadlines Filing Date</Link>
              <hr/>
              <Link to="/cg" className='Link' >Corporation Tax & Companies House Statutory Filing Dates</Link>
              <hr/>
              <Link to="/It" className='Link'>Inocme Tax Self-Assessment Filing and Payment Deadlines </Link>
              <hr/>
              <Link to="/Pas" className='Link'>Pay as You Earn (PAYE) and Construction Industry Scheme (CIS) Filing and Payment Deadlines </Link>
              <hr/>
              <Link to="/Vat" className='Link'>VAT Filing and Payment Deadlines</Link>
              <hr/>
            </div>        
          
          </div> 
   </>
  );
}

export default Menu;
