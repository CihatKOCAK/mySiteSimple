import React from 'react';
import Header from '../../header/Header';
import Card from './Card';
import './projects.scss';
import { projects } from './getData';
import HappyFaceToggle from './HappyFaceToggle';

export default function Projects({ theme, setTheme, isHappy, setIsHappy }) {
    var colorList = [
        '#fcd000',
        '#0ebeff',
        '#47cf73',
        '#ae63e4',
        '#ff3b30',
        '#ff9500',
        '#ff2d55',
    ];
    const randColor = () => {
        const randIndex = Math.floor(Math.random() * colorList.length);
        return colorList[randIndex];
    }
    return (
        <>
            <Header theme={theme} setTheme={setTheme} />
            {/* <HappyFaceToggle isHappy={isHappy} setIsHappy = {setIsHappy} /> */}
            <div className="container-projects">
                {projects.map(project => (
                    <Card key={project.id}
                        title={project.title}
                        href={project.href}
                        ico={project.ico}
                        bgc={randColor()}
                        content={project.content} />
                ))}

            </div>
        </>);
}
