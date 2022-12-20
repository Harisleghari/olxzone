import "./scrolltotopbutton.css";
import {useState} from 'react';

const ScrollToTopButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	});
};

window.addEventListener('scroll', toggleVisible);

return (

    <button className="main-back-to-top-btn-a main-back-to-top-btn-b" onClick={scrollToTop } style={{display: visible ? 'inline' : 'none'}}>
        <img
          src="https://www.olx.com.pk/assets/backToTopIcon_noinline.7b82f4f094ade4510834eaf20d4ce5ab.svg"
          className="main-back-to-top-btn-img"
          alt="Icon arrow back to top"
        />
        <span className="main-back-to-top-btn-span">Back to top</span>
      </button>
);
}

export default ScrollToTopButton;
