import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FiGrid, FiTruck, FiGitBranch, FiUsers, FiCalendar, FiLayers, FiDollarSign, FiUser, FiSettings, FiLogOut } from 'react-icons/fi';

const menu = [
  ['Overview','/',FiGrid], ['Fleet Management','/fleet',FiTruck], ['Route Control','/routes',FiGitBranch],
  ['Staff / Crew','/staff',FiUsers], ['Schedule Trips','/trips',FiCalendar], ['Live Inventory','/inventory',FiLayers],
  ['Earning Reports','/earnings',FiDollarSign], ['Profile Panel','/profile',FiUser], ['Configuration','/config',FiSettings]
];

export default function Layout({children}){
  const navigate = useNavigate();
  return <div className="app-shell">
    <aside className="sidebar">
      <div className="brand"><div className="brand-icon"><FiTruck/></div><div><h2>Operator Hub</h2><p>Fleet Management</p></div></div>
      <div className="operator-card"><div className="avatar">M</div><div><b>Maharashtra Travels</b><span>OPR-2024-0112</span></div><i/></div>
      <p className="menu-label">MENU</p>
      <nav>{menu.map(([label,path,Icon])=><NavLink key={path} to={path} end={path==='/'}><Icon/><span>{label}</span><em>|</em></NavLink>)}</nav>
      <button className="exit" onClick={()=>navigate('/login')}><FiLogOut/> Exit Portal</button>
    </aside>
    <main className="content">{children}</main>
  </div>
}

export function Header({title,subtitle,button,back}){
  const navigate = useNavigate();
  return <header className="page-header">{back && <button className="back" onClick={()=>navigate(-1)}>←</button>}<div><h1>{title}</h1><p>{subtitle}</p></div>{button}</header>
}
