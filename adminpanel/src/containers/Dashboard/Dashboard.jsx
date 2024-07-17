import { Avatar, Box, Card, CardContent, Divider, Typography } from "@mui/material";
import LatestVideoCard from "../../components/LatestVideoCard";
import ColorText from "../../components/ColorText";

function Dashboard() {
    return ( <Box>
        <Typography sx={StyleSheet.pageTitle} variant='h5'>Channel Dashboard</Typography>
        <Box sx={styles.columnsContainer}>
        <LatestVideoCard sx={styles.items} />
            <Card sx={styles.item}>
                <CardContent>
                    <Typography variant="cardTitle">Latest post</Typography>
                    <Box sx={styles.postAuthorSection}>
                        <Avatar sx={styles.avatar} src="src/assets/avatars/bear-avatar.jpeg" />
                        <Typography sx={styles.postMeta}>Teddy World</Typography>
                        <Typography sx={styles.postMeta}>July 12, 2024</Typography>
                    </Box>
                    <Typography variant="body2">I am the very fan of Teddy. Teddy is my love, my world, my everything. I hope DRX get the playoff.</Typography>
                    <Divider sx={styles.divider} />
                    <Box sx={styles.postStats}>
                        <Typography variant="body2">Likes</Typography>
                        <Typography variant="body2">Comments</Typography>
                        <Typography variant="h6">1,998</Typography>
                        <Typography variant="h6">315</Typography>
                    </Box>
                    <Typography sx={styles.cardAction} variant="link">GO TO COMMUNITY TAB</Typography>
                </CardContent>
            </Card>


            <Card sx={styles.item}>
                <CardContent>
                    <Typography variant="cardTitle">Channel analytics</Typography>
                    <Typography variant="h7">Current Subscribers</Typography>
                    <Typography variant="h4">4,144</Typography>
                    <Typography variant="h7"><ColorText color={'green.main'}>+77</ColorText> <ColorText color='neutral.normal'>in last 28 days</ColorText></Typography>
                    <Divider sx={styles.divider} />
                    <Typography variant="h6">Summary</Typography>
                    <Typography variant="h8"><ColorText color={'neutral.normal'}>Last 28 days</ColorText></Typography>
                    <Box sx={styles.videoStatsRow}>
                        <Typography variant="h7">Views</Typography>
                        <Typography variant="h7">225</Typography>
                    </Box>
                    <Box sx={styles.videoStatsRow}>
                        <Typography variant="h7">Watch Time (hours)</Typography>
                        <Typography variant="h7">30</Typography>
                    </Box>
                    <Box sx={styles.videoStatsRow}>
                        <Typography variant="h7">Estimated Revenue</Typography>
                        <Typography variant="h7">$450</Typography>
                    </Box>
                    <Divider sx={styles.divider} />
                    <Typography variant="h6">Top videos</Typography>
                    <Typography variant="h8"><ColorText color='neutral.normal'>Last 48 hours . Views</ColorText></Typography>
                    <Box sx={styles.videoStatsRow}>
                        <Typography variant="h7">How cats save the world by being cute</Typography>
                        <Typography variant="h7">540</Typography>
                    </Box>
                    <Box sx={styles.videoStatsRow}>
                        <Typography variant="h7">Teddy tutorial: How to become a fan of Teddy</Typography>
                        <Typography variant="h7">23,635</Typography>
                    </Box>
                    <Box sx={styles.videoStatsRow}>
                        <Typography variant="h7">Unkillable Demon King: Faker, the living legend</Typography>
                        <Typography variant="h7">960,507</Typography>
                    </Box>
                    <Typography sx={styles.cardAction} variant="link">GO TO VIDEO ANALYTICS</Typography>
                </CardContent>
            </Card>

            <Card sx={styles.item}>
                <CardContent>
                    <Typography variant="cardTitle">Latest comments</Typography>
                    <Typography variant="h7"><ColorText color='neutral.normal'>Channel comments I have not responded to</ColorText></Typography>


                    <Box sx={styles.commentRow}>
                        <Avatar sx={styles.avatar} src='src/assets/avatars/bear-avatar.jpeg' />
                        <Box>
                            <Box sx={styles.commentDetailsSection}>
                                <Typography sx={styles.postMeta}>Teddy World</Typography>
                                <Typography sx={styles.postMeta}>2 weeks ago</Typography>
                            </Box>
                            <Typography sx={styles.commentText}>
                                Get tips from cat information. You can also be an awesome understander of every cats.
                            </Typography>
                        </Box>
                        <Box
                            component={'img'}
                            sx={styles.videoThumbnail}
                            src='src/assets/thumbnail.png'
                        />
                    </Box>
                    <Divider sx={styles.divider} />
                    <Box sx={styles.commentRow}>
                        <Avatar sx={styles.avatar} src='src/assets/avatars/bear-avatar.jpeg' />
                        <Box>
                            <Box sx={styles.commentDetailsSection}>
                                <Typography sx={styles.postMeta}>Teddy World</Typography>
                                <Typography sx={styles.postMeta}>2 weeks ago</Typography>
                            </Box>
                            <Typography sx={styles.commentText}>
                                Car is running. cat is sooooo cute
                            </Typography>
                        </Box>
                        <Box
                            component={'img'}
                            sx={styles.videoThumbnail}
                            src='src/assets/thumbnail.png'
                        />
                    </Box>
                    <Divider sx={styles.divider} />
                    <Box sx={styles.commentRow}>
                        <Avatar sx={styles.avatar} src='src/assets/avatars/bear-avatar.jpeg' />
                        <Box>
                            <Box sx={styles.commentDetailsSection}>
                                <Typography sx={styles.postMeta}>Teddy World</Typography>
                                <Typography sx={styles.postMeta}>2 weeks ago</Typography>
                            </Box>
                            <Typography sx={styles.commentText}>
                                Thank you, was very helpful.
                            </Typography>
                        </Box>
                        <Box
                            component={'img'}
                            sx={styles.videoThumbnail}
                            src='src/assets/thumbnail.png'
                        />
                    </Box>

                    <Typography sx={styles.cardAction} variant='link'>VIEW MORE</Typography>

                </CardContent>
            </Card>

            <Card sx={styles.item}>
                <CardContent sx={styles.ideaContent}>
                    <Box>
                        <Typography variant="cardTitle">Ideas for you</Typography>
                        <Typography sx={styles.ideasQuestion}>Ready to get CAT savvy?</Typography>
                        <Typography variant="h7">
                            Get tips from cat information. You can also be an awesome understander of every cats.
                        </Typography>
                        <Typography sx={styles.cardAction} variant="link">GET STARTED NOW</Typography>
                    </Box>
                    <Box
                        component={'img'}
                        sx={styles.ideaImage}
                        src='src/assets/study-icon.png' />
                </CardContent>
            </Card>

            <Card sx={styles.item}>
                <CardContent sx={styles.ideaContent}>
                    <Box>
                        <Typography variant="cardTitle">CAT Insider</Typography>
                        <Box
                            component={'img'}
                            sx={styles.insderImage}
                            src={'src/assets/thumbnail2.png'} />
                        <Typography sx={styles.ideasQuestion}>Ready to make your heart flutter with cute cats?</Typography>
                        <Typography variant="h7">
                            Get tips from cat information. You can also be an awesome understander of every cats.
                        </Typography>
                        <Typography sx={styles.cardAction} variant='link'>WATCH ON YOUTUBE</Typography>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    </Box>);
}

