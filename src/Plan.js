import React, { Component } from 'react' 

export class Plan extends Component {

 
    render() {

        // const res = "https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT";
        // res = JSON.parse(price)
        // console.log(res );

        const colStyle = {
            backgroundImage: "linear-gradient(to right, #131050, black)", opacity: "70%", marginTop: "20px", borderRadius: "20px", marginLeft: "20px", marginRight: "20px",
            boxShadow: "0 0 20px #eee",
        };

        const headerStyle = { marginTop: "-18px", backgroundImage: "linear-gradient(to right, #131050, black)", borderRadius: "5px", color: "#eee97f", textAlign: "center", fontWeight: "bold", fontSize: "21px" }

         
        return (
            <div style={{ paddingTop: "60px" }}>
                <div className="row">
                    <div className="col-xl-3"></div>
                    <div className="col-xl-6" style={colStyle}>

                        <div className="col-xl-6" style={headerStyle}>
                            Plan Details</div>

                        <br />
                        <div className="col-xl-12" style={{ textAlign: "left" }}>
                        <p style={{color:"white", fontWeight:"bold"}}><span style={{color:"gold"}}>Plan A:</span> 0.05 BNB to 0.999 BNB - <span style={{color:"gold"}}>Total ROI :</span> 120% + 200 PRM</p>
                        <p style={{color:"white", fontWeight:"bold"}}><span style={{color:"gold"}}>Plan B:</span> 1.00 BNB to 4.999 BNB - <span style={{color:"gold"}}>Total ROI :</span> 135% + 700 PRM</p>
                        <p style={{color:"white", fontWeight:"bold"}}><span style={{color:"gold"}}>Plan C:</span> 5.00 BNB upwards - <span style={{color:"gold"}}>Total ROI :</span> 150% + 1500 PRM</p>
                        <br />
                        </div>
                    </div>
                    <div className="col-xl-3"></div>
                </div>

            </div>
        )
    }
}

export default Plan
