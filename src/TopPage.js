import React, { Component } from 'react';  
import ContractInfo from './ContractInfo.js';
import UserInfo from './UserInfo.js';
import getBlockchain from './ethereum.js';
import Invest from './Invest.js';
import TopSponsor from './TopSponsor.js';
import back from "./assets/bg10.jpg" 
import logo from "./assets/logo21.png" 
import ReferralLink from './ReferralLink.js';
import Withdraw from './Withdraw.js';
import Plan from './Plan.js';
import UserDepositInfo from './UserDepositInfo.js';
import "./css/style.css";  

const primalBankAddress = "0xe63a277B4796f7D9907000A292D4CFC5B94A58FD";
 
class TopPage extends Component { 

   componentDidMount = async() => {

        await this.loadBlockChainData(); 
           
        this.timerData();  
   } 

   timerData = async () => {
    let { primalBank } = await getBlockchain();

       const pool_last_draw = await primalBank.pool_last_draw();
       this.setState({ pool_last_draw: Number(pool_last_draw) });

       const time_step = await primalBank.time_period();
       this.setState({ time_step: Number(time_step) });

       const now = await primalBank.getNow();
       this.setState({ now: Number(now) });
       
        var draw_hrs = 0;
        var draw_mins = 0;
        var draw_secs = 0;

        var next_draw_time = Number(this.state.pool_last_draw + this.state.time_step - this.state.now);
        if (next_draw_time < 0) {
            next_draw_time = 0;
        }
        if (next_draw_time > 3600) {
            draw_hrs = Math.floor(next_draw_time / 3600);
            draw_mins = Math.floor((next_draw_time % 3600) / 60);
            draw_secs = Math.floor(next_draw_time % 60);
        } else if (next_draw_time > 60) {
            draw_mins = Math.floor(next_draw_time / 60);
            draw_secs = Math.floor(next_draw_time % 60);

        } else {
            draw_secs = next_draw_time;
        }
        this.setState({ draw_hrs });
        this.setState({ draw_mins });
        this.setState({ draw_secs });
        // console.log('next draw hrs - ' + this.state.draw_hrs)
        // console.log('next draw mins - ' + this.state.draw_mins)
        // console.log('next draw secs - ' + this.state.draw_secs) 
    }     

