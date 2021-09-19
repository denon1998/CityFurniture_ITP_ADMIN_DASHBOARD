import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import { useLocation } from 'react-router-dom';

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
 
  top:0;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 300px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
 
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

export const Sidebar = () => {
    const [sidebar, setSidebar,] = useState(false);
    const [messages, setMessages] = useState([]);

    const showSidebar = () => setSidebar(!sidebar);
    const location = useLocation()

    // React.useEffect(() => {
    //     showSidebar()
    //     // runs on location, i.e. route, change
    //     console.log('handle route change here', location)
    //   }, [location])


    useEffect(() => {
        // subscribe to home component messages
        // const subscription = messageService.onMessage().subscribe(message => {
        //     if (message.topic === 'PAGE_NAME') {
        //         // add message to local state if not empty
        //         setMessages([]);
        //         setMessages(messages => [...messages, message.msg]);
        //     } else {
        //         // clear messages when empty message received
        //         setMessages([]);
        //     }
        // });

        // return unsubscribe method to execute when component unmounts
        // return subscription.unsubscribe;
       
    }, []);


    return (
        <div>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavIcon to='#'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </NavIcon>

                    <h3 style={{ color: 'white', paddingLeft: '5px', paddingTop: '5px' }}>City furniture store - Admin Dashboard &nbsp;

                    </h3>




                </Nav>
              
                    <SidebarNav sidebar={sidebar}>
  <div style={{overflow:'auto',width:'300px'}}>
                        <SidebarWrap>
                            <NavIcon to='#'>
                                <AiIcons.AiOutlineClose onClick={showSidebar} />
                            </NavIcon>
                            {SidebarData.map((item, index) => {
                                return <SubMenu item={item} key={index} controlSidebar={()=>{
                                   showSidebar()
                                }} />;
                            })}
                        </SidebarWrap>       </div>
                    </SidebarNav>
         


            </IconContext.Provider>
        </div>
    );
};

// export default Sidebar;
