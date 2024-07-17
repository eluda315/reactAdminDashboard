import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

const rows = [
    { thumbnail: 'src/assets/thumbnail.png', name: 'How Cats become the cutest animals in world', averageViewDuration: '2:25 (41.0%)', views: 3211 },
    { thumbnail: 'src/assets/thumbnail2.png', name: 'CAT hunting Course in 4 hours', averageViewDuration: '9:45 (30.5%)', views: 3102 },
    { thumbnail: 'src/assets/thumbnail.png', name: 'Cat eating meal in 5 minutes', averageViewDuration: '3:10 (25.5%)', views: 1900 },
    { thumbnail: 'src/assets/thumbnail2.png', name: 'Everything of Cats information Course including real cats', averageViewDuration: '8:10 (15.5%)', views: 1201 },
    { thumbnail: 'src/assets/thumbnail2.png', name: 'How to be favored by cats using snacks', averageViewDuration: '2:10 (34.1%)', views: 1195 },
    { thumbnail: 'src/assets/thumbnail.png', name: 'Animal Crash Course for beginners', averageViewDuration: '5:20 (14.1%)', views: 1037 }
];

function TopVideosList() {
    return ( <Box sx={styles.container}>
        <Typography variant="h6">
            Your top content in this period
        </Typography>
        <TableContainer sx={styles.tableContainer} component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Content</TableCell>
                        <TableCell align="right">Average view duration</TableCell>
                        <TableCell align="right">Views</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row=> (<TableRow key={row.name}>
                        <TableCell component={'th'} sx={styles.contentCell}>
                            <Box sx={styles.videoThumbnail} component='img' src={row.thumbnail} />
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.averageViewDuration}</TableCell>
                        <TableCell align="right">{row.views}</TableCell>
                    </TableRow>))}
                </TableBody>
            </Table>
        </TableContainer>
    </Box> );
}

export default TopVideosList;


/** @type {import("@mui/material").SxProps} */
const styles = {
    container: {
        mt: 4,
        width: '100%',
        textAlign: 'center'
    },
    tableContainer: {
        mt: 8
    },
    contentCell: {
        display: 'flex',
        alignItems: 'center'
    },
    videoThumbnail: {
        width: '100%',
        maxWidth: 100,
        mr: 1
    }
}