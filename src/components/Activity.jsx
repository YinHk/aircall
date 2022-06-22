import React, { useState, useEffect } from "react";
import axios from 'axios';
import { TableSortLabel, Tabs } from '@mui/material';
import { Container, TabWrapper, FeedTab, ArchiveTab, ArchiveBtn } from '../style/activityStyle';

import Menu from "./Menu";

const Activity = (props) => {
    const [value, setValue] = useState('feed');
    const [callsList, setCallsList] = useState(null);
    const [unarchivedList, setUnarchivedList] = useState(null);
    const [archivedList, setArchievedList] = useState(null);

    const getCalls = async() => {
        try {
            const res = await axios.get('https://aircall-job.herokuapp.com/activities');
            const data = await res.data;
            if(data) setCallsList(data);
        } catch (err) {
            console.log(err);
        }
    };

    //get calls after component did mount and  when the list change
    useEffect(() => { getCalls() }, []);


    //filter the data with unarchived calls
    useEffect(() => {
        const temp = callsList? callsList.filter((item) => item.is_archived === false):null;
        callsList && setUnarchivedList(temp);
    }, [callsList]); 


    //filter the data with archived calls
    useEffect(() => {
        const temp = callsList? callsList.filter((item) => item.is_archived === true):null;
        callsList && setArchievedList(temp);
    }, [callsList]);


    const handleChange = (e, val) => {
        setValue(val);
    };


    //call api to archive all calls
    async function archiveCalls() {
        try {
          let res = await Promise.all(
           unarchivedList.map((item)=> axios.post(`https://aircall-job.herokuapp.com/activities/${item.id}`,{
            is_archived: true
          })));
          console.log(res);
          getCalls();
        } catch (error) {
            console.log(error);    
        }
    };

    
    //to archive or unarchive with specific id
    async function updateCall(id, isArchived) {
        try {
            const res = await axios.post(`https://aircall-job.herokuapp.com/activities/${id}`,{
                is_archived: isArchived
            });
            const data = await res.data;
            data && getCalls();
        } catch (err) {
            console.log(err);
        }
    };


    const handleArchiveAll = () => {
        unarchivedList && archiveCalls();
    };

    const resetAllCalls = () => {
        archivedList && (async () => {
            try {
                const res = await axios.get(' https://aircall-job.herokuapp.com/reset');
                const data = await res.data;
                console.log(data);
                data?.message==="done" && getCalls();
            } catch (err) {
                console.log(err);
            }
        })();    
    };

    let menuProps = { list: value!=='archived'? unarchivedList:archivedList, value: value, updateCall: updateCall };

    return (
      <Container>
        <Tabs 
            variant="fullWidth" 
            value={value} 
            onChange={handleChange}
        >
          <FeedTab label='Activity Feed' value='feed'/>
          <ArchiveTab label='Archived' value='archived'/>
        </Tabs>
        { value==='feed'? 
            <ArchiveBtn 
               variant="outlined"
               
               onClick={handleArchiveAll}
            >
                Archive all calls
            </ArchiveBtn>:
            <ArchiveBtn 
               variant="outlined"
               onClick={resetAllCalls}
            >
                unarchive all calls
            </ArchiveBtn> }
        <div><Menu {...menuProps} /></div>
      </Container>
    );
}

export default Activity;


