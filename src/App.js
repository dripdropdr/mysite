import logo from './logo.svg';
import ReactFullpage from '@fullpage/react-fullpage';
import './App.css';
import React, {useEffect, useState} from 'react';



export const Profile = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // 화면 크기가 바뀔 때마다 isMobile 상태 업데이트
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  if (isMobile) {
    return(<div></div>)
  } else{
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
}

export const Desc = ({fullpageApi}) => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // 화면 크기가 바뀔 때마다 isMobile 상태 업데이트
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  if (isMobile) {
    return (
      <div className='contents-desc'>
        
          <div className='mobile-profile'>
            <div><img className='flowerimg' src='screen/flower.svg'/></div>
            <div className='intro'>
              <p className='name'><a href='https://www.suminhong.me'>Sumin Hong</a></p>
              <p className='position'>HCI Researcher</p>
              <p className='link'>
                <a href='mailto:shong6@nd.edu'><i class="fa-solid fa-envelope"></i></a>&nbsp;&nbsp;
                <a href='https://x.com/suminhong_'><i className='fa-brands fa-twitter'></i></a>&nbsp;&nbsp;
                <a href='https://www.linkedin.com/in/sumin-hong-b43931221/' target='_blank'><i className='fa-brands fa-linkedin'></i>&nbsp;&nbsp;</a>
                <a href='https://scholar.google.com/citations?user=gg-AUEsAAAAJ&hl=en'><i className='fa-brands fa-google-scholar'></i>&nbsp;&nbsp;</a>
                <a href='https://github.com/dripdropdr' target='_blank'><i className='fa-brands fa-github'></i>&nbsp;&nbsp;</a>
              </p>
              <p className='link-cv'><a href='screen/cv-2024.pdf' target='_blank'>Curriculum Vitæ</a></p>
              {/* <p className='lastupdated'>last updated: Oct 2024</p> */}
            </div>
          </div>
        
          <div className='description'>
            <p>Hello! 🙌</p>
            <p>I am Sumin, first-year Ph.D. student in <a href='https://cse.nd.edu/' target='_blank'><span className='exp-semibold'>Computer Science and Engineering @University of Notre Dame</span></a>.
            I work with <a href='https://toby.li/'><span className='exp-semiboltalic'>Prof. Toby Jia-Jun Li</span>. </a> 
            My interests lie in intuitive interaction techniques with <span className='exp-semibold'>multi-modality fusion</span> in the context of the <span className='exp-semiboltalic'>Human-AI Interaction</span>.
            <br/></p> 
          </div>

          <div className='publication'><p><button onClick={navigate} onMouseEnter={() => setButtonText('Publications!')}
        onMouseLeave={() => setButtonText('Publications?')}>{buttonText}</button></p></div>
        </div>
    );
  } else {
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
  )}
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
            <p>CHI 2024&nbsp;&nbsp;&nbsp;
            </p>
            <p><a href='https://doi.org/10.1145/3613904.3642794' target='_blank'>CreativeConnect: Supporting Reference Recombination for Graphic Design Ideation with Generative AI</a> &nbsp;
            {/* <span className="supple"><a href='screen/chi2024.pdf' target='_blank'>paper</a></span>&nbsp;
              <span className='supple'><a href='https://youtu.be/n0JVumydKWw?si=pj2EXw_Z_vZfchzY' target='_blank'>video</a></span>&nbsp;
              <span className="supple"><a href='https://creativeconnect.kixlab.org/' target='_blank'>website</a></span>&nbsp; */}
            </p>
            <p>DaEun Choi, <span className='exp-bold'>Sumin Hong</span>, Jeongeon Park, John Joon Young Jung, and Juho Kim
            </p>

          </div>
        </div>

        <div className='research-container'>
          <div className='image'>
            <img src='screen/etra2022.png'/>
          </div>
          <div className='desc'>
            <p>ETRA 2022 Workshop on Eye Tracking in Learning and Education</p>
            <p><a href='https://doi.org/10.1145/3517031.3529238' target='_blank'>Visualizing Instructor’s Gaze Information for Online Video-based Learning: Preliminary Study</a>&nbsp;
              {/* <span className='supple'><a href='screen/etra2022.pdf' target='_blank'>paper</a></span> */}
            </p>
            <p>Daun Kim<sup>1</sup>, Jae-yeop Jeong<sup>1</sup>, <span className='exp-bold'>Sumin Hong</span>, Namsub Kim, and Jin-woo Jeong</p>
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
            {/* <div className='menu'>
              <a href='screen/icassp2024.pdf' target='_blank'><span>paper</span></a>
            </div> */}
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
            {/* <div className='menu'>
              <a href='screen/csse.pdf' target='_blank'><span>paper</span></a>
            </div> */}
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
            {/* <div className='menu'>
              <a href='screen/eccv2023.pdf' target='_blank'><span>paper</span></a>
            </div> */}
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
  const [miniflowerStyle, setMiniflowerStyle] = useState({ left: 85, top: 55 });
  const [miniminiflowerStyle, setMiniminiflowerStyle] = useState({ left: 30, top: 10 });

  useEffect(() => {
    const moveFlowerSmoothly = (setFlowerStyle, baseLeft, baseTop, radius) => {
      let currentLeft = baseLeft;
      let currentTop = baseTop;
      let targetLeft = currentLeft;
      let targetTop = currentTop;

      const randomizePosition = () => {
        targetLeft = baseLeft + (Math.random() * radius - radius / 2);
        targetTop = baseTop + (Math.random() * radius - radius / 2);
      };

      const animateMovement = () => {
        // 이동 속도 조정 (매 프레임마다 조금씩 이동)
        currentLeft += (targetLeft - currentLeft) * 0.02; // 0.02는 속도 조절 값
        currentTop += (targetTop - currentTop) * 0.02;

        // 새로운 스타일 적용
        setFlowerStyle({ left: currentLeft, top: currentTop });

        // 목표 위치에 거의 도달하면 새로운 랜덤 위치 설정
        if (Math.abs(currentLeft - targetLeft) < 0.1 && Math.abs(currentTop - targetTop) < 0.1) {
          randomizePosition();
        }

        // 다음 프레임 요청
        requestAnimationFrame(animateMovement);
      };

      randomizePosition(); // 처음 목표 위치 설정
      animateMovement(); // 애니메이션 시작
    };

    moveFlowerSmoothly(setMiniflowerStyle, 85, 55, 20); // Base position with radius
    moveFlowerSmoothly(setMiniminiflowerStyle, 30, 10, 30);

  }, []);

  // 꽃 클릭 시 회전 애니메이션 처리
  const handleFlowerClick = (setFlowerStyle) => {
    setFlowerStyle((prev) => ({ ...prev, rotate: prev.rotate + 720 })); // 두 바퀴 회전 (720도)
  };

  return (
    <div className="flowers">
      <img
        className='miniflower'
        alt='Vector'
        src='screen/mini_flower.svg'
        style={{
          left: `${miniflowerStyle.left}vw`,
          top: `${miniflowerStyle.top}vh`,
          position: 'fixed',
          transform: `rotate(${miniflowerStyle.rotate}deg)`, // 회전 애니메이션
          transition: 'transform 0.5s ease-in-out', // 0.5초 동안 회전
        }}
        onClick={() => handleFlowerClick(setMiniflowerStyle)} // 클릭 이벤트 핸들러
      />
      <img
        className='miniminiflower'
        alt='Vector'
        src='screen/minimini_flower.svg'
        style={{
          left: `${miniminiflowerStyle.left}vw`,
          top: `${miniminiflowerStyle.top}vh`,
          position: 'fixed',
          transform: `rotate(${miniminiflowerStyle.rotate}deg)`,
          transition: 'transform 0.5s ease-in-out',
          zIndex: 1, // 위로 올려서 덮기
        }}
        onClick={() => handleFlowerClick(setMiniminiflowerStyle)} // 클릭 이벤트 핸들러
      />
    </div>
  );
};


export const Background = () => {
  return (
    <div className="background">
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
      <RandomFlowers />
      <Contents />
      <Profile />
      <Background />
    </div>
  );
}

export default App;
