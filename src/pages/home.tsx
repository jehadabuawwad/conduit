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

  return (
    <>
      <Hero name='Hero' />
      <div className='grid-container'>
        <div className='grid-item item1'>
          <div className='feed-toggle'>
            <ul className='nav'>
              <li className='nav-item'>
                {!selectedTag ? (
                  <Link id='HomeMenu' to='' className='selceted-tag'>
                    Global Feed
                  </Link>
                ) : (
                  <>
                    <Link
                      onClick={() => dispatch(SetEmpty())}
                      id='HomeMenu'
                      to=''
                      className='unselceted-tag'
                    >
                      Global Feed
                    </Link>
                    <Link id='HomeMenu' to='' className='selceted-tag'>
                      # {selectedTag}
                    </Link>
                  </>
                )}
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
