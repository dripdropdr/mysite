import logo from './logo.svg';
import ReactFullpage from '@fullpage/react-fullpage';
import './App.css';



export const Profile = () => {
  return (
    <div className='profile'>
      <img className='flowerimg' src='screen/flower.svg'/>
      <div className='intro'>
        <p className='name'>Sumin Hong</p>
        <p className='email'><a href='mailto:shong6@nd.edu'>shong6@nd.edu</a></p>
        {/* <p className='email'>workingsumin@gmail.com</p> */}
        <p className='link'><i className='fa-brands fa-twitter'></i>&nbsp;Twitter</p>
        <p className='link'><a href='https://github.com/dripdropdr' target='_blank'><i className='fa-brands fa-github'></i>&nbsp;Github</a></p>
        <p className='link'><a href='https://www.linkedin.com/in/sumin-hong-b43931221/' target='_blank'><i className='fa-brands fa-linkedin'></i>&nbsp;LinkedIn</a></p>
        <p className='link-cv'><a href='screen/cv-2024.pdf' target='_blank'>Curriculum Vitæ</a></p>
        <p></p>
      </div>
    </div>
  );
}


export const Desc = () => {
  return (
    <div className='contents-desc'>
      <div className='name-tag'>
        <p>Sumin Hong</p>
        <p>HCI Researcher</p>
      </div>
      <div className='introdesc'>
        <p>Hi! I am a 1st-year Ph.D. student in <a href='https://cse.nd.edu/' target='_blank'><span className='exp-bold'>Computer Science and Engineering@University of Notre Dame</span></a> - advised by <a href='https://toby.li/'><span className='exp-under'>Toby Li </span>🥪!</a> <br/> I graduated with a B.S in <a href='https://itm.seoultech.ac.kr/' target='_blank'>ITM@Seoul National University of Science and Technology</a>, double degree with <a href='https://london.northumbria.ac.uk/course/bsc-hons-computing-with-information-technology-management/'  target='_blank'>Nothumbria University</a>.</p>
        <p>I am interested in <span className='exp-boltalic'>Human-AI Interaction</span> for supporting <span className='exp-boltalic'>creativity</span> through designing, building and learning novel interaction system. Also have a interest in <span className='exp-boltalic'>AI/ML</span> techniques. <br/> Minor interests change frequently, but mostly within the above keywords 😂</p> 
        {/* <br/> */}
        <p>I like playing soccer ⚽️, enjoying the art & music 🎶, and drinks...🥂 <br/> These are my <a href='https://www.instagram.com/dripdropdr'>Instagram</a> and <a href='https://www.youtube.com/channel/UCacXdIyd3o-hKJ74mosgQhw'>Youtube</a>!</p>
        <p>If you'd like to chat with me, please feel free to <a href='mailto:shong6@nd.edu'>email</a> me! 👋</p>
      </div>
    </div>
  )
}


