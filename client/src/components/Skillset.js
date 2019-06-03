import React from 'react';

function Skillset (){
    const data = [
        {
            title: 'Front End Development',
            text: 'My knowledge of the DOM allow me to write <b>minimal</b>, clean and reusable code. I\'ve been working on front-end projects since <b>2016</b>. I build my layouts with the lastest standards, <b>flexboxes and CSS grids</b> are the way to go in 2019 !',
            image: 'images/image_post.svg',
            techs: [
                {
                    logo: 'images/logos/react.svg',
                    alt: 'React : Front End framework'
                },
                {
                    logo: 'images/logos/javascript.svg',
                    alt: 'Javascript : Front End framework'
                },
                {
                    logo: 'images/logos/sass.svg',
                    alt: 'Sass : CSS with superpowers'
                },
                {
                    logo: 'images/logos/materialize.svg',
                    alt: 'MaterializeCSS : Organized layout and grid system / helpers'
                },
                {
                    logo: 'images/logos/bootstrap.svg',
                    alt: 'Bootstrap : Organized layout and grid system / helpers'
                },
                {
                    logo: 'images/logos/zeplin.svg',
                    alt: 'Zeplin : Pixel perfect mockup development'
                }
            ]
        },
        {
            title: 'Back End Development',
            text: 'Wether you need an API, a custom Windows app or a custom web application for your buisness, my knowledge with PHP and .NET / C# will help you.',
            image: 'images/process_building.svg',
            techs: [
                {
                    logo: 'images/logos/grav.svg',
                    alt: 'GravCMS : Easy to use and setup CMS'
                },
                {
                    logo: 'images/logos/nodejs.svg',
                    alt: 'NodeJS : Javascrit on the server-side'
                },
                {
                    logo: 'images/logos/yii.svg',
                    alt: 'Yii : Open Source PHP Framework'
                },
                {
                    logo: 'images/logos/umbraco.svg',
                    alt: 'Umbraco : Open Source ASP.NET framework'
                },
                {
                    logo: 'images/logos/dotnet.svg',
                    alt: '.NET : Web framework based on Microsoft technologies'
                },
                {
                    logo: 'images/logos/csharp.svg',                  
                    alt: 'C# : general-purpose, multi-paradigm programming language from Microsoft'
                }
            ],
        },
        {
            title: 'User Experience',
            text: 'For your online and mobile touch-points, I’ll create wireframes, user flows, information architecture, and interactive design.',
            techs: [
                {
                    logo: 'images/logos/figma.svg',                  
                    alt: 'Figma : Prototype drawing tool'
                },
                {
                    logo: 'images/logos/photoshop-cc.svg',                  
                    alt: 'Adobe Photoshop : Advanced image editing software'
                }
                
                
            ],
            image: 'images/wireframe.svg'
        },
        {
            title: 'Methodology',
            text: 'Whether I work solo or in a team, I always apply the SCRUM methodology with lean and agile development. I still stay flexible for any change while having a clear overview of the work ahead.',
            image: 'images/scrum_board.svg'
        }
    ]
    return (
            <div className="skillsets container">
                <h1>Skillset</h1>
                {data.map((skill, i) => 
                        <div key={i}>
                            <div className="row flex">       
                                <div className={i%2 === 0 ? 'text m6 col push-m6' : 'text m6 col'}>
                                    <h4>{skill.title}</h4>
                                    <div dangerouslySetInnerHTML={{__html: skill.text}} />
                                    <div className="techs">      
                                        {skill.techs && skill.techs.map((tech, i) => <span key={i}><img data-cursor="hover" alt={tech.alt} title={tech.alt} src={tech.logo}></img></span>)}                            
                                    </div>
                                    
                                </div>
                                <div className={i%2 === 0 ? 'valign-wrapper text m6 s12 col pull-m6' : 'valign-wrapper text m6 s12 col'}>
                                    <img className={i%2 === 0 ? 'left' : ''} src={skill.image} alt={skill.title}></img>
                                </div>                        
                            </div>   
                         <hr />  
                         </div>       
                    )
                        
                }
            </div>

    )
}
export default Skillset;