import "./header.css";
// import Sidebar from '../../components/sidebar/Sidebar.jsx';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import PersonIcon from '@material-ui/icons/Person';
import StorageIcon from '@material-ui/icons/Storage';

const Header = () => {
  return (
    <div className="head">
    <div className="header">
        <div className="image">
        <img className="imagedp" src="https://2.bp.blogspot.com/-axe92G5eH6I/W4_WeBqUHKI/AAAAAAAAPLg/avE3ucmy0SgkwastYUqDralOXW1c0msSACLcBGAs/s1600/facebook-profile-pictures-for-boy.jpg" alt="" />
            <b className="dpname">Hi Mike,
            <p className="welcome">welcome back.</p></b>
        </div>
        <div className="today">
            <p className="now">Today</p>
        <span className="amount">$19,892</span>
        <p className="account">Account Balance</p>
        <div className="flex">
        <p className="number">$4,000</p>
        <p className="year">Year-to-Date Contributions</p>
        <p className="total">$1,892</p>
        <p className="interest">Total Interest</p>
        </div>
        <p className="ton"><button className="button">I want to</button></p>
        </div>
        <div className="with">
        <p className="recent">Recent Transactions</p>
        <p className="date">2020-08-07</p>
        <p className="Withdrawal">Withdrawal Transfer to Bank-XXX11</p>
        <div className="none">
        <p className="date">2020-08-07</p>
        <p className="Withdrawal">Withdrawal Transfer to Bank-XXX11</p>
        <p className="date">2020-08-07</p>
        <p className="Withdrawal">Withdrawal Transfer to Bank-XXX11</p>
        </div>
        </div>
        <div className="class">
      <div className="ho">
          <p className="om"><HomeIcon /></p>
          <p><StorageIcon /></p>
          <p><ListIcon /></p>
          <p><PersonIcon /></p>
          <p><SearchIcon /></p>
      </div>
    </div>
    </div>
    
    </div>
  )
}

export default Header