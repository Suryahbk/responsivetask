import "./body.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend} from 'recharts';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Charts from "../charts/Charts";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import PersonIcon from '@material-ui/icons/Person';
import StorageIcon from '@material-ui/icons/Storage';

const data = [
    {
      name: '20',
      uv: 1000,
      pv: 1000,
      
    },
    {
      name: '',
      uv: 1500,
      pv: 1200,
      
    },
    {
      name: '25',
      uv: 1500,
      pv: 1500,
      
    },
    {
      name: '',
      uv: 1500,
      pv: 2000,
      
    },
    {
      name: '30',
      uv: 2000,
      pv: 2000,
      
    },
    {
      name: '',
      uv: 1500,
      pv: 2800,
     
    },
    {
      name: '35',
      uv: 1500,
      pv: 3000,
     
    },
    {
        name: '',
        uv: 2500,
        pv: 2800,
        
      },
      {
        name: '40',
        uv: 3000,
        pv: 2700,
        
      },
      {
        name: '',
        uv: 2800,
        pv: 3100,
        
      },
      {
        name: '45',
        uv: 3200,
        pv: 3000,
        amt: 2100,
      },
  ];

const Body = () => {
  return (
    <div className="body">
        <div className="retirement">
             Retirement Income
             <p className="start">Starting Year 2056</p>
        </div>
        <div className="currency"> <b className="dollar">
            $300,000
            <p className="goal">My Goal</p></b>
            <div className="me"> 
           <b className="dollar1"> 59%
            <p className="goal1">Goal Achieved</p>
            </b>
            <b className="dollar2"> $300
            <p className="goal2">Est. Monthly Income</p>
            </b>
            </div>
        </div>
        <div className="barchart">
            <h1 className="contribution">Contributions Overtime</h1>
            <p className="surya">
            <h1 className="dot"><FiberManualRecordIcon /></h1>
                <p className="employ">Employer: <b>K 73,500</b></p>
            <h1 className="dot1"><FiberManualRecordIcon /></h1>
                <p className="employ1">Employer: <b>K 52,500</b></p>
            <h1 className="dot2"><FiberManualRecordIcon /></h1>
                <p className="employ2">Employer: <b>K 244,313</b></p>
            </p>
            
        <p className="bar">
        <BarChart
          width={550}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 30,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis/>
        
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="blue" />
          <Bar dataKey="uv" stackId="a" fill="rgb(110, 110, 214)" />
          <Bar dataKey="pv" stackId="a" fill="rgb(187, 187, 219)" />
        </BarChart>
        </p>
        
      
        </div>
        <div className="deepan">
            <h1 className="how">How do I compare to my peers
            <p className="these">These numbers represent current goal achievement</p></h1>
            <p className="priya">
            <p className="under"><b className="age">Age:</b> Under 30</p>
            <p className="k"><b className="salary">Salary:</b> K 20-K 30</p>
            <p className="male"><b className="gender">Gender:</b> Male</p></p>
            <p className="piechart"><Charts /></p>
        </div>
        <div className="classes">
      <div className="yes">
          <p className="no"><HomeIcon /></p>
          <p><StorageIcon /></p>
          <p><ListIcon /></p>
          <p><PersonIcon /></p>
          <p><SearchIcon /></p>
      </div>
    </div>     
    </div>
  )
}

export default Body