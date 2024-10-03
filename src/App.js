import logo from './logo.svg';
import ReactFullpage from '@fullpage/react-fullpage';
import './App.css';
import React, {useEffect, useState} from 'react';



export const Profile = () => {
  return (
    <div className='profile'>
      <img className='flowerimg' src='screen/flower.svg'/>
      <div className='intro'>
        <p className='name'><a href='https://www.suminhong.me'></a></p>
        <p className='link'><a href='https://x.com/suminhong_'><i className='fa-brands fa-twitter'></i></a>&nbsp;&nbsp;
          <a href='https://www.linkedin.com/in/sumin-hong-b43931221/' target='_blank'><i className='fa-brands fa-linkedin'></i>&nbsp;&nbsp;</a>
          <a href='https://scholar.google.com/citations?user=gg-AUEsAAAAJ&hl=en'><i className='fa-brands fa-google-scholar'></i>&nbsp;&nbsp;</a>
          <a href='https://github.com/dripdropdr' target='_blank'><i className='fa-brands fa-github'></i>&nbsp;&nbsp;</a>
        </p>
        <p className='email'><a href='mailto:shong6@nd.edu'>shong6@nd.edu</a></p>
        <p className='link-cv'><a href='screen/cv-2024.pdf' target='_blank'>Curriculum Vitæ</a></p>
        <p className='lastupdated'>last updated: Oct 2024</p>
        <p></p>
      </div>
    </div>
  );
}

export const Desc = ({fullpageApi}) => {

  // fullpageApi 디버깅을 위해 로그 출력
  useEffect(() => {
    console.log('fullpageApi:', fullpageApi);
  }, [fullpageApi]);

  // 클립보드에 텍스트를 복사하는 함수
  const copyToClipboard = () => {
    const email = "shong6@nd.edu";
    navigator.clipboard.writeText(email)
      .then(() => {
        alert('email copied!');
      })
      .catch((err) => {
        console.error('shong6@nd.edu: copy failed :(', err);
      });
  };

  const navigate = () => {
      if (fullpageApi) {
          fullpageApi.moveSectionDown(); // 다음 섹션으로 이동
          // 또는 특정 섹션으로 이동하려면:
          // fullpageApi.moveTo(2); // 두 번째 섹션으로 이동
        } else {
          console.error('fullpageApi가 제공되지 않았습니다.');
        }
      };

  const [buttonText, setButtonText] = useState('Publications?');

  return (
    <div className='contents-desc'>
      <div className='name-tag'>
        <p><a href='https://www.suminhong.me'>Sumin Hong</a></p>
        <p>HCI Researcher</p>
      </div>
      <div className='introdesc'>
        <p>Hello! 🙌</p>
        <p>I am Sumin, first-year Ph.D. student in <a href='https://cse.nd.edu/' target='_blank'><span className='exp-semibold'>Computer Science and Engineering @University of Notre Dame</span></a>.
         I work with <a href='https://toby.li/'><span className='exp-semiboltalic'>Prof. Toby Jia-Jun Li</span>. </a> 
         My interests lie in intuitive interaction techniques with <span className='exp-semibold'>multi-modality fusion</span> in the context of the <span className='exp-semiboltalic'>Human-AI Interaction</span>.</p> 
        {/* <br/> */}
        {/* <p>I like playing soccer ⚽️, enjoying the art & music 🎶, and drinks...🥂 <br/> These are my <a href='https://www.instagram.com/dripdropdr'>Instagram</a> and <a href='https://www.youtube.com/channel/UCacXdIyd3o-hKJ74mosgQhw'>Youtube</a>!</p> */}
        {/* <p>Please feel free to<button onClick={copyToClipboard} style={{cursor:"pointer", fontFamily:"inherit", fontSize:"inherit"}}>email</button>me if you'd like to chat with!</p> */}
        <p><br/><button className='publication' onClick={navigate} onMouseEnter={() => setButtonText('Publications!')}
      onMouseLeave={() => setButtonText('Publications?')}>{buttonText}</button></p>
      </div>
    </div>
  )
}


export const Research = () => {
  return (
    
    <div className='contents-desc'>
      <p className='research-title'>Publications</p>

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
              <a href='screen/chi2024.pdf' target='_blank'><span>paper</span></a><a href='https://youtu.be/n0JVumydKWw?si=pj2EXw_Z_vZfchzY' target='_blank'><span>video</span></a><a href='https://creativeconnect.kixlab.org/' target='_blank'><span>website</span></a>
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
              <a href='screen/etra2022.pdf' target='_blank'><span>paper</span></a>
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
              <a href='screen/icassp2024.pdf' target='_blank'><span>paper</span></a>
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
              <a href='screen/csse.pdf' target='_blank'><span>paper</span></a>
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
              <a href='screen/eccv2023.pdf' target='_blank'><span>paper</span></a>
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
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className='section'>
              <Desc fullpageApi={fullpageApi}/>
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

const RandomFlowers = () => {
  const [miniflowerStyle, setMiniflowerStyle] = useState({ left: '85vw', top: '55vh' });
  const [miniminiflowerStyle, setMiniminiflowerStyle] = useState({ left: '30vw', top: '10vh' });

  useEffect(() => {
    const moveFlowerRandomly = (setFlowerStyle, baseLeft, baseTop, radius) => {
      const randomizePosition = () => {
        const randomLeft = baseLeft + (Math.random() * radius - radius / 2);
        const randomTop = baseTop + (Math.random() * radius - radius / 2);
        setFlowerStyle({ left: `${randomLeft}vw`, top: `${randomTop}vh` });
      };

      randomizePosition();
      const intervalId = setInterval(randomizePosition, 2000); // Move every 2 seconds
      return () => clearInterval(intervalId); // Cleanup interval on component unmount
    };

    const miniflowerCleanup = moveFlowerRandomly(setMiniflowerStyle, 85, 55, 10); // Base position with radius
    const miniminiflowerCleanup = moveFlowerRandomly(setMiniminiflowerStyle, 30, 10, 15);

    return () => {
      miniflowerCleanup();
      miniminiflowerCleanup();
    };
  }, []);

  return (
    <div className="flowers">
      <img
        className='miniflower'
        alt='Vector'
        src='screen/mini_flower.svg'
        style={{ ...miniflowerStyle, position: 'fixed', transition: 'transform 0.5s ease-in-out' }}
      />
      <img
        className='miniminiflower'
        alt='Vector'
        src='screen/minimini_flower.svg'
        style={{ ...miniminiflowerStyle, position: 'fixed', transition: 'transform 0.5s ease-in-out' }}
      />
    </div>
  );
};

export const Background = () => {
  return (
    <div className="background">
      <RandomFlowers />
      {/* <img className='miniminiflower' alt='Vector' src='screen/minimini_flower.svg'/>
      <img className='miniflower' alt='Vector' src='screen/mini_flower.svg'/> */}
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
