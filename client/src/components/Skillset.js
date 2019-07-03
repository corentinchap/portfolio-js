import React from 'react';

function Skillsets (){
    const data = [
        {
            title: 'Front End Development',
            text: 'My knowledge of the DOM allow me to write <b>minimal</b>, clean and reusable code. I\'ve been working on front-end projects since <b>2016</b>. I build my layouts with the lastest standards, <b>flexboxes and CSS grids</b> are the way to go nowadays !',
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
            text: 'Wether you need an <b>API</b>, a custom <b>web app</b> or a native Windows app to answer specific needs for you business, my <b>expertise</b> and knowledge will make sure your app <b>easy to use, stable and future-proof</b>.',
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
            text: 'For your desktop, tablet and mobile touch-points, I’ll create <b>wireframes</b> to build the best possible experience for your product, maximizing readability, SEO ranking and <b>user engagment</b>.',
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
            text: 'Whether I work solo or in a team, I always apply the <b>SCRUM methodology</b> with lean and agile development. I still stay <b>flexible</b> for any change while having a clear overview of the work ahead.',
            image: 'images/scrum_board.svg'
        }
    ]

    function Skillset(props){
        const {title, text, techs, image} = props.skill;
        let i = props.i;
        return (
            <div {...props} >
            <div className="row flex">       
                <div className={'skillset-text s12 m12 l6 col ' + (i%2 === 0  ? 'push-l6' : '')}>
                    <h4>{title}</h4>
                    <div dangerouslySetInnerHTML={{__html: text}} />
                    <div className="techs">      
                        {techs && techs.map((tech, i) => <span key={i}><img data-cursor="hover" alt={tech.alt} title={tech.alt} src={tech.logo}></img></span>)}                            
                    </div>
                    
                </div>
                <div className={'skillset-image valign-wrapper s12 m12 l6 col ' + (i%2 === 0 ? 'pull-l6' : '')}>
                    <img className={i%2 === 0 ? 'left' : ''} src={image} alt={title}></img>
                </div>                        
            </div>   
            <hr />  
            </div>  
        )
    }
    return (
            <div className="skillsets container">
                <h1>Skillset</h1>
                {data.map((skill, i) => 
                      <Skillset data-aos="zoom-in-up" skill={skill} i={i} key={i}/>     
                    )
                        
                }
            </div>

    )
}
export default Skillsets;