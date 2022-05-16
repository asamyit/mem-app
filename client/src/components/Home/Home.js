import React from 'react'
import {Container,Grow,Grid} from '@material-ui/core'
import Posts from '../Posts/Posts'
import Forms from '../Forms/Forms'
import useStyles from './styles'


export default function Home() {
    const classes = useStyles()
    return (
        <Grow in>
            <Container>
                <Grid className={classes.mainContainer} container justifyContent='space-between' alignItems='stretch' spacing={3}>
                    <Grid item xs={12} sm={7}>
                    <Posts />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <Forms />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
  )
}
