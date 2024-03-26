import { makeStyles } from "@material-ui/core/styles";
import { Color } from "../../Constants/Color";

export const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        height: 156,
        width: "calc((100vw - 48px) / 2)",
        backgroundColor: Color.primary[60],
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
        gap: 16,
        "&:active": {
            backgroundColor: Color.primary[40]
        }
    }
}))