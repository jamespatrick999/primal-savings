import React, { Component } from 'react' 

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

toast.configure(); 

export class UserDepositInfo extends Component {
    componentDidMount = async() => { 
          // const id =  setInterval(async() => {
        //     await this.loadBlockChainData();  
        // }, 10000)
        
   } 
 

    render(){

        const colStyle = {
            opacity: "80%", marginTop: "20px", borderRadius: "20px", marginLeft: "20px", marginRight: "20px",
            boxShadow: "0 0 20px #eee", backgroundImage: "linear-gradient(to right, #131050, black)"
        };

        const headerStyle = { marginTop: "-18px", marginLeft: "-5px", backgroundImage: "linear-gradient(to right, #131050, black)", borderRadius: "5px", color: "#eee97f", textAlign: "center", fontWeight: "bold", fontSize: "21px" };
        return (

            <div style={{ paddingTop: "60px" }}>
                <div className="row">
                    <div className="col-xl-3"></div>
                    <div className="col-xl-6" style={colStyle}>

                        <div className="col-xl-6" style={headerStyle}>
                            User Deposit Stats  
                        </div>
                        <br />
                        
                        

                        { 
                               this.props.no_of_stakes > 0 ? 
                                <div className="col-xl-12" style={{ textAlign: "center" }}>
                                <a href="#1" style={{ color: "white", fontSize: "19px", textAlign: "center"  }}>  Deposit 1 : {this.props.bnb_amt[0]} BNB   
                                     
                                    <br /><br /> 
                                    
                                    <span href="#1" style={{ color: "white", fontSize: "15px"  }}> BNB ROI : </span>
                                    <span href="#1" style={{ color: "#eee97f", fontSize: "15px"  }}>{Number(this.props.bnb_divs[0]).toFixed(5)} BNB </span><br />
                                    <span href="#1" style={{ color: "white", fontSize: "15px"  }}> PRM ROI : </span>
                                    <span href="#1" style={{ color: "#eee97f", fontSize: "15px"  }}>{Number(this.props.prm_divs[0]).toFixed(6)} PRM </span><br />
                                    <span href="#1" style={{ color: "white", fontSize: "15px"  }}> Seconds Elapsed: </span>
                                    <span href="#1" style={{ color: "#eee97f", fontSize: "15px"  }}>{Number(this.props.secsGone[0]) } s </span><br />
                                    </a>  
                                    <br /><br />
                                </div>
                        : null
                        
                        }  
                        
                        { 
                               this.props.no_of_stakes > 1 ? 
                                <div className="col-xl-12" style={{ textAlign: "center" }}>
                                <a href="#1" style={{ color: "white", fontSize: "19px", textAlign: "center"  }}>  Deposit 2 : {this.props.bnb_amt[1]} BNB   
                                     
                                    <br /><br /> 
                                    
                                    <span href="#1" style={{ color: "white", fontSize: "15px"  }}> BNB ROI : </span>
                                    <span href="#1" style={{ color: "#eee97f", fontSize: "15px"  }}>{Number(this.props.bnb_divs[1]).toFixed(5)} BNB </span><br />
                                    <span href="#1" style={{ color: "white", fontSize: "15px"  }}> PRM ROI : </span>
                                    <span href="#1" style={{ color: "#eee97f", fontSize: "15px"  }}>{Number(this.props.prm_divs[1]).toFixed(6)} PRM </span><br />
                                    <span href="#1" style={{ color: "white", fontSize: "15px"  }}> Seconds Elapsed: </span>
                                    <span href="#1" style={{ color: "#eee97f", fontSize: "15px"  }}>{Number(this.props.secsGone[1]) } s </span><br />
                                    </a>  
                                    <br /><br />
                                </div>
                        : null
                        }  
                        
                        { 
                               this.props.no_of_stakes > 2 ? 
                                <div className="col-xl-12" style={{ textAlign: "center" }}>
                                <a href="#1" style={{ color: "white", fontSize: "19px", textAlign: "center"  }}>  Deposit 3 : {this.props.bnb_amt[2]} BNB   
                                     
                                    <br /><br /> 
                                    
                                    <span href="#1" style={{ color: "white", fontSize: "15px"  }}> BNB ROI : </span>
                                    <span href="#1" style={{ color: "#eee97f", fontSize: "15px"  }}>{Number(this.props.bnb_divs[2]).toFixed(5)} BNB </span><br />
                                    <span href="#1" style={{ color: "white", fontSize: "15px"  }}> PRM ROI : </span>
                                    <span href="#1" style={{ color: "#eee97f", fontSize: "15px"  }}>{Number(this.props.prm_divs[2]).toFixed(6)} PRM </span><br />
                                    <span href="#1" style={{ color: "white", fontSize: "15px"  }}> Seconds Elapsed: </span>
                                    <span href="#1" style={{ color: "#eee97f", fontSize: "15px"  }}>{Number(this.props.secsGone[2]) } s </span><br />
                                    </a>  
                                    <br /><br />
                                </div>
                        : null
                        }  
                        
                        { 
                               this.props.no_of_stakes > 3 ? 
                                <div className="col-xl-12" style={{ textAlign: "center" }}>
                                <a href="#1" style={{ color: "white", fontSize: "19px", textAlign: "center"  }}>  Deposit 4 : {this.props.bnb_amt[3]} BNB   
                                     
                                    <br /><br /> 
                                    
                                    <span href="#1" style={{ color: "white", fontSize: "15px"  }}> BNB ROI : </span>
                                    <span href="#1" style={{ color: "#eee97f", fontSize: "15px"  }}>{Number(this.props.bnb_divs[3]).toFixed(5)} BNB </span><br />
                                    <span href="#1" style={{ color: "white", fontSize: "15px"  }}> PRM ROI : </span>
                                    <span href="#1" style={{ color: "#eee97f", fontSize: "15px"  }}>{Number(this.props.prm_divs[3]).toFixed(6)} PRM </span><br />
                                    <span href="#1" style={{ color: "white", fontSize: "15px"  }}> Seconds Elapsed: </span>
                                    <span href="#1" style={{ color: "#eee97f", fontSize: "15px"  }}>{Number(this.props.secsGone[3]) } s </span><br />
                                    </a>  
                                 
                                </div>
                        : null
                        }  
                        <br /><br />
                        { 
                               this.props.no_of_stakes > 4 ? 
                                <div className="col-xl-12" style={{ textAlign: "center" }}>
                                <a href="#1" style={{ color: "white", fontSize: "19px", textAlign: "center"  }}>  Deposit 5 : {this.props.bnb_amt[4]} BNB   
                                     
                                    <br /><br /> 
                                    
                                    <span href="#1" style={{ color: "white", fontSize: "15px"  }}> BNB ROI : </span>
                                    <span href="#1" style={{ color: "#eee97f", fontSize: "15px"  }}>{Number(this.props.bnb_divs[4]).toFixed(5)} BNB </span><br />
                                    <span href="#1" style={{ color: "white", fontSize: "15px"  }}> PRM ROI : </span>
                                    <span href="#1" style={{ color: "#eee97f", fontSize: "15px"  }}>{Number(this.props.prm_divs[4]).toFixed(6)} PRM </span><br />
                                    <span href="#1" style={{ color: "white", fontSize: "15px"  }}> Seconds Elapsed: </span>
                                    <span href="#1" style={{ color: "#eee97f", fontSize: "15px"  }}>{Number(this.props.secsGone[4]) } s </span><br />
                                    </a>  
                                    <br /><br />
                                </div>
                        : null
                        }  
                        
                        
                    </div>
                    <div className="col-xl-3"></div>
                </div>

            </div >
        )
    }
}

export default UserDepositInfo
