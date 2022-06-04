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
import { getResearchs } from "../../store/research/actions";
import { getUploads } from "../../store/uploads/actions";
import LatestNewsSection from "../elements/latest-news-slider";
import ResearchSection from "../elements/research-section";
import StoriesSection from "../elements/stories-section";
// Layout
import Header from "../layout/header";
import Footer from "../layout/footer";


const Stories = () => {
  const [data, setData] = useState([])
  const [dataGlobalLinks, setDataGlobalLinks] = useState([])
  const [dataGlobalSearch, setDataGlobalSearch] = useState([])
  const [dataGlobalStroies, setDataGlobalStories] = useState([])
  const dispatch = useDispatch()
  const postPerPage = 12
  const [PageCount, setPageCount] = useState(10)
  const [searchText, setsearchText] = useState('')
  const [pageData, setPageData] = useState([])
  const researchData = useSelector(state => state.ResearchReducers?.data)
  const linksData = useSelector(state => state.linksReducers?.data)
  const storiesData = useSelector(state => state.StorysReducers?.data)
  const blogData = useSelector(state => state.BlogsReducers?.data)
  const uploadsData = useSelector(state => state.UploadsReducers?.data)
  const [loading, setLoading] = useState(false)
  const [searchLoading, setSearchLoading] = useState(false)
  const [research, setResearch] = useState([])
  const [links, setLinks] = useState([])
  const [stories, setStories] = useState([])

  useEffect(() => {
    dispatch(getStorys())
    dispatch(getBlogs())
    dispatch(getLinks())
    dispatch(getUploads())
    setSearchLoading(false)
    dispatch(getResearchs())

  }, [])

  useEffect(() => {
    setResearch(researchData)
    setLinks(linksData)
    setStories(storiesData)
    setDataGlobalLinks(linksData)
    setDataGlobalSearch(researchData)
    setDataGlobalStories(storiesData)
  }, [researchData, linksData, storiesData, blogData, uploadsData])




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
    // setPageData(res.slice(statingPoint, endingPoint))
  }

  const getVideoId = (url) => {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : false;
  }
  const searchFunc = (e) => {
    setsearchText(e.target.value)
    const researchData = []
    const linksData = []
    const storiesData = []
    dataGlobalSearch.forEach((list) => {
      if (list.title.toLocaleLowerCase().search(searchText.toLocaleLowerCase()) > -1) {
        researchData.push(list)
      }
    })
    dataGlobalLinks.forEach((list) => {
      if (list.title.toLocaleLowerCase().search(searchText.toLocaleLowerCase()) > -1) {
        linksData.push(list)
      }
    })
    dataGlobalStroies.forEach((list) => {
      if (list.title.toLocaleLowerCase().search(searchText.toLocaleLowerCase()) > -1) {
        storiesData.push(list)
      }
    })

    setResearch(researchData)
    setLinks(linksData)
    setStories(storiesData)
    if (!e.target.value.trim()) {
      setLinks(dataGlobalLinks)
      setResearch(dataGlobalSearch)
      setStories(dataGlobalStroies)
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
        {!searchLoading || links?.length || research?.length || stories?.length ? <div className='searchDataCont'>
          {links?.length ? <LatestNewsSection content={links} title="Aheza links News" /> : null}
          {research?.length ? <ResearchSection content={research} /> : null}
          {stories?.length ? <StoriesSection content={stories} /> : null}
        </div> : <div className='searchNoresults'>
          No Results...
        </div>
        }

      </div>

      <Footer />

    </>
  );
}

export default Stories;
