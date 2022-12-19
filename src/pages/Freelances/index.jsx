import DefaultPicture from '../../assets/profile.png'
import Card from './../../components/Card'
import styled from 'styled-components'
import {useState} from "react";

const freelanceProfiles = [
    {
        name: 'Jane Doe',
        jobTitle: 'Devops',
        picture: DefaultPicture,
    },
    {
        name: 'John Doe',
        jobTitle: 'Developpeur frontend',
        picture: DefaultPicture,
    },
    {
        name: 'Jeanne Biche',
        jobTitle: 'Développeuse Fullstack',
        picture: DefaultPicture,
    },
]
const Ballon = styled.div`
    height : 100px;
    width : 100px;
    border-radius : 50px;
    background-color : red;
    transform :scale( ${({size}) => size } );
`

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: 350px 350px;
    grid-template-columns: repeat(2, 1fr);
`

function Freelances() {
    const style = {
        display : 'flex',
        justifyContent: "center"
    };
    const [size ,setSize] = useState(1)
    return (
        <div>
            <div>
                <h1 onClick={()=>{ setSize(size + 0.1)}}>Freelances 👩‍💻👨‍💻👩‍💻</h1>
                <CardsContainer>
                    {freelanceProfiles.map((profile, index) => (
                        <Card
                            key={`${profile.name}-${index}`}
                            label={profile.jobTitle}
                            picture={profile.picture}
                            title={profile.name}
                        />
                    ))}
                </CardsContainer>

            </div>
           <div  style={style}>
               <Ballon size={size}/>
           </div>
        </div>

    )
}

export default Freelances