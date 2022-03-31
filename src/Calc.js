import React, { Component } from 'react' 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import './css/style2.css'; 
import './css/responsive2.css'; 
import 'react-toastify/dist/ReactToastify.css'; 

toast.configure();

export class Calc extends Component {
 
    render(){

         return (

            <div style={{ paddingTop: "60px" }}>
                <div className="row justify-content-center align-items-center">
                    <div className="checkout-login-step">
                        <div className="calculator">
                            
                            <div className="title">
                                <h2 className='h2'>BiyOND calc</h2>
                                
                            </div>  
                            <p>Buy BiyOND protocol, HODL in your wallet and farm upto 10,000% in 2 years.</p>


                        </div>   
                        <div className="add-liquidity">
                            
                            <div className="content">
                                <div className="label">
                                    <h6>BiyOND</h6>
                                
                                 </div>  
                                 <div className="label d-flex">
                                    <input type="text" />
                                    <button class="input-button">MAX</button>
                                
                                 </div> 
                            </div>   
                        </div>
                       </div>    
                  </div>
            </div>
        )
    }
}

export default Calc
