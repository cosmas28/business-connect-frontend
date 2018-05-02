import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import axios from "axios";

import OneBusinessView from './ViewBusiness/OneBusinessView'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'userB': '',
            ''
        };
    }
}

export default Dashboard;
