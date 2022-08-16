import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';

class Home extends Component {
    render() {
        return (
            <div>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography>hello</Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default Home;