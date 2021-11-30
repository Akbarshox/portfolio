import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import {Link, useLocation} from "react-router-dom";
import style from './layout.module.css';
import github from '../../assets/icons/github.svg';
import facebook from '../../assets/icons/facebook.svg';
import gmail from '../../assets/icons/gmail.svg';
import discord from '../../assets/icons/discord.svg';
import linkedin from '../../assets/icons/linkedin.svg';

const drawerWidth = 350;

const useStyles = makeStyles((theme: Theme) => createStyles({
   root: {
      display: 'flex',
   },
   drawer: {
      [theme.breakpoints.up('sm')]: {
         width: drawerWidth,
         flexShrink: 0,
      },
   },
   appBar: {
      [theme.breakpoints.up('sm')]: {
         width: `calc(100% - ${drawerWidth}px)`,
         marginLeft: drawerWidth,
      },
   },
   menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
         display: 'none',
      },
   },
   toolbar: theme.mixins.toolbar,
   drawerPaper: {
      width: drawerWidth,
      background: '#1e1e1e'
   },
   content: {
      flexGrow: 1,
      padding: theme.spacing(3),
   },
}),);

export default function ResponsiveDrawer() {
   const classes = useStyles();
   const loc = useLocation();

   return (
      <div className={classes.root}>
         <nav className={classes.drawer} aria-label="mailbox folders">
            <Hidden xsDown implementation="css">
               <Drawer
                  classes={{
                     paper: classes.drawerPaper,
                  }}
                  variant="permanent"
                  open
               >
                  <div className={style.socialMedia}>
                     <a href="https://github.com/Akbarshox"><img src={github} alt=""/></a>
                     <a href="https://www.linkedin.com/in/akbarjon-mukhammadjanov-364aa617a/">
                        <img src={linkedin} alt=""/>
                     </a>
                     <a href="#"><img src={gmail} alt=""/></a>
                     <a href="https://www.facebook.com/profile.php?id=100008033747950"><img src={facebook} alt=""/></a>
                     <a href="#"><img src={discord} alt=""/></a>
                  </div>
                  <div>
                     <div className={style.code}>
                        <pre>
                           <code>
                              <span className={style.blue}>function</span>
                              <span className={style.orange}> MyPortfolio</span>
                              <span>()</span>
                              <span> {`{`}</span>
                              <div className={style.return}>
                                 <p className={style.red}>return <span className={style.white}> (</span></p>
                                 <div className={style.nav}>
                                    <p>{`<`}<span
                                       className={style.blue}>{`nav`}</span><span>{`>`}</span></p>
                                    <div className={style.ul}>
                                       <p>{`<`}<span
                                          className={style.blue}>ul</span><span>{`/>`}</span></p>
                                       <div className={style.li}>
                                          <p>{`<`}<span
                                             className={style.blue}>{`li`}</span><span>{`>`}</span></p>
                                          <p>{`\xa0\xa0<`}
                                             <Link to={'/home'}>
                                                <span className={style.green}>{`Home`}
                                                   {loc.pathname === '/home' ?
                                                      <span className={style.active}> active </span> : ''}
                                                </span>
                                             </Link>
                                             <span>{`/>`}</span></p>
                                          <p>{`</`}<span
                                             className={style.blue}>{`li`}</span><span>{`>`}</span></p>
                                       </div>
                                       <div className={style.li}>
                                          <p>{`<`}<span
                                             className={style.blue}>{`li`}</span><span>{`>`}</span></p>
                                          <p>{`\xa0\xa0<`}
                                             <Link to={'/experience'}>
                                                <span
                                                   className={style.green}>{`Experience`}{loc.pathname === '/experience' ?
                                                   <span className={style.active}> active </span> : ''}</span>
                                             </Link><span>{`/>`}</span></p>
                                          <p>{`</`}<span
                                             className={style.blue}>{`li`}</span><span>{`>`}</span></p>
                                       </div>
                                       <div className={style.li}>
                                          <p>{`<`}<span
                                             className={style.blue}>{`li`}</span><span>{`>`}</span></p>
                                          <p>{`\xa0\xa0<`}
                                             <Link to={'/mywork'}>
                                               <span className={style.green}>{`MyWork`}{loc.pathname === '/mywork' ?
                                                  <span className={style.active}> active </span> : ''}</span>
                                             </Link><span>{`/>`}</span></p>
                                          <p>{`</`}<span
                                             className={style.blue}>{`li`}</span><span>{`>`}</span></p>
                                       </div>
                                       <div className={style.li}>
                                          <p>{`<`}<span
                                             className={style.blue}>{`li`}</span><span>{`>`}</span></p>
                                          <p>{`\xa0\xa0<`}
                                             <Link to={'/contact'}>
                                             <span className={style.green}>{`Contact`}{loc.pathname === '/contact' ?
                                                <span className={style.active}> active </span> : ''}</span>
                                             </Link><span>{`/>`}</span></p>
                                          <p>{`</`}<span
                                             className={style.blue}>{`li`}</span><span>{`>`}</span></p>
                                       </div>
                                       <div className={style.li}>
                                          <p>{`<`}<span
                                             className={style.blue}>{`li`}</span><span>{`>`}</span></p>
                                          <p>{`\xa0\xa0<`}
                                             <Link to={'/resume'}>
                                             <span className={style.green}>{`Resume`}{loc.pathname === '/resume' ?
                                                <span className={style.active}> active </span> : ''}</span>
                                             </Link><span>{`/>`}</span></p>
                                          <p>{`</`}<span
                                             className={style.blue}>{`li`}</span><span>{`>`}</span></p>
                                       </div>
                                       <p>{`</`}<span
                                          className={style.blue}>ul</span><span>{`>`}</span></p>
                                    </div>
                                    <p>{`</`}<span className={style.blue}>{`nav`}</span><span>{`>`}</span></p>
                                 </div>
                                 <p>{`);`}</p>
                              </div>
                              <p>{`}`}</p>
                           </code>
                        </pre>
                     </div>
                  </div>
               </Drawer>
            </Hidden>
         </nav>
      </div>
   );
}