   loadBlockChainData = async () => {

       let { primal, currentAcc, primalBank} = await getBlockchain();
       this.setState({currentAcc});
       
       let symbol  = await primal.symbol() ;
       this.setState({ symbol });

       let tokenDecimals  = await primal.decimals() ;
       this.setState({ tokenDecimals : Number(tokenDecimals) });

       let tokenBal  = await primal.balanceOf(currentAcc) ;
       this.setState({ tokenBal : (Number(tokenBal)/10**18) }); 
       
       let contractPRMBal  = await primal.balanceOf(primalBankAddress) ;
       this.setState({ contractPRMBal : (Number(contractPRMBal)/10**18) }); 
       
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

       let prmPrice = await primalBank.getPRMPrice();
       this.setState({ prmPrice : (Number(prmPrice)/10**18) });   
      // console.log('prmPrice - '+this.state.prmPrice);

       let team_biz = await primalBank.getTeamBiz(this.state.currentAcc);
       this.setState({ team_biz : (Number(team_biz)/10**18) });    

       let total_liability = await primalBank.total_liability();
       this.setState({ total_liability : (Number(total_liability)/10**18) });   

       let pool_balance = await primalBank.pool_balance();
       this.setState({ pool_balance : (Number(pool_balance)/10**18) }); 

       let pool_cycle = await primalBank.pool_cycle();
       this.setState({ pool_cycle : (Number(pool_cycle)) });   

       let contractBalances = await primalBank.getContractBalances();
       this.setState({ contract_prm_balance : (Number(contractBalances.contract_prm_balance)/10**6) });
       this.setState({ contract_bnb_balance : (Number(contractBalances.contract_bnb_balance)/10**18) }); 

       let contractInfo = await primalBank.getContractInfo();
       this.setState({ contract_total_users : (Number(contractInfo.contract_total_users)) });
       this.setState({ _total_bnb_staked : (Number(contractInfo._total_bnb_staked)/10**18) });
       this.setState({ _total_prm_staked : (Number(contractInfo._total_prm_staked)/10**6) });
       this.setState({ _total_no_stakes : (Number(contractInfo._total_no_stakes) ) });
       this.setState({ _total_prm_withdrawn : (Number(contractInfo._total_prm_withdrawn)/10**18) });
       this.setState({ _total_bnb_withdrawn : (Number(contractInfo._total_bnb_withdrawn)/10**18) }); 

       let divInfo = await primalBank.getDividends(this.state.currentAcc); 
       this.setState({ prm_dividends : (Number(divInfo.prm_dividends)/10**6) });
       this.setState({ bnb_dividends : (Number(divInfo.bnb_dividends)/10**18) });
    //   console.log(this.state.bnb_dividends) 

       let userInfo = await primalBank.getUserInfo(this.state.currentAcc);
       this.setState({ upline : userInfo.upline }); 
       this.setState({ no_of_stakes : (Number(userInfo.no_of_stakes)) });
       this.setState({ gen_bonus : (Number(userInfo.gen_bonus)/10**18) });
       this.setState({ pool_bonus : (Number(userInfo.pool_bonus)/10**18) });
       this.setState({ deficit : (Number(userInfo.deficit)/10**18) }); 
       this.setState({ total_staked : (Number(userInfo.total_staked)/10**18) });  
       this.setState({ checkpoint : (Number(userInfo.checkpoint) ) });  
 
    const now = await primalBank.getNow();
    this.setState({ now: Number(now) }); 

    const wei_bnb = await primalBank.wei_bnb();
    this.setState({ wei_bnb: Number(wei_bnb) }); 

    const wei_prm = await primalBank.wei_prm();
    this.setState({ wei_prm: Number(wei_prm) }); 

    const planB_bnb_min = await primalBank.planB_bnb_min();
    this.setState({ planB_bnb_min: Number(planB_bnb_min/this.state.wei_bnb) });

    const planC_bnb_min = await primalBank.planC_bnb_min();
    this.setState({ planC_bnb_min: Number(planC_bnb_min/this.state.wei_bnb) });
    console.log(this.state.planC_bnb_min)

    const planA_prm = await primalBank.planA_prm();
    this.setState({ planA_prm: Number(planA_prm/this.state.wei_prm) });

    const planB_prm = await primalBank.planB_prm();
    this.setState({ planB_prm: Number(planB_prm/this.state.wei_prm) });

    const planC_prm = await primalBank.planC_prm();
    this.setState({ planC_prm: Number(planC_prm/this.state.wei_prm) });

    let _bnb_amount = [];
    let _bnb_dividends = [];
    let _prm_dividends = []; 
    let _secsGone = []; 
     
    if(this.state.no_of_stakes > 0){
 
    for(var i =0; i < this.state.no_of_stakes; i++){
        let stakeInfo1 = await primalBank.getPartStakeDividends(this.state.currentAcc, i ) 
        
        _bnb_amount[i] = Number(stakeInfo1.bnb_amount/10**18);
        _bnb_dividends[i] = Number(stakeInfo1.bnb_dividends /10**18);
        _prm_dividends[i] = Number(stakeInfo1.prm_dividends/10**6); 
        _secsGone[i] = Number(stakeInfo1.secsGone ); 
        console.log( _bnb_amount[i], _bnb_dividends[i] , _prm_dividends[i], _secsGone[i] );
   //  console.log( this.state.now ) 
    }}

    this.setState({ contractAddress : primalBankAddress })
    this.setState({bnb_amt : _bnb_amount })
    this.setState({bnb_divs : _bnb_dividends })
    this.setState({prm_divs : _prm_dividends })
    this.setState({secsGone : _secsGone })
   // console.log(this.state.bnb_amt[0]) 
    this.setState({loading : false})
    }
 
   constructor(props) {
    super(props)

    this.state = {
         symbol :'',
         loading: true,
         bnb_amt: [],
         bnb_divs: [],
         prm_divs: [],
        } 
    }

