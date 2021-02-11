import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./css/Pkg-wild.css";
import pinnawala from "../../assets/pinnawala.jpg";
import sigiriya from "../../assets/sigiriya.jpg";
import dambulla from "../../assets/dambulla.jpg";
import nuwaraeli from "../../assets/nuwaraeli.jpg";
import udawalawa from "../../assets/udawalawa.jpg";

class WildLife extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="inner cover lead" role="main">
          <div id="jumb_a" class="jumbotron jumbotron-fluid">
            <div id="pkg-detail" className="card">
              <div class="card-body">TRAVEL WILD LIFE & ECO</div>
            </div>
          </div>
          <div id="description" class="card">
            <div id="desc" class="card-body">
              <font class="font-weight-bold">TRAVEL </font>WILD LIFE & ECO{" "}
              <br />
              <p>
                There are a number of popular wildlife sanctuaries in Kerala
                housing exotic and rare species of flora and fauna. Nestled in
                the elaborate forest of the majestic Western Ghats or Sahyadri
                Ranges in Kerala are fourteen wildlife sanctuaries and two tiger
                reserves. Kerala also has six national parks containing
                protected and endangered species like the Indian Sloth-Bear,
                Lion-Tailed Macaque, Indian Bison, Bengal Tiger, Nilgiri Tahr
                etc.
              </p>
            </div>
          </div>
          <br /> <br /> <br />
          <div id="description" class="card">
            <div id="desc" class="card-body">
              <div class="row">
                <div class="col-sm-4" align="left">
                  <img class="card-img-top" src={pinnawala} alt="" />
                </div>
                <div id="desc" class="col-sm-8" align="left">
                  <span class="badge badge-secondary"> DAY 01</span>
                  <br />
                  <br />
                  <p class="font-weight-bold"> Aralam Wildlife Sanctuary</p>

                  <p>
                    Spread over a 55 sq. km area of forests on the Western
                    Ghats, the Aralam Wildlife Sanctuary is among the finest of
                    its kind in Kerala. It plays host to an exotic array of
                    flora and fauna and is among the most picturesque locations
                    in Kannur district. The entire area is covered in tropical
                    and semi evergreen forests and is a truly riveting sight.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="description" class="card">
            <div id="desc" class="card-body">
              <div class="row">
                <div class="col-sm-4" align="left">
                  <img class="card-img-top" src={sigiriya} alt="" />
                </div>
                <div id="desc" class="col-sm-8" align="left">
                  <span class="badge badge-secondary"> DAY 02</span>
                  <br />
                  <br />
                  <p class="font-weight-bold"> SIGIRIYA SIGHTSEEING</p>

                  <p>
                    {" "}
                    You will have a chance to visit world heritage site in
                    Sigiriya. The Sigiriya Rock fortress is located in the heart
                    of the Island between the towns of Dambulla and Habarana on
                    a massive rocky plateau 370 meters above the sea level.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="description" class="card">
            <div id="desc" class="card-body">
              <div class="row">
                <div class="col-sm-4" align="left">
                  <img class="card-img-top" src={dambulla} alt="" />
                </div>
                <div id="desc" class="col-sm-8" align="left">
                  <span class="badge badge-secondary"> DAY 03</span>
                  <br /> <br />
                  <p class="font-weight-bold">Begur Wildlife Sanctuary </p>
                  <p>
                    The Begur Wildlife Sanctuary is one among the several hidden
                    gems of Wayanad district. The lush greenery and rare faunal
                    species make it a must visit destination. The Western Ghats
                    form the perfect backdrop for a wonderful safari here. One
                    can come across bear, bison, elephants, jungle cats,
                    monkeys, panther, spotted deer, wild boars and packs of wild
                    dogs here. Nature lovers will find many a picturesque picnic
                    spot in this area, located about 20 km east of Mananthavady
                    in Wayanad. It is a unique destination that is slowly
                    gaining traction among our visitors.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="description" class="card">
            <div id="desc" class="card-body">
              <div class="row">
                <div class="col-sm-4" align="left">
                  <img class="card-img-top" src={nuwaraeli} alt="" />
                </div>
                <div id="desc" class="col-sm-8" align="left">
                  <span class="badge badge-secondary"> DAY 04</span>
                  <br />
                  <br />
                  <p class="font-weight-bold"> KANDY - NUWARA ELIYA</p>

                  <p>
                    Nuwara Eliya is a cool resort town located in the central
                    mountains surrounded by amazing views and tea estates. Do a
                    city tour of Nuwara Eliya including tea plantations, Golf
                    course, Hakgala botanical garden, Hindu temples, and world’s
                    famous Pink post office
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="description" class="card">
            <div id="desc" class="card-body">
              <div class="row">
                <div class="col-sm-4" align="left">
                  <img class="card-img-top" src={udawalawa} alt="" />
                </div>
                <div id="desc" class="col-sm-8" align="left">
                  <span class="badge badge-secondary"> DAY 05</span>
                  <br />
                  <br />
                  <p class="font-weight-bold">
                    {" "}
                    Chinnar Wildlife Sanctuary in Idukki
                  </p>

                  <p>
                    Chinnar Wildlife Sanctuary in Idukki Chinnar Wildlife
                    Sanctuary in Idukki is home to the Great Grizzled Squirrel
                    of India. Numbering less than 200, they are among the most
                    endangered species on the planet. Its unique location in the
                    Western Ghats has ensured it gets less than 2 months of
                    rainfall annually. The wildlife along with the deciduous
                    trees makes it an ideal spot for trekking aficionados.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div class="botton" align="center">
            <button type="button" class="btn btn-info ">
              Book Now
            </button>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </main>

        <Footer />
      </div>
    );
  }
}
export default WildLife;
