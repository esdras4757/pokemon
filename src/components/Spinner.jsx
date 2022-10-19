import { FaSpinner } from 'react-icons/fa';
import styled from 'styled-components';



export function Spinner() {
    return (
        <Spin className='spiner'>
            <FaSpinner className='anspin' size={120}/>
        </Spin>
    )
}

const Spin=styled.div`
.spiner{
    display: flex;
    justify-content: center;
    
}

.anspin{
    animation: spin 1.8s linear infinite;
}

@keyframes spin {
    to{
        transform: rotate(360deg);
    }
}
`