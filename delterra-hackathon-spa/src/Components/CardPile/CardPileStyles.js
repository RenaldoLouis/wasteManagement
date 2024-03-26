import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    cirlceCard: {
        background: "blue",
        padding: 16,
        borderRadius: 50,
        width: "3rem",
        height: "3rem"
    },
    cardContainer: {
        height: 200,
        background: "gray",
        borderRadius: 16
    }
}));