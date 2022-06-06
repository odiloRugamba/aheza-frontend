import React from 'react';
import { Dcore } from "../../api/index";
import { Carousel } from '@trendyol-js/react-carousel';

// Import Images
import testPic1 from "../../images/testimonials/pic1.jpg"
import testPic2 from "../../images/testimonials/pic2.jpg"
import testPic3 from "../../images/testimonials/pic3.jpg"
import blogGridPic1 from "../../images/blog/grid/pic1.jpg"
import blogGridPic2 from "../../images/blog/grid/pic2.jpg"
import blogGridPic3 from "../../images/blog/grid/pic3.jpg"

// Team Content
const content = [
  {
    thumb: blogGridPic1,
    authorPic: testPic1,
    author: "John deo",
    title: "In this hospital there are special surgeon",
    date: "21 July 2021",
  },
  {
    thumb: blogGridPic2,
    authorPic: testPic2,
    author: "Peter Packer",
    title: "Can you get a diflucan prescription online?",
    date: "20 July 2021",
  },
  {
    thumb: blogGridPic3,
    authorPic: testPic3,
    author: "Sonar Moyna",
    title: "Why Is Skin Surgeon Considered Underrated",
    date: "19 July 2021",
  }
]


const LatestNewsSection = ({ title, content }) => {

  console.log(content)
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1191,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  const openNewWindow = (link) => {
    window.open(link)
  }


  return (
    <>
      <Carousel>
        {content?.map((item) => (
          <div className="blog-card">
            <div>
              <div className="post-media" style={{ maxHeight: 210, height: 210 }}>
                <a onClick={() => openNewWindow(item.link)} ><img src={Dcore.IMAGEURL + '/' + item.image} alt="" /></a>
              </div>
              <div className="post-info">
                <p className="post-title max-lines-2" style={{ "-webkit-line-clamp": 3 }}>
                  <a onClick={() => openNewWindow(item.link)}>{item?.title}</a>
                </p>
              </div>
              <ul className="post-meta" style={{ justifyContent: 'space-between' }}>
                <b>
                  <li className="date">
                    <i className="fa fa-user"></i>
                    {item.publisherName}
                  </li>
                </b>
                <a onClick={() => openNewWindow(item.link)} className="btn btn-outline-primary btn-sm">Read More </a>
              </ul>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );

}

export default LatestNewsSection;