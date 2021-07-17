import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Components/Navigation';
import Footer from '../Components/Footer';
import ItemPage from './ItemPage';
import './Item.scss';
import { menuData } from '../Data/data';
import { IoIosArrowBack } from 'react-icons/io';

function Item({ match }) {
  let id = match.params.name;

  return (
    <Fragment>
      <Navigation />
      <div className="item--container">
        <Link to="/menu">
          <div className="item--goback">
            <div className="goback--icon">
              <IoIosArrowBack />
            </div>
            <p>Go Back</p>
          </div>
        </Link>

        <ItemPage
          name={menuData[id].name}
          small={menuData[id].status}
          price={menuData[id].price}
          info={menuData[id].info}
          img={menuData[id].img}
        />
      </div>
      <Footer />
    </Fragment>
  );
}

export default Item;
