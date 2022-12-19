import styled from 'styled-components'


const DivImg = styled.div`
    background-image: url(${({imageUrl}) => imageUrl });
    height: 900px;
    width: 800px;
`
function BlockImage({ url}) {
    return (
        <DivImg imageUrl={url}></DivImg>
    )
}


export default BlockImage;