import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getStorys } from "../../store/story/actions";
import LoadingComp from "../elements/loading";
import ReactPaginate from "react-paginate";
import EmptyComp from "../elements/empyt";
import { getBlogs } from "../../store/blog/actions";
import searchIcon from '../../images/searchh.png';
import defualtImage from '../../images/defualt.jpeg';
import { Dcore } from '../../api/index'
import { getLinks } from "../../store/links/actions";
import { getUploads } from "../../store/uploads/actions";

// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";

// Import Images
import bnrImg1 from "../../images/banner/img1.jpg";
import waveBlue from "../../images/shap/wave-blue.png";
import plusBlue from "../../images/shap/plus-blue.png";

const Stories = () => {
  const [data, setData] = useState([])
  const [dataGlobal, setDataGlobal] = useState([])
  const dispatch = useDispatch()
  const postPerPage = 12
  const [PageCount, setPageCount] = useState(10)
  const [searchText, setsearchText] = useState('')
  const [pageData, setPageData] = useState([])
  const res = useSelector(state => state.StorysReducers.data)
  const blogs = useSelector(state => state.BlogsReducers.data)
  const resLink = useSelector(state => state.linksReducers.data)
  const resUploads = useSelector(state => state.UploadsReducers.data)
  const [loading, setLoading] = useState(false)
  const [searchLoading, setSearchLoading] = useState(false)
  useEffect(() => {
    dispatch(getStorys())
    dispatch(getBlogs())
    dispatch(getLinks())
    dispatch(getUploads())
  }, [])

  useEffect(() => {
    if (res?.length) {
      setData([...data, ...res])
      setDataGlobal([...data, ...res])
      setLoading(true)
    }
  }, [res])

  // useEffect(() => {
  //   if (blogs?.length) {
  //     setData([...data, ...blogs])
  //     setDataGlobal([...data, ...blogs])
  //     setLoading(true)

  //   }
  // }, [blogs])

  useEffect(() => {
    if (resLink?.length) {
      setData([...data, ...resLink])
      setDataGlobal([...data, ...resLink])
      setLoading(true)
    }
  }, [resLink])

  useEffect(() => {
    if (resUploads?.length) {
      setData([...data, ...resUploads])
      setDataGlobal([...data, ...resUploads])
      setLoading(true)
    }
  }, [resUploads])




  const convertData = (date) => {
    const day = new Date(date)
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(day);
    let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(day);
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(day);
    return `${da} ${mo} ${ye}`
  }

  const changePage = (page) => {
    const endingPoint = (page.selected + 1) * postPerPage
    const statingPoint = endingPoint - postPerPage
    setPageData(null)
    setPageData(res.slice(statingPoint, endingPoint))
  }

  const getVideoId = (url) => {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : false;
  }
  const searchFunc = (e) => {
    setsearchText(e.target.value)
    console.log(data)
    const researchData = []
    dataGlobal.forEach((list) => {
      if (list.title.toLocaleLowerCase().search(searchText.toLocaleLowerCase()) > -1) {
        researchData.push(list)
      }
    })

    setData(researchData)
    if (!e.target.value.trim()) {
      setData(dataGlobal)
    }
    setSearchLoading(true)
  }


  return (
    <>
      <Header />
      <div className="page-content bg-white" style={{ marginTop: 130 }}>

        <div className="banner-wraper" >
          <div className="container">
            <div className='searchInput'>
              <input value={searchText} onChange={e => searchFunc(e)} type="" name="" placeholder='Search....' />
              <div >
                <button onClick={searchFunc}>
                  <img src={searchIcon} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <section className="section-area section-sp1">
          <div className="container">
            <div className="row">
              {data?.length > 0 ?
                data?.map((item) => (
                  <div className="col-xl-4 col-md-6">
                    <div className="blog-card mb-30">
                      <div className="post-media">
                        <Link to={"/story/" + item.title?.replaceAll(" ", "-") + '/' + item?._id}>
                          {
                            item?.youtubeVideoLink ?
                              <img src={`http://img.youtube.com/vi/${getVideoId(item?.youtubeVideoLink)}/0.jpg`} alt="" />
                              : item?.image ? <img src={Dcore.IMAGEURL + '/' + item.image} alt="" /> : <img src={defualtImage} alt="" />
                          }
                        </Link>
                      </div>
                      <div className="post-info">
                        <h6 className="post-title max-lines-2"><Link to={"/story/" + item.title?.replaceAll(" ", "-") + '/' + item?._id}>{item.title}</Link></h6>
                        <ul className="post-meta" style={{ justifyContent: 'space-between' }}>

                          <li className="date">{
                            convertData(item?.updatedAt)
                          }</li>
                          <Link to={"/story/" + item.title?.replaceAll(" ", "-") + '/' + item?._id} className="btn btn-outline-primary btn-sm" style={{ background: '#565ACF', color: '#fff', fontSize: 17, fontWeight: 700 }}>Read More </Link>
                          
                        </ul>

                      </div>
                    </div>
                  </div>
                )) : data?.length !== 0 ? <LoadingComp /> : searchLoading ? <EmptyComp title="Not Data Found" /> : loading ? <EmptyComp title="We have no data for now" /> : null
              }
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="pagination-bx text-center mb-30 clearfix">
                  <ul className="pagination">
                    {
                      pageData?.length && data?.length > postPerPage ?
                        <ReactPaginate
                          previousLabel="Prev"
                          nextLabel="Next"
                          pageCount={PageCount}
                          onPageChange={(page) => { changePage(page) }}
                          containerClassName="paginationCont pointer"
                          previousClassName="previous AllPbtn pointer"
                          nextClassName='next AllPbtn pointer'
                          pageClassName="PBtns AllPbtn pointer"
                          activeClassName="BtnActive pointer"
                          pageRangeDisplayed={3}
                        /> : null
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      <Footer />

    </>
  );
}

export default Stories;
