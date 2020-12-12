import { Grid, TextField, Theme, makeStyles } from '@material-ui/core';
import React, { FC } from 'react';
import Title from '../../component/Title';
import TodoInputField from '../TodoInputField';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';
interface StyleProps {
  titleContainer: BaseCSSProperties;
  home: BaseCSSProperties;
  inputContainer: BaseCSSProperties;
}

const baseStyle: StyleProps = {
  titleContainer: {
    textAlign: 'center',
  },
  home: {
    padding: '16px',
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
  },
};

type PropsClasses = Record<keyof StyleProps, string>;

const useStyles = makeStyles<Theme, StyleProps>(() => baseStyle as any);

const Home: FC = () => {
  const classes: PropsClasses = useStyles({} as StyleProps);

  return (
    <Grid container className={classes.home}>
      <Grid item xs={12} className={classes.titleContainer}>
        <Title title="Todo List" />
      </Grid>
      <Grid item container xs={12} className={classes.inputContainer} spacing={2}>
        <TodoInputField />
      </Grid>
    </Grid>
  );
};

export default Home;
