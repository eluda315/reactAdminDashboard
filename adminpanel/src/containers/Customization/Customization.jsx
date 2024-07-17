import { Box, Tab, Tabs, Typography } from "@mui/material";
import TabPanel from "../../components/TabPanel";
import { useState } from "react";
import ColorText from '../../components/ColorText';
import SlowMotionVideoRoundedIcon from '@mui/icons-material/SlowMotionVideoRounded';
import MovieFilterRoundedIcon from '@mui/icons-material/MovieFilterRounded';

function Customization() {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return ( <Box>
        <Typography sx={styles.pageTitle} variant="h5">Customization</Typography>
        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
            <Tabs value={value} onChange={handleChange} >
                <Tab label='Layout' id='tab-0' />
                <Tab label='Branding' id='tab-1' />
                <Tab label='Basic Info' id='tab-2' />
            </Tabs>

        </Box>
        <TabPanel value={value} index={0}>
            <Typography variant="h6">Video spotlight</Typography>
            <Typography variant="h7"><ColorText color='neutral.normal'>Add a video to the top of your channel homepage</ColorText></Typography>
            <Box sx={styles.rowContainer}>
                <SlowMotionVideoRoundedIcon sx={styles.rowIcon} />
                <Box sx={styles.secondColumn}>
                    <Typography variant="h6">Channel trailer for people who have not subscribed</Typography>
                    <Typography variant="h7"><ColorText color='neutral.normal'>Share a preview of your channel shown with people who have not subscribed yet.</ColorText></Typography>
                </Box>
                <Typography sx={styles.rowLink} variant="link">Add</Typography>
            </Box>
            <Box sx={styles.rowContainer}>
                <MovieFilterRoundedIcon sx={styles.rowIcon} />
                <Box sx={styles.secondColumn}>
                    <Typography variant="h6">Featured video for returning subscribers</Typography>
                    <Typography variant="h7"><ColorText color='neutral.normal'>Highlight a video for your subscribers to watch. This video will not be shown again at the top of your page for subscribers who have watched it.</ColorText></Typography>
                </Box>
                <Typography sx={styles.rowLink} variant="link">Add</Typography>
            </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Typography>Nothing yet</Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <Typography>Nothing yet</Typography>
        </TabPanel>
    </Box>);
}

export default Customization;


/** @type {import("@mui/material").SxProps} */
const styles = {
    pageTitle: {
        mb: 2
    },
    rowContainer: {
        width: '100%',
        maxWidth: 900,
        border: 1,
        borderColor: 'neutral.medium',
        borderRadius: 1,
        mt: 2,
        p: 2,
        display: 'flex',
        alignItems: 'flex-start'
    },
    rowIcon: {
        fontSize: 40,
        color: 'neutral.normal'
    },
    secondColumn: {
        ml: 1
    },
    rowLink: {
        ml: 'auto'
    }
}