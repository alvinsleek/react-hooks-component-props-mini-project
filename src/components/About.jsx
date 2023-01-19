
// import React from 'react';

// const About = ({ imageUrl = "https://via.placeholder.com/215", aboutText }) => {
//   return (
//     <aside>
//       <img src={imageUrl} alt="blog logo" defaultValue="https://via.placeholder.com/215" />
//       <p>{aboutText}</p>
//     </aside>
//   );
// }

// export default About;
// const About = ({ imageUrl = "https://via.placeholder.com/215", aboutText }) => {
//     }
//     return (
//         <aside>
//             <img src={imageUrl} alt="blog logo"/>
//             <p>{props.about}</p>
//         </aside>
//     )

// export default About
import React from 'react'

const About = (props) => {
    About.defaultProps = {
        image:"https://via.placeholder.com/215"
    }
  return (
      <aside>
          <img src={props.image} alt="blog logo" />
          <p>{props.about}</p>
    </aside>
  )
}

export default About