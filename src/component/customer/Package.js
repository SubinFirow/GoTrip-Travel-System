import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./css/Package.css";

import Alp from "../../assets/Allepey.jpg";
import Kov from "../../assets/Kovalam.jfif";
import Thek from "../../assets/thekkady.jpg";
import Wayan from "../../assets/Wayan.jpg";
import Erna from "../../assets/Erna.jpg";
import Munn from "../../assets/MUNNAR.jpg";

class Package extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="inner cover lead" role="main">
          <div className="card-deck">
            <div className="card-pkg ">
              <div className="card-body " id="package">
                <img className="card-img-top" src={Kov} alt="" />
                <br />
                <h4 className="card-title"> Kovalam</h4>
                <p className="card-text">
                  Kovalam is a lovely little beach town in Kerala. Translating
                  to mean ‘a grove of coconut trees’, Kovalam's name is truly
                  deserved as many coconut trees surround the city. Kovalam’s
                  three sandy beaches, separated by rocks, draw several tourists
                  to this picturesque little town. These beaches are the Samudra
                  Beach, Hawa Beach and the Lighthouse Beach.
                </p>
                <button className="btn btn-primary">Book now>></button>
              </div>
            </div>
            <div className="card-pkg ">
              <div className="card-body ">
                <img className="card-img-top" src={Thek} alt="" />
                <br />
                <h4 className="card-title">Thekkady</h4>
                <p className="card-text">
                  Thekkady is a small area within the Idukki district of Kerala
                  and is known for the multiple places of tourist interest
                  within the region. Periyar National Park and Periyar Tiger
                  Reserve are one of the major tourist attractions in Thekkady.
                </p>
                <button className="btn btn-primary">Book now>></button>
              </div>
            </div>
            <div className="card-pkg ">
              <div className="card-body ">
                <img className="card-img-top" src={Munn} alt="" />
                <h4 className="card-title">Munnar</h4>
                <p className="card-text">
                  With the seemingly unending expanse of tea estates that cover
                  the rolling hills and valleys wreathed in a cool mist, Munnar
                  is a favored vacation spot in South India. Located at an
                  altitude of almost 6000 ft. in Idukki district of Kerala
                </p>
                <button className="btn btn-primary">Book now>></button>
              </div>
            </div>
            <div className="card-pkg ">
              <div className="card-body ">
                <img className="card-img-top" src={Alp} alt="" />
                <h4 className="card-title">Alleppey</h4>
                <p className="card-text">
                  Aptly named as ‘Venice of the East’ due to its numerous
                  backwater lakes and lagoons, Alleppey is one of the must-visit
                  cities in India. An emerald-green carpet adorns this district,
                  in the form of vast paddy fields.
                </p>
                <button class="btn btn-primary">Book now>></button>
              </div>
            </div>
            <div className="card-pkg ">
              <div className="card-body ">
                <img className="card-img-top" src={Wayan} alt="" />
                <h4 className="card-title">Wayanad</h4>
                <p className="card-text">
                  The breathtaking scenic views from various hilltops, the aroma
                  of spices and coffee, the roar of wild animals and the
                  rhythmic folk dances and music of the tribal people form a
                  perfect rainbow of tourism options in the eco-tourism
                  destination of Wayanad district, located in the Indian state
                  of Kerala
                </p>
                <button class="btn btn-primary">Book now>></button>
              </div>
            </div>
            <div className="card-pkg ">
              <div className="card-body ">
                <img className="card-img-top" src={Erna} alt="" />
                <h4 className="card-title"> Ernakulam</h4>
                <p className="card-text">
                  A district and commercial capital of Kerala. The district of
                  Ernakulam lies in the central part of Kerela
                </p>
                <button className="btn btn-primary">Book now>></button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
export default Package;
