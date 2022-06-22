import { styled } from '@mui/system';
import { CardContent } from '@mui/material';

const Wrapper = styled('div')({
    diaplay: 'flex',
    flexDirection:'column',
    justifyContent: 'end',
    alignItems: 'end',
});

const StyledCardContent = styled(CardContent)({
    display: 'flex', 
    flexDirection:"row", 
    justifyContent:"space-between", 
    padding: 2
});


export { Wrapper, StyledCardContent };