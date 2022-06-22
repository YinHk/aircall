import { styled } from '@mui/system';
import { Tab, Button } from '@mui/material';

const Container = styled('div')({
    padding: 3,
    overflowY: 'auto'
});

const FeedTab = styled(Tab)({
    borderTopLeftRadius: 25,
    marginRight: 1,
    color: '#FFFFFF',
    background: '#12aa11',
    textTransform: 'none'
});

const ArchiveTab = styled(Tab)({
    borderTopRightRadius: 25,
    marginLeft: 1,
    color: '#FFFFFF',
    background: '#3ca211',
    textTransform: 'none'
});

const ArchiveBtn = styled(Button)({
    width: '100%',
    marginTop: 2,
    color: '#3ca211',
    borderColor: '#3ca211',
    textTransform: 'none'
})

export { Container, FeedTab, ArchiveTab, ArchiveBtn };


