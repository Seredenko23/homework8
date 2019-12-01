import React, {Component} from 'react';
import Headline from "../Headline/Headline";
import Developer from "../Developer/Developer";
import mark from '../../assets/img/MarkOnce.png'
import anton from '../../assets/img/AntonioNever.png'
import justin from '../../assets/img/JustinTwice.png'
import './Team.scss'

class Team extends Component {
    render() {
        let elements = []
        let developers = [
        {
            name:'Mark Once',
            job:'Designer & Front-End Developer',
            photo:mark
        },
        {
            name:'Justin Twice',
            job:'Founder & CEO',
            photo:justin
        },
        {
            name:'Antonio Never',
            job:'Someone & Somewhere',
            photo:anton
        }]

        developers.forEach((elem, ind) => {
            elements.push(
                <Developer
                    key={ind}
                    bottom={!(ind % 2)}
                    name={elem.name}
                    job={elem.job}
                    photo={elem.photo}/>
            )
        })

        return (
            <section className='team flex space-around' id='team'>
                <Headline
                    header='This is our team'
                    description='We are small but effective and ...'
                    size='small'/>
                <div className='developers flex'>
                    {elements}
                </div>
            </section>
        );
    }
}

export default Team;