export const Research = () => {
  return (
    
    <div className='contents-desc'>
      <p className='research-title'>Research and Publications</p>

      <div className='subresearch'>
        <p className='subtitle'>Human-Computer Interaction</p>

        <div className='research-container'>
          <div className='image'>
            <img src='screen/chi2024.png'/>
          </div>
          <div className='desc'>
            <p>CHI 2024</p>
            <p><a href='https://doi.org/10.1145/3613904.3642794' target='_blank'>CreativeConnect: Supporting Reference Recombination for Graphic Design Ideation with Generative AI</a></p>
            <p>DaEun Choi, <span className='exp-bold'>Sumin Hong</span>, Jeongeon Park, John Joon Young Jung, and Juho Kim</p>
            <div className='menu'>
              <a href='screen/chi2024.pdf' target='_blank'><span>Paper</span></a><a href='https://youtu.be/n0JVumydKWw?si=pj2EXw_Z_vZfchzY' target='_blank'><span>Video</span></a><a href='https://creativeconnect.kixlab.org/' target='_blank'><span>Website</span></a>
            </div>
          </div>
        </div>

        <div className='research-container'>
          <div className='image'>
            <img src='screen/etra2022.png'/>
          </div>
          <div className='desc'>
            <p>ETRA 2022 Workshop on Eye Tracking in Learning and Education</p>
            <p><a href='https://doi.org/10.1145/3517031.3529238' target='_blank'>Visualizing Instructor’s Gaze Information for Online Video-based Learning: Preliminary Study</a></p>
            <p>Daun Kim<sup>1</sup>, Jae-yeop Jeong<sup>1</sup>, <span className='exp-bold'>Sumin Hong</span>, Namsub Kim, and Jin-woo Jeong</p>
            <div className='menu'>
              <a href='screen/etra2022.pdf' target='_blank'><span>Paper</span></a>
            </div>
          </div>
        </div>

      </div>
      
      <div className='subresearch'>
      <p className='subtitle'>Applied Machine Learning</p>
        <div className='research-container'>
          <div className='image'>
            <img src='screen/icassp2024.png'/>
          </div>
          <div className='desc'>
            <p>ICASSP 2024</p>
            <p><a href='https://doi.org/10.1109/ICASSP48485.2024.10446428' target='_blank'>Class-wise Buffer Management for Incremental Object Detection: an Effective Buffer Training Strategy</a></p>
            <p>Junsu Kim, <span className='exp-bold'>Sumin Hong</span>, Chanwoo Kim, Jihyeon Kim, Yihalem Yimolal Tiruneh, Jeongwan On, Jihyun Song, Sunhwa Choi, and Seungryul Baek</p>
            <div className='menu'>
              <a href='screen/icassp2024.pdf' target='_blank'><span>Paper</span></a>
            </div>
          </div>
        </div>

        <div className='research-container'>
          <div className='image'>
            <img src='screen/csse.png'/>
          </div>
          <div className='desc'>
            <p>Computer Systems Science and Engineering, 47(2), 1611-1632, 2023</p>
            <p><a href='https://doi.org/10.32604/csse.2023.038319' target='_blank'>Automatic Examination of Condition of Used Books with YOLO-based Object Detection Framework</a></p>
            <p><span className='exp-bold'>Sumin Hong</span> and Jin-woo Jeong</p>
            <div className='menu'>
              <a href='screen/csse.pdf' target='_blank'><span>Paper</span></a>
            </div>
          </div>
        </div>

        <div className='research-container'>
          <div className='image'>
            <img src='screen/eccv2023.png'/>
          </div>
          <div className='desc'>
            <p>ECCV 2023 Workshop on Affective Behavior Analysis in-the-Wild</p>
            <p><a href='https://doi.org/10.1007/978-3-031-25075-0_5' target='_blank'>Ensemble of Multi-task Learning Networks for Facial Expression Recognition In-the-Wild with Learning from Synthetic Data</a></p>
            <p>Jae-yeop Jeong<sup>1</sup>, Young-gi Hong<sup>1</sup>, <span className='exp-bold'>Sumin Hong<sup>1</sup></span>, Jiyeon Oh<sup>1</sup>, Yuchul Jung, Sang-Ho Kim and Jin-woo Jeong</p>
            <div className='menu'>
              <a href='screen/eccv2023.pdf' target='_blank'><span>Paper</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export const Contents = () => {
  return (
    <ReactFullpage
      scrollingSpeed={1000}
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            <div className='section'>
              <Desc />
            </div>
            <div className="section">
              <Research />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  )
}


export const Background = () => {
  return (
    <div className="background">
      <img className='miniminiflower' alt='Vector' src='screen/minimini_flower.svg'/>
      <img className='miniflower' alt='Vector' src='screen/mini_flower.svg'/>
      <img className="vector" alt="Vector" src="screen/line1.svg" />
      <img className="vector" alt="Vector" src="screen/line2.svg" />
    </div>
  );
};


function App() {
  return (
    <div className="App">
      
      <Contents />
      <Profile />
      <Background />
    </div>
  );
}

export default App;
