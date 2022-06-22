import { createUseStyles } from 'react-jss';

const appStyle = createUseStyles({
  app: {
    width: 'inherit',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  },
  container: {
    width: 380,
    height: 666,
    'z-index': 100,
    display: 'flex',
    flexDirection: 'column',
    background: '#FFFFFF',
    borderRadius: 3
  }
});

export default appStyle;