import React, { Component } from 'react'
import getBlockchain from './ethereum.js';
import ApproveUSD from './ApproveUSD.js';
import Invest from './Invest.js';

export class Purchase extends Component {
    componentDidMount = async() => {

        await this.loadBlockChainData();  
   } 

   loadBlockChainData = async () => {

    let { primal, currentAcc, usdtInstance, primalBank } = await getBlockchain();
    this.setState({currentAcc});
    
    let symbol  = await primal.symbol() ;
    this.setState({ symbol });

    let tokenDecimals  = await primal.decimals() ;
    this.setState({ tokenDecimals : Number(tokenDecimals) });

    let tokenBal  = await primal.balanceOf(currentAcc) ;
    this.setState({ tokenBal : (Number(tokenBal)/10**(this.state.tokenDecimals)) }); 
    
    let contractPRMBal  = await primal.balanceOf(contractAddress) ;
    this.setState({ contractPRMBal : (Number(contractPRMBal)/10**(this.state.tokenDecimals)) }); 
    
    // Contract Instance

    let ownerAddress  = await primalBank.owner() ;
    this.setState({ ownerAddress });
//       console.log('owner ' + ownerAddress); 

     if (this.props.refLinkid) {
         this.setState({ refid: this.props.refLinkid });

     } else {
         this.setState({ refid: this.state.ownerAddress });
     }
   //  console.log('refid- '+this.state.refid);

    let rtPrice = await primalBank.getRTPrice();
    this.setState({ rtPrice : (Number(rtPrice)/10**(this.state.tokenDecimals)) });   

    let pool_balance = await primalBank.pool_balance();
    this.setState({ pool_balance : (Number(pool_balance)/10**(this.state.tokenDecimals)) });   


    let pool_cycle = await primalBank.pool_cycle();
    this.setState({ pool_cycle : (Number(pool_cycle)) });   


    let contractInfo = await primalBank.getContractInfo();
    this.setState({ contract_rt_balance : (Number(contractInfo.contract_rt_balance)/10**(this.state.tokenDecimals)) });
    this.setState({ contract_tusd_balance : (Number(contractInfo.contract_tusd_balance)/10**(this.state.tokenDecimals)) });
    this.setState({ contract_total_users : (Number(contractInfo.contract_total_users)) });
    this.setState({ _total_usd_purchased : (Number(contractInfo._total_usd_purchased)/10**(this.state.tokenDecimals)) });
    this.setState({ _total_rt_sold : (Number(contractInfo._total_rt_sold)/10**(this.state.tokenDecimals)) });
    this.setState({ _total_no_purchases : (Number(contractInfo._total_no_purchases) ) });
    this.setState({ _total_usd_withdrawn : (Number(contractInfo._total_usd_withdrawn)/10**(this.state.tokenDecimals)) });


    let userInfo = await primalBank.getUserInfo(this.state.currentAcc);
    this.setState({ upline : userInfo.upline });
    this.setState({ tusd_balance : (Number(userInfo.tusd_balance)/10**(this.state.tokenDecimals)) });
    this.setState({ no_of_purchases : (Number(userInfo.no_of_purchases)) });
    this.setState({ direct_biz : (Number(userInfo.direct_biz)/10**(this.state.tokenDecimals)) });
    this.setState({ pool_bonus : (Number(userInfo.pool_bonus)/10**(this.state.tokenDecimals)) }); 
    this.setState({ gen_bonus : (Number(userInfo.gen_bonus)/10**(this.state.tokenDecimals)) });  
    
    // USDT Instance
     
    let usdtDecimals  = await usdtInstance.decimals() ;
    this.setState({ usdtDecimals : Number(usdtDecimals) });

    let usdApproved = await usdtInstance.allowance(currentAcc, contractAddress);
    this.setState({ usdApproved : (Number(usdApproved)/10**(this.state.usdtDecimals)) });
//       console.log('usdApproved ' + this.state.usdApproved); 

    let usdtBal  = await usdtInstance.balanceOf(currentAcc) ;
    this.setState({ usdtBal : (Number(usdtBal)/10**(this.state.usdtDecimals)) }); 

}
  render() {
    return (
        <div style={backStyle } >
                <div style={{ textAlign: "center"  }}>
                    <img src={logo} alt=""  width="220" /> 
                    
                </div>
        {
            this.state.usdApproved >= 25 ?
            
            <Invest 
                rtBal = {this.state.tokenBal}
                usdtBal = {this.state.usdtBal}
                usdApproved = {this.state.usdApproved}
                contractPRMBal = {this.state.contractPRMBal}
                refid = {this.state.refid}
            /> :
            null
            
        }
        {
            this.state.usdApproved < 25 ?
            
            <ApproveUSD 
                rtBal = {this.state.tokenBal} 
                usdtBal = {this.state.usdtBal}
                usdApproved = {this.state.usdApproved}
                rtPrice = {this.state.rtPrice}
            />  :
            null
            
        }
        </div>
    )
  }
}

export default Purchase