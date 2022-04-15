import React, { Component } from 'react' 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
toast.configure();

const bscurl = "https://bscscan.com/address/";

export class ContractInfo extends Component {
 
    render(){

        const colStyle = {
            opacity: "80%", marginTop: "20px", borderRadius: "20px", marginLeft: "20px", marginRight: "20px",
            boxShadow: "0 0 20px #eee", backgroundImage: "linear-gradient(to right, #131050, black)"
        };

        const headerStyle ={ marginTop: "-18px", marginLeft: "-5px", backgroundImage: "linear-gradient(to right, #131050, black)", borderRadius: "5px", color: "#eee97f", textAlign: "center", fontWeight: "bold", fontSize: "21px" };
        return (

            <div style={{ paddingTop: "60px" }}>
                <div className="row">
                    <div className="col-xl-3"></div>
                    <div className="col-xl-6" style={colStyle}>

                        <div className="col-xl-6" style={headerStyle}>
                            Smart Contract</div>
                        <br />

                        <div className="col-xl-12" style={{ textAlign: "center" }}> 
          
                            {/* <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Contract PRM Balance</p>
                            <a href="#1" style={{ color: "#eee97f", fontSize: "15px", textAlign: "center" }}> {Number(this.props.contract_prm_balance).toFixed(4) } PRM  </a>
                            <br /><br />
                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Contract BNB Balance</p>
                            <a href="#1" style={{ color: "#eee97f", fontSize: "15px", textAlign: "center" }}> {this.props.contract_bnb_balance } BNB </a>
                            <br /><br /> */}
                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Contract Address</p>
                            <a href= {bscurl+this.props.contractAddress }  target= '_blank' rel='noreferrer' style={{ color: "#eee97f", fontSize: "13px", textAlign: "center" }}> {this.props.contractAddress} </a>
                            <br /><br />

                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Liquidity Address</p>
                            <a href= {bscurl+this.props.liquidity }  target= '_blank' rel='noreferrer' style={{ color: "#eee97f", fontSize: "13px", textAlign: "center" }}> {this.props.liquidity} </a>
                            <br /><br />

                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Total BNB Staked</p>
                            <a href="#1" style={{ color: "#eee97f", fontSize: "15px", textAlign: "center" }}> {this.props._total_bnb_staked } BNB  </a>
                            <br /><br />

                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Total Number of Stakes</p>
                            <a href="#1" style={{ color: "#eee97f", fontSize: "15px", textAlign: "center" }}> # {this.props.total_no_stakes }  </a>
                            <br /><br />
                            
                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Total Users</p>
                            <a href="#1" style={{ color: "#eee97f", fontSize: "15px", textAlign: "center" }}> # {this.props.contract_total_users }  </a>
                            <br /><br />
                            
                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Total PRM Staked</p>
                            <a href="#1" style={{ color: "#eee97f", fontSize: "15px", textAlign: "center" }}> {this.props._total_prm_staked } PRM  </a>
                            <br /><br />
                            
                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Total PRM Withdrawn</p>
                            <a href="#1" style={{ color: "#eee97f", fontSize: "15px", textAlign: "center" }}> {this.props._total_prm_withdrawn } PRM  </a>
                            <br /><br />
                            
                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Total BNB Withdrawn</p>
                            <a href="#1" style={{ color: "#eee97f", fontSize: "15px", textAlign: "center" }}> {this.props._total_bnb_withdrawn } BNB  </a>
                            <br /><br />
                            
                            {/* <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Total Liability</p>
                            <a href="#1" style={{ color: "#eee97f", fontSize: "15px", textAlign: "center" }}> {this.props.total_liability } BNB  </a>
                            <br /><br />
                             */}
                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Pool Balance</p>
                            <a href="#1" style={{ color: "#eee97f", fontSize: "15px", textAlign: "center" }}> {this.props.pool_balance } BNB  </a>
                            <br /><br />
                            
                            {/* <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>No. of Pool Cycles</p>
                            <a href="#1" style={{ color: "#eee97f", fontSize: "15px", textAlign: "center" }}># {this.props.pool_cycle }    </a>
                            <br /><br />
                             */}
                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Next Draw (Sponsor Pro)</p>
                            <a href="#1" style={{ color: "#eee97f", fontSize: "15px", textAlign: "center" }}> {this.props.draw_hrs } <span style = {{ color: "white"}}>h </span>: {this.props.draw_mins } <span style = {{ color: "white"}}>m </span> : {this.props.draw_secs } <span style = {{ color: "white"}}>s </span></a>
                            <br /><br />
  
                        </div>
                    </div>
                    <div className="col-xl-3"></div>
                </div>

            </div >
        )
    }
}

export default ContractInfo
