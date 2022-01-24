import "../style/home.css";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { SetEmpty } from "../actions";
import IPage from "../interfaces/pages";
import TagsBox from "../components/tagsbox";
import Post from "../components/post";
import Hero from "../components/hero";
const HomePage: React.FunctionComponent<IPage> = (props) => {
  const dispatch = useDispatch();
  const selectedTag = useSelector((state: RootStateOrAny) => state.selectedTag);
  const handleTagSelection = () => {
    const element: any = document.getElementById("HomeMenu");
    element.style.borderBottom = "1px solid rgb(214, 214, 214)";
    return (
      <Link to='#' className='selceted-tag'>
        # {selectedTag}
      </Link>
    );
  };

  const handleTagUnSelect = () => {
    const element: any = document.getElementById("HomeMenu");
    element.style.borderBottom = "2px solid #5cb85c";
    dispatch(SetEmpty());
  };
  return (
    <>
      <Hero name='Hero' />
      <div className='grid-container'>
        <div className='grid-item item1'>
          <div className='feed-toggle'>
            <ul className='nav'>
              <li className='nav-item'>
                <Link
                  onClick={handleTagUnSelect}
                  id='HomeMenu'
                  to=''
                  className='nav-link'
                >
                  Global Feed
                </Link>
                {selectedTag && handleTagSelection()}
              </li>
            </ul>
          </div>
          <Post name='Post' />
        </div>
        <div className='grid-item item2'>
          <TagsBox name='Tags Box' />
        </div>
      </div>
    </>
  );
};

export default HomePage;
