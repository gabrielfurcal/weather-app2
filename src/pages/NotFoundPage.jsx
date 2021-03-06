import React from 'react'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { IconContext } from 'react-icons'
import { WiRain } from 'react-icons/wi'
import { Link as RouterLink } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <Grid container direction="column" justify="center" className="full">
        <div className="highlight">
            <Grid item container xs={12} justify="center" alignItems="center"> 
                <Grid item>
                    <IconContext.Provider value={{ size: "24em" }}>
                        <WiRain/>
                    </IconContext.Provider>
                </Grid>
                <Grid item container direction="column" justify="center" alignItems="center" >
                    <Typography variant="h2" color="inherit">404 | The page does not exist</Typography>
                    <Link color="inherit" aria-label="menu" component={RouterLink} to="/main">Back</Link>
                </Grid>
            </Grid>
        </div>
    </Grid>
    )
}

export default NotFoundPage