// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import IconButton from '@material-ui/core/IconButton';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
//
//
// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'space-around',
//         overflow: 'hidden',
//         backgroundColor: theme.palette.background.paper,
//         zIndex:"2",
//     },
//     gridList: {
//         width: 1300,
//         height: 1050,
//         // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
//         transform: 'translateZ(0)',
//     },
//     titleBar: {
//         background:
//             'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
//             'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
//     },
//     icon: {
//         color: 'white',
//     },
// }));
//
// /**
//  * The example data is structured as follows:
//  *
//  * import image from 'path/to/image.jpg';
//  * [etc...]
//  *
//  * const tileData = [
//  *   {
//  *     img: image,
//  *     title: 'Image',
//  *     author: 'author',
//  *     featured: true,
//  *   },
//  *   {
//  *     [etc...]
//  *   },
//  * ];
//  */
// export default function AdvancedGridList(props) {
//     const classes = useStyles();
//
//     return (
//         <div className={classes.root}>
//             <GridList cellHeight={400} spacing={1} className={classes.gridList}>
//
//                 {props.articles.map((tile) => (
//
//                     <GridListTile key={tile.url} cols={tile.url.length % 2? 2: 1} rows={tile.url.length % 2? 2: 1 }>
//                         key={tile.publishedAt}
//                         <img src={tile.urlToImage} alt={tile.title} />
//                         <GridListTileBar
//                             title={tile.title}
//                             titlePosition="top"
//                             actionIcon={
//                                 <IconButton aria-label={`star ${tile.title}`} className={classes.icon}>
//                                     <StarBorderIcon />
//                                 </IconButton>
//                             }
//                             actionPosition="left"
//                             className={classes.titleBar}
//                         />
//                     </GridListTile>
//                 ))}
//             </GridList>
//         </div>
//     );
// }
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import {Divider} from "@material-ui/core";


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

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function TitlebarGridList(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={400} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>

                </GridListTile>
                {props.articles.map((tile) => (
                    <GridListTile key={tile.url}>
                        <img src={tile.urlToImage} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            subtitle={<span>by: {tile.author}</span>}
                            actionIcon={
                                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>

    );
}