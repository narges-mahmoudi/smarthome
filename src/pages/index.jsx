import React, { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/dashboaed.jsx";
import Template from "./Template/template.jsx";
import Device from './device.jsx';
import TemplateDetail from './Template/template-detail.jsx'
import DashboardSideBar from '../components/sidebar.jsx'

export default function Pages(params) {
    return (
        <>
            <div className='base'>
            <DashboardSideBar />
                <Routes>
                    <Route index path="dashboard" element={<Dashboard />} />
                    <Route path="template">
                        <Route index element={<Template />} />
                        <Route path='detail' element={<TemplateDetail />} />
                    </Route>
                    <Route path="device">
                        <Route index element={<Device />} />
                        <Route path='detail' element={<Device />} />
                    </Route>

                </Routes>
            </div>
        </>
    )
}