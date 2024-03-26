import { makeStyles } from '@material-ui/core/styles'
import { Color } from '../../Constants/Color';

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    rootBackgroundColor: {
        backgroundColor: Color.primary[60]
    }
}));