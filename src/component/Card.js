import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import {FaGithub, FaArrowCircleRight} from 'react-icons/fa';
import Typography from '@mui/material/Typography';
import {useMediaQuery} from '@mui/material';
export default function MaCard({
  img,
  title,
  redirect,
  description,
  setSelected,
  techno,
  taille,
  repo,
}) {
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const styles = {
    maxWidth: isSmallScreen ? 320 : 290,
    maxHeight: taille ? taille : 370,
    backgroundColor: '#282c33',
    border: '2px solid #afb5bc',
    marginLeft: 3,
  };
  const semi_style = {
    border: '1px solid #afb5bc ',
    width: isSmallScreen ? 340 : 320,
    marginLeft: -5,
    color: 'white',
    alignContent: 'center',
  };
  const text = {
    fontFamily: 'Fira Code Semibold ,sans-cerif',
    fontSize: 14,
    color: 'white',
  };
  const titleStyle = {
    fontFamily: 'Fira Code Semibold ,sans-cerif',
    fontSize: 16,
    color: 'white',
  };
  return (
    <Card sx={styles}>
      {img && (
        <CardMedia
          component="img"
          alt="screenshot of the interface"
          height="180"
          image={img}
          sx={{border: '1px solid #afb5bc'}}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <span style={titleStyle}>{title}</span>
        </Typography>
        <Typography gutterBottom variant="h8" component="div" sx={semi_style}>
          {techno.map((tech, index) => (
            <span key={index} style={text}>
              {tech}
            </span>
          ))}
        </Typography>

        <Typography
          variant="body2"
          component="div"
          sx={{
            color: '#abb2bf',
            fontFamily: 'Fira Code Regular ,sans-serif',
            fontSize: 11,
            alignSelf: 'flex-start',
          }}
        >
          {description}
        </Typography>
        {redirect && (
          <span style={{color: 'white'}}>
            show more
            <IconButton
              aria-label="fingerprint"
              color="secondary"
              onClick={() => setSelected(1)}
            >
              <FaArrowCircleRight />
            </IconButton>
          </span>
        )}
        {repo && (
          // <Typography gutterBottom variant="h8" component="div" sx={semi_style}>
          <span style={text}>
            check the repo on
            <a href={repo} target="_blank">
              <IconButton aria-label="fingerprint" color="secondary">
                <FaGithub />
              </IconButton>
            </a>
          </span>
          // </Typography>
        )}
      </CardContent>
    </Card>
  );
}
