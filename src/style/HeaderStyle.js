import { createUseStyles } from 'react-jss';

export const HeaderStyle = createUseStyles({
    header: {
        height: 40,
        margin: 0,
        padding: '20px 0',
        'text-align': 'center',
        'box-shadow': '0 1px 0 rgba(0, 0, 0, 0.1)'
    },
    svg: {
        display: 'block',
        width: '100%',
        height: '100%'
    }
})