export default Dashboard;


/** @type {import("@mui/material").SxProps} */
const styles = {
    pageTitle: {
        mb: 2
    },
    columnsContainer: {
        columns: '280px 3',
        maxWidth: 1400
    },
    item: {
        mb: 2
    },
    postAuthorSection: {
        display: 'flex',
        alignItems: 'center',
        my: 3
    },
    avatar: {
        width: '30px',
        height: 'auto',
        mr: 1
    },
    postMeta: {
        mr: 1,
        fontSize: '0.8rem',
        color: 'neutral.normal'
    },
    divider: {
        my: 2
    },
    postStats: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        my: 3
    },
    cardAction: {
        mt: 2
    },
    videoStatsRow: {
        display: 'flex',
        justifyContent: 'space-between',
        mt: 2,
        '&:hover': {
            color: 'primary.main',
            cursor: 'pointer'
        }
    },
    commentRow: {
        display: 'flex',
        alignItems: 'flex-start',
        mt: 2
    },
    commentDetailsSection: {
        display: 'flex',
        alignItems: 'center'
    },
    commentText: {
        fontSize: '0.8rem',
        mt: 0.5,
        mr: 2
    },
    videoThumbnail: {
        width: 80,
        ml: 'auto'
    },
    ideaContent: {
        display: 'flex'
    },
    ideasQuestion: {
        fontSize: '0.9rem',
        fontWeight: 500,
        my: 2
    },
    ideaImage: {
        width: 80,
        alignSelf: 'center',
        ml: 5
    },
    insderImage: {
        width: '100%',
        mt: 1
    }
}