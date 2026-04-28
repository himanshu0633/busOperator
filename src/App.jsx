import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Fleet from './pages/Fleet.jsx';
import AddBus from './pages/AddBus.jsx';
import RoutesPage from './pages/RoutesPage.jsx';
import Staff from './pages/Staff.jsx';
import Trips from './pages/Trips.jsx';
import Earnings from './pages/Earnings.jsx';
import Profile from './pages/Profile.jsx';
import Config from './pages/Config.jsx';
import Login from './pages/Login.jsx';
const Wrap=({children})=><Layout>{children}</Layout>;
export default function App(){return <HashRouter><Routes>
<Route path="/login" element={<Login/>}/>
<Route path="/" element={<Wrap><Dashboard/></Wrap>}/>
<Route path="/fleet" element={<Wrap><Fleet/></Wrap>}/><Route path="/fleet/add" element={<Wrap><AddBus/></Wrap>}/>
<Route path="/routes" element={<Wrap><RoutesPage/></Wrap>}/><Route path="/staff" element={<Wrap><Staff/></Wrap>}/>
<Route path="/trips" element={<Wrap><Trips/></Wrap>}/><Route path="/earnings" element={<Wrap><Earnings/></Wrap>}/>
<Route path="/profile" element={<Wrap><Profile/></Wrap>}/><Route path="/config" element={<Wrap><Config/></Wrap>}/>
<Route path="/inventory" element={<Wrap><Fleet title="Live Inventory"/></Wrap>}/>
</Routes></HashRouter>}
