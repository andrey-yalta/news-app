import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import CustomizedDialogs from "../../Dialog/DIalog";
import news from "../../../common/img/news.jpg"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },

    gridList: {
        width: 1400,
        height: "100%",
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));

export default function TitlebarGridList(props) {
    const classes = useStyles();
    console.log(props.articles);
    debugger;
    return (
        <div className={classes.root}>
            <GridList cellHeight={400} className={classes.gridList}>
                {/*<GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>*/}

                {/*</GridListTile>*/}
                {props.articles.map((tile) => (


                    <GridListTile key={tile.url}>
                        <CustomizedDialogs description={tile.description}
                                           content={tile.content}
                                           publishedAt={tile.publishedAt}
                                           url={tile.url}
                                           title={tile.title}
                                            name={tile.source.name}>
                        <img src={tile.urlToImage ? tile.urlToImage :news} alt={tile.title}  style={{width:"100%"}} />
                            </CustomizedDialogs>
                        <GridListTileBar
                            title={tile.title}
                            subtitle={<span>by: {tile.author}</span>}
                            actionIcon={
                                <a href={tile.url} target="_blank">
                                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                                    <InfoIcon />
                                </IconButton>
                                </a>
                            }
                        />

                    </GridListTile>



                ))}

            </GridList>
        </div>

    );
}