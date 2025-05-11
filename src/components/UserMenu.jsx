import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import React from 'react'
import { BiUser } from 'react-icons/bi';
import { FaIoxhost, FaShoppingCart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import BackDrop from './BackDrop';
import { logOutUser } from '../store/actions';
//import { logOutUser } from '../store/actions';

const UserMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const logOutHandler = () => {
        dispatch(logOutUser(navigate));
      };
  
    return (
      <div className='relative z-30'>
        <div className='sm:border-[1px] sm:border-slate-400 flex flex-row items-center gap-1 rounded-full cursor-pointer hover:shadow-md transition text-slate-700'
          onClick={handleClick} >
          <Avatar alt='Menu' src=''/>
        </div>


        <Menu
          sx={{ width:"400px" , marginTop:'20px' , }}
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
            sx: {width: 200 , backgroundColor: '#fafafa' , borderBottom: '5px solid #7799CC' , borderTop: '10px solid #7799CC'},
          }}
        >

          <Link to="/profile">
            <MenuItem className="flex gap-2" 
                onClick={handleClose}>
                    <BiUser className='text-2xl'/>
                    <span className='font-bold text-[18px] mt-1'>
                        {user?.username}
                    </span>
            </MenuItem>
          </Link>

          <Link to="/profile/orders">
            <MenuItem className="flex gap-2" 
                onClick={handleClose}>
                    <FaShoppingCart className='text-2xl'/>
                    <span className='font-bold text-[20px] mt-1'>
                        Order
                    </span>
            </MenuItem>
          </Link>

            <MenuItem className="flex gap-2"
                onClick={logOutHandler} >
                    <div className=' w-full flex items-center px-1 py-1 text-gray-800'>
                    <span className='font-bold text-[18px] mt-1 py-2 px-10 bg-amber-200 rounded-md'>
                        Log&nbsp;Out
                    </span>
                    </div>
            </MenuItem>

        </Menu>

        {open && <BackDrop />}
      </div>
    );

};
export default UserMenu;




// const UserMenu = (props) => {
//   const { username } = props ;
//   return (
//     <div className='bg-sky-700 text-gray-50 px-2  pb-1 m-1 py-0 rounded-md text-[1.5rem] font-semibold'>
//        {username}
//     </div>
//   )
// };
//export default UserMenu;
