import React, { useState, useEffect, Fragment } from "react";
import { Card, CardContent, IconButton, Typography } from '@mui/material';
import PhoneCallbackSharpIcon from '@mui/icons-material/PhoneCallbackSharp';
import PhoneForwardedSharpIcon from '@mui/icons-material/PhoneForwardedSharp';
import ArchiveIcon from '@mui/icons-material/Archive';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import { transformDate, formatAMPM } from '../utils/utils';

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
          <div><Typography>{transformDate(item.created_at)}</Typography></div>
          <Card sx={{borderRadius: 5}}>
            <CardContent sx={{display: 'flex', flexDirection:"row", justifyContent:"space-between"}}>
              {item.direction==='inbound'? <PhoneCallbackSharpIcon style={{color: value==='feed'? '#3ca211':'#012323'}}/>:
                <PhoneForwardedSharpIcon style={{color: value==='feed'? '#3ca211':'#012323'}}/>}
              <div>
                <div>
                  { item.direction==='inbound'? <Typography varient="body2">{item.from}</Typography>:<Typography>{item.to}</Typography> }
                </div>
                <div>
                { item.direction==='outbound'? <Typography>tried to call on {item.from}</Typography>:
                  <Typography>{item.call_type!=='voicemail'? `tried to call on ${item.to}`:'voicemail'}</Typography> }
                </div>
              </div>
              <div style={{display:'flex', flexDirection:'column'}}>
                <p>{formatAMPM(item.created_at)}</p>
                <IconButton onClick={()=>handleClick(item.id)}>
                  {value==='archived'? <UnarchiveIcon />:<ArchiveIcon style={{color:'#3ca211'}}/>}
                </IconButton>
              </div>
            </CardContent>
          </Card>
         </Fragment>
        )
      }
     </div>
    );
}

export default Menu;