   render() {                   
    const backStyle = {
        backgroundImage: `url(${back})`, backgroundAttachment: "fixed", fontFamily: "MyFont", height: "auto", width: "100%", margin: "0", backgroundPosition: "center", overflow: "hidden", backgroundRepeat: "no-repeat", backgroundSize: "cover"
    };
    return (
        <div style={backStyle } >
                <div style={{ textAlign: "center" , marginTop:"30px" }}>
                    <a href = "https://primal-bank.xyz"> 
                        <img src={logo} alt=""  width="220" /> 
                    </a> 
                </div>
                <div style={{ textAlign: "center", marginTop:"30px" }}>
                    <a href="https://drive.google.com/file/d/10yvmFdlganXE_8Sgj2MA8aj38nFosE8I/" style={{ textAlign: "center", width:"100%" }} className='btn-grad' target="_blank" rel="noreferrer"> Presentation </a> 
                </div>
                <Plan />
                <Invest 
                    prmBal = {this.state.tokenBal}
                    currentAcc = {this.state.currentAcc}
                    prmPrice = {this.state.prmPrice}
                    usdApproved = {this.state.usdApproved}
                    contractPRMBal = {this.state.contractPRMBal}
                    refid = {this.state.refid}
                /> 
                <ContractInfo 
                    contract_prm_balance = {this.state.contract_prm_balance}  
                    contractAddress = {this.state.contractAddress}  
                    pool_balance = {this.state.pool_balance}  
                    pool_cycle = {this.state.pool_cycle}  
                    _total_bnb_staked = {this.state._total_bnb_staked}  
                    _total_prm_staked = {this.state._total_prm_staked}  
                    _total_prm_withdrawn = {this.state._total_prm_withdrawn}  
                    _total_bnb_withdrawn = {this.state._total_bnb_withdrawn}  
                    total_no_stakes = {this.state._total_no_stakes}  
                    contract_bnb_balance = {this.state.contract_bnb_balance }
                    total_liability  = {this.state.total_liability  } 
                    contract_total_users  = {this.state.contract_total_users  } 
                    next_draw_time={this.state.next_draw_time}
                    draw_hrs={this.state.draw_hrs}
                    draw_mins={this.state.draw_mins}
                    draw_secs={this.state.draw_secs}
                />
                {this.state.no_of_stakes ?
                <UserInfo 
                upline =        {this.state.upline}  
                team_biz =      {this.state.team_biz }
                total_staked =  {this.state.total_staked }
                no_of_stakes  = {this.state.no_of_stakes }
                deficit  =      {this.state.deficit }
                pool_bonus    = {this.state.pool_bonus }
                gen_bonus   =   {this.state.gen_bonus } 
                />
                : null}            
                {this.state.no_of_stakes ?
                <UserInfo 
                    upline =        {this.state.upline}  
                    team_biz =      {this.state.team_biz }
                    total_staked =  {this.state.total_staked }
                    no_of_stakes  = {this.state.no_of_stakes }
                    deficit  =      {this.state.deficit }
                    pool_bonus    = {this.state.pool_bonus }
                    gen_bonus   =   {this.state.gen_bonus } 
                />
                : null}            
                {this.state.no_of_stakes ?
                <Withdraw
                    prm_dividends = {this.state.prm_dividends}
                    bnb_dividends = {this.state.bnb_dividends}
                />
                : null}            
                {this.state.no_of_stakes ?
                <ReferralLink
                    currentAcc = {this.state.currentAcc}
                />
                : null}            
                {this.state.no_of_stakes ?
                <TopSponsor
                />
                : null}            
                {this.state.loading === false
                ?<UserDepositInfo
                   no_of_stakes = {this.state.no_of_stakes} 
                   bnb_amt = {this.state.bnb_amt}
                   bnb_divs = {this.state.bnb_divs}
                   prm_divs = {this.state.prm_divs}
                   secsGone = {this.state.secsGone}
                />
            : null} 
                
                <div style={{ paddingBottom: "20px" }}></div>

                <div style={{ paddingBottom: "510px" }}></div> 
            </div>
    )}

}
export default TopPage;