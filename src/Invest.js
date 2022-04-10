import React, { Component } from 'react'
import getBlockchain from './ethereum.js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

toast.configure();

export class Invest extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0.01, 
        }
 
        this.purchase1 = this.purchase1.bind(this); 
        this.updateAddress = this.updateAddress.bind(this);
        this.updateDepositAmt = this.updateDepositAmt.bind(this);
    }

    async purchase1(refid, amount) {
        const { primalBank } = await getBlockchain();

        if (amount >= 0.01) {
            let amt = Number(amount*100).toFixed();
            amt = amt + "0000000000000000";

            await primalBank
                .stake(refid , {
                    from: this.props.currentAcc,
                    value: amt, 
                })
                .then(res => toast.success(amount + ' BNB deposit processing, please do not refresh', { position: toast.POSITION.TOP_RIGHT, autoClose: 10000 })

                ).then(res => {
                    setInterval(() => {
                        window.location = "/";
                    }, 12500);
                }).catch(err => toast.error(err+ " Unknown error"));
        } else {
            toast.info('Minimum purchase allowed is 0.05 BNB');
        } 
    }

    updateAddress(event){
        this.setState({sendAddress : event.target.value })
    }

    updateDepositAmt(event){
        this.setState({count : event.target.value})
    }

    // button100(event) {
    //     this.setState({ count: this.state.count + 100 });
    // }

    // button500(event) {
    //     this.setState({ count: this.state.count + 500 });
    // }

    // button1000(event) {
    //     this.setState({ count: this.state.count + 1000 });
    // }

    // button10k(event) {
    //     this.setState({ count: this.state.count + 10000 });
    // }

    // button50k(event) {
    //     this.setState({ count: this.state.count + 50000 });
    // }

    // button100k(event) {
    //     this.setState({ count: this.state.count + 100000 });
    // }

    // button500k(event) {
    //     this.setState({ count: this.state.count + 500000 });
    // }

    // reset(event) {
    //     this.setState({ count: 0 });
    // }

    render() {

        const colStyle = {
            opacity: "80%", marginTop: "20px", borderRadius: "20px", marginLeft: "20px", marginRight: "20px",
            boxShadow: "0 0 20px #eee",backgroundImage: "linear-gradient(to right, #131050, black)"
        }; 
        
        const purchaseButton = {
            display: "inline-block",
            padding: "0.5em 1em",
            textDecoration: "none",
            color: "black",
            transition: ".4s", marginTop: "30px", marginBottom: "-22px", fontWeight: "bold", fontFamily: "MyFont", textAlign: "center", backgroundImage: "linear-gradient(to right, #FFDD00, #FBB034)", fontSize: "18px", borderRadius: "30px" 
        };

        return (
            <div style={{ paddingTop: "60px" }} >
                <div className="row">
                    <div className="col-xl-4"></div>
                    <div className="col-xl-4" style={colStyle}>


                        <div className="col-xl-12" style={{ marginTop: "-18px", marginLeft: "-5px", backgroundImage: "linear-gradient(to right, #131050, black)", borderRadius: "5px", color: "#eee97f", textAlign: "center", fontWeight: "bold", fontSize: "21px" }}>
                           Savings Section</div>
                        <br />
                        <form
                            onSubmit={(event) => {

                                event.preventDefault();
                                const refid = this.props.refid; 
                                const amount = this.state.count;
                                if (amount >= 0.01) {
                                    this.purchase1(refid, amount);

                                } else {
                                    toast.error("Min deposit is 0.01 BNB");
                                } 
                            }} 
                        >   
                            <label style={{color: "white"}}>Referral Address</label>
                            <input type="text" style={{ backgroundColor: "black", borderRadius: "2px", height: "50px", color: "White", fontSize: "15px", paddingLeft: "30px", border: "4px solid white", width: "100%" }} 
                            onChange= { this.updateAddress  } placeholder={this.props.refid} /> <br /><br />

                            <label style={{color: "white"}}>Enter BNB Amount</label>
                            <input type="text" style={{ backgroundColor: "black", borderRadius: "2px", height: "50px", color: "White", fontSize: "15px", paddingLeft: "30px", border: "4px solid white", width: "100%" }} value={this.state.count}  onChange={this.updateDepositAmt} /> <br /><br />  


                            {/* <a href="#100" className="btn btn-primary" style={addButton} onClick={this.button100}>+100</a> 
                            <a href="#500" className="btn btn-primary" style={addButton} onClick={this.button500}>+500</a> 
                            <a href="#1000" className="btn btn-primary" style={addButton} onClick={this.button1000}>+1000</a> 
                            <a href="#10000" className="btn btn-primary" style={addButton} onClick={this.button10k}>+10k</a> 
                            <a href="#50000" className="btn btn-primary" style={addButton} onClick={this.button50k}>+50 k</a>
                            <a href="#100000" className="btn btn-primary" style={addButton} onClick={this.button100k}>+100 k</a>
                            <a href="#500000" className="btn btn-primary" style={addButton} onClick={this.button500k}>+500 k</a>
                            <a href="#reset" className="btn btn-primary" style={addButton} onClick={this.reset}>Reset</a><br /> */}
                            
                            <p style={{ color: "#eee97f", textAlign: "center", fontSize: "15px" }}>You will receive : {this.state.count >= 0.1 ? Number(this.state.count*1.5).toFixed(3) : (this.state.count >= 0.05 ? Number(this.state.count*1.35).toFixed(3) :  Number(this.state.count*1.2).toFixed(3) ) } BNB</p>

                            <p style={{ color: "#eee97f", textAlign: "center", fontSize: "15px" }}>Total Return : {this.state.count >= 0.1 ? 150 : (this.state.count >= 0.05 ? 135 : 120) } %</p>

                            {/* <p style={{ color: "#eee97f", textAlign: "center", fontSize: "15px" }}>PRM price : {Number(this.props.prmPrice ).toFixed(8)} BNB</p> */}

                            {/* <p style={{ color: "#eee97f", textAlign: "center", fontSize: "15px" }}>PRM receivable : {Number(this.state.count/this.props.prmPrice*5/100 ).toFixed(8)} PRM</p> */}
                             
 
                            {/* <p style={{ color: "#eee97f", textAlign: "center", fontSize: "15px" }}>Your BOND Balance : {this.props.rtBal} BOND</p>
                            

                            <p style={{ color: "#eee97f", textAlign: "center", fontSize: "15px" }}>Contract token Balance : {this.props.contractPRMBal} tokens</p>

                            <p style={{ color: "#eee97f", textAlign: "center", fontSize: "14px" }}>BOND Balance : {this.props.rtBal} BOND </p> */}

                            <div style={{ textAlign: "center" }}>
                                <button type="submit" className="btn btn-success" style={purchaseButton}> Deposit </button> 
                            </div>
 
                        </form>


                    </div>

                    <div className="col-xl-4"></div>
                </div>

            </div>
        )
    }
}

export default Invest
