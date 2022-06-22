import React, { Fragment } from "react";
import { Card, IconButton, Typography } from '@mui/material';
import PhoneCallbackSharpIcon from '@mui/icons-material/PhoneCallbackSharp';
import PhoneForwardedSharpIcon from '@mui/icons-material/PhoneForwardedSharp';
import ArchiveIcon from '@mui/icons-material/Archive';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import { transformDate, formatAMPM } from '../utils/utils';
import { Wrapper, StyledCardContent } from '../style/menuStyle';

const Menu = (props) => {
    const { list, value, updateCall } = props;

    const handleClick = (id) => {
      if(value==='archived')  
        updateCall(id, false);
      else updateCall(id, true);
    };

    return (
     <div>
      { list && list.map(item => 
         <Fragment>
          <div>{value==='feed' && <p>{transformDate(item.created_at)}</p>}</div>
          <Card>
            <StyledCardContent>
              <div>{item.direction==='inbound'? <PhoneCallbackSharpIcon style={{color: value==='feed'? '#3ca211':'#012323'}}/>:
                <PhoneForwardedSharpIcon style={{color: value==='feed'? '#3ca211':'#012323'}}/>}
              </div>
              <div>
                <div>
                  { item.direction==='inbound'? <Typography variant="body2">{item.from}</Typography>:<Typography variant="body2">{item.to}</Typography> }
                </div>
                <div>
                { item.direction==='outbound'? <Typography variant="caption">tried to call on {item.from}</Typography>:
                  <Typography variant="caption">{item.call_type!=='voicemail'? `tried to call on ${item.to}`:'voicemail'}</Typography> }
                </div>
              </div>
              <Wrapper>
                {value==='feed' && <p>{formatAMPM(item.created_at)}</p>}
                <IconButton onClick={()=>handleClick(item.id)}>
                  {value==='archived'? <UnarchiveIcon />:<ArchiveIcon style={{color:'#3ca211'}}/>}
                </IconButton>
              </Wrapper>
            </StyledCardContent>
          </Card>
         </Fragment>
        )
      }
     </div>
    );
}

export default Menu;

