import React, { FC, useState } from 'react';
import { Grid, TextField, Theme, makeStyles, Button } from '@material-ui/core';
import { BaseCSSProperties } from '@material-ui/core/styles/withStyles';

interface StyleProps {
  title: BaseCSSProperties;
  multilineColor: BaseCSSProperties;
  buttonContainer: BaseCSSProperties;
}

const baseStyle: StyleProps = {
  title: {
    width: '100%',
  },
  multilineColor: {
    color: '#fff',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
};

type PropsClasses = Record<keyof StyleProps, string>;

const useStyles = makeStyles<Theme, StyleProps>(() => baseStyle as any);

const TodoInputField: FC = () => {
  const classes: PropsClasses = useStyles({} as StyleProps);

  const [val, setVal] = useState('');

  const addTodo = () => {
    console.log('==== val', val);
  };

  return (
    <div>
      <Grid item xs={10}>
        <TextField
          id="todo-textfield"
          InputProps={{
            className: classes.multilineColor,
          }}
          className={classes.title}
          variant="outlined"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      </Grid>
      <Grid item xs={2} className={classes.buttonContainer}>
        <Button onClick={addTodo} variant="outlined" color="primary" id="todo-submit-btn">
          Add
        </Button>
      </Grid>
    </div>
  );
};

export default TodoInputField;
