import React, { Component } from 'react'
import getBlockchain from './ethereum.js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import refresh from "./assets/refresh.png" 

toast.configure();

class Withdraw extends Component {
 
    constructor(props) {
        super(props)

         this.withdraw = this.withdraw.bind(this);
     
    }
 

    async withdraw() {
        const { primalBank } = await getBlockchain();

        await primalBank
            .withdraw()
            .then(res => toast.success(' Withdrawal processing', { position: toast.POSITION.TOP_RIGHT, autoClose: 5000 })

            ).then(res => {
                setInterval(() => {
                    window.location = "/";
                }, 3000);
            }).catch(err => toast.error("Something went wrong"));

        // toast.info("Contract Balance has been drained due to repeated Withdrawals, We are working on a GOOD SOLUTION, Please have Patience");

    }

    render() {

        const colStyle = {
            backgroundImage: "radial-gradient(black, #131050 )", opacity: "70%", marginTop: "20px", borderRadius: "20px", marginLeft: "20px", marginRight: "20px",
            boxShadow: "0 0 20px #eee"
        };

        const investButton = {
            display: "inline-block",
            padding: "0.5em 1em",
            textDecoration: "none",
            color: "black",
            transition: ".4s", marginTop: "30px", marginBottom: "-22px", fontWeight: "bold", fontFamily: "MyFont", textAlign: "center", backgroundImage: "linear-gradient(to right, #FFDD00, #FBB034)", fontSize: "18px", borderRadius: "30px"
        };

        return (

            <div style={{ paddingTop: "60px" }}>
                <div className="row">
                    <div className="col-xl-4"></div>
                    <div className="col-xl-4" style={colStyle}>

                        <div className="col-xl-12" style={{ marginTop: "-18px", marginLeft: "-5px", backgroundImage: "linear-gradient(to right, #131050, black)", borderRadius: "5px", color: "#eee97f", textAlign: "center", fontWeight: "bold", fontSize: "21px" }}>
                            Withdrawable Balance</div>
                        <br /> 

                        <div style={{ color: "white", fontSize: "15px", fontFamily: "MyFont", textAlign: "center" }}> {Number(this.props.bnb_dividends).toFixed(8)} BNB</div> 
                        <div style={{ textAlign: "right" }}>  
                            <a href = "/" style={{  textAlign: "center" }}> 
                                <img src={refresh} alt=""  width="50" /> 
                            </a>
                        </div> 
                        <div style={{ color: "white", fontSize: "15px", fontFamily: "MyFont", textAlign: "center" }}> {Number(this.props.prm_dividends).toFixed(8)} PRM</div>
                        {/* <br />
                        <p style={{ textAlign: "center", color: "grey" }}> Requires gas fee
                        </p> */}


                        <form
                            onSubmit={(event) => {

                                event.preventDefault();

                                this.withdraw();
                            }} 
                        > 
                        {this.props.refLoading ? null :
                            <div style={{ textAlign: "center" }}>
                                <button type="submit" className="btn btn-success" style={investButton}>Withdraw</button>
                                
                            </div>
                        } 
                        </form>


                    </div>
                    <div className="col-xl-4"></div>

                </div>
                <div style={{ paddingBottom: "20px" }}></div>
            </div >

        )
    }
}

export default Withdraw
