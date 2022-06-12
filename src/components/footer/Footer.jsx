import "./footer.css";
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import Charts from "../charts/Charts";

const Footer = () => {
  return (
    <div className="footer">
      <div className="jii">
            <h1 className="ayrus">How do I compare to my peers
            <p className="vj">These numbers represent current goal achievement</p></h1>
            <p className="mama">
            <p className="under"><b className="age">Age:</b> Under 30</p>
            <p className="k"><b className="salary">Salary:</b> K 20-K 30</p>
            <p className="male"><b className="gender">Gender:</b> Male</p></p>
            <p className="pie"><Charts /></p>
        </div>
        <div className="strategy">
        <b className="strata">Retirement Strategy</b>
        <p className="emp">Employee Contribution</p>
        <p className="contri"><Progress percent={12}/></p>
        <p className="ret">Retirement Age</p>
        <p className="r"><Progress percent={65}/></p>
        <p className="s"></p>
        <p className="ab">Employee Contribution <b className="bc">8.4%</b></p>
        <p className="mom">Interest Rate <b className="dad">5%</b></p>
        <p className="update"><button className="but">Update</button></p>
        <p className="view">View Help Docs ></p>
        </div>
        <div className="advertise">
           <p className="are">Are you considering a <b className="house">Housing Advance?</b></p> 
           <p className="limit">Limited time reduced interest.</p>
           <p className="docs">View Help Docs ></p>
        </div>
    </div>
  ) 
}

export default Footer