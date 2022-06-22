import { styled } from '@mui/system';
import { Tabs, Tab, Button } from '@mui/material';

const Container = styled('div')({
    padding: 3,
    overflowY: 'auto'
});

const TabWrapper = styled(Tabs)({
});

const FeedTab = styled(Tab)({
    borderTopLeftRadius: 25,
    marginRight: 0.5,
    color: '#FFFFFF',
    background: '#3ca211',
    
});

const ArchiveTab = styled(Tab)({
    borderTopRightRadius: 25,
    marginLeft: 0.5,
    color: '#FFFFFF',
    background: '#3ca211'
});

const ArchiveBtn = styled(Button)({
    width: '100%',
    marginTop: 2,
    color: '#3ca211',
    borderColor: '#3ca211',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25
})

export { Container, TabWrapper, FeedTab, ArchiveTab, ArchiveBtn };


