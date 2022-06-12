import "./sidebar.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import InputIcon from '@material-ui/icons/Input';
import StorageIcon from '@material-ui/icons/Storage';

const sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebaritems">
          <p className="search"><SearchIcon /></p>
          <p className="icon">
          <p className="Home"><HomeIcon /></p>
          <p className="storage"><StorageIcon /></p>
          <p className="listicon"><ListIcon /></p>
          <p className="personicon"><PersonIcon /></p>
          </p>
          <p className="notification"><NotificationsNoneIcon /></p>
          <p className="inputicon"><InputIcon /></p>
        </div>
    </div>
  )
}

export default sidebar;