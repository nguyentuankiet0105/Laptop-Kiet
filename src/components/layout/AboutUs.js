import {  Button,Form, Row, Col } from 'antd';
import Support from '../common/Support/index';
import About_1 from '../../assets/images/AboutUs/Ab_1.png';
import About_2 from '../../assets/images/AboutUs/Ab_2.png';
import About_3 from '../../assets/images/AboutUs/Ab_3.png';
import About_4 from '../../assets/images/AboutUs/Ab_4.png';
import About_5 from '../../assets/images/AboutUs/Ab_5.png';

const AboutUs = () => {
  return (
    <>
      <div className="about">
        <div className="container">
          <h1>ABOUT US</h1>
          <div className="about__one">
              <div className="about__one--content">
                <h1>A Family That Keeps On Growing</h1>
                <p>
                  We always aim to please the home market, supplying great computers and hardware at
                  great prices to non-corporate customers, through our large Melbourne CBD showroom
                  and our online store.
                </p>
                <p>
                  Shop management approach fosters a strong customer service focus in our staff. We
                  prefer to cultivate long-term client relationships rather than achieve quick
                  sales, demonstrated in the measure of our long-term success.
                </p>
              </div>
              <div className="about__one--img">
                <img src={About_1} alt="" />
              </div>
          </div>
          <div className="about__two">
            <div className="about__two--content">
              <h1>shop.com</h1>
              <p>
                Shop is a proudly Australian owned, Melbourne based supplier of I.T. goods and
                services, operating since 1991. Our client base encompasses individuals, small
                business, corporate and government organisations. We provide complete business IT
                solutions, centred on high quality hardware and exceptional customer service.
              </p>
            </div>
            <div className="about__two--img">
              <img src={About_2} alt="" />
            </div>
          </div>
          <div className="about__three">
            <div className="about__three--content">
              <h1>You're In Safe Hands</h1>
              <p>
                Experience a 40% boost in computing from last generation. MSI Desktop equips the
                10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an
                unparalleled gaming experience.
              </p>
              <p>*Performance compared to i7-9700. Specs varies by model.</p>
            </div>
            <div className="about__three--img">
              <img src={About_3} alt="" />
            </div>
          </div>
          <div className="about__four">
            <div className="about__four--content">
              <h1>The Highest Quality of Products</h1>
              <p>
                We guarantee the highest quality of the products we sell. Several decades of
                successful operation and millions of happy customers let us feel certain about that.
                Besides, all items we sell pass thorough quality control, so no characteristics
                mismatch can escape the eye of our professionals.
              </p>
            </div>
            <div className="about__four--img">
              <img src={About_4} alt="" />
            </div>
          </div>
          <div className="about__five">
            <div className="about__five--content">
              <h1>Delivery to All Regions</h1>
              <p>
                We deliver our goods all across Australia. No matter where you live, your order will
                be shipped in time and delivered right to your door or to any other location you
                have stated. The packages are handled with utmost care, so the ordered products will
                be handed to you safe and sound, just like you expect them to be.
              </p>
            </div>
            <div className="about__five--img">
              <img src={About_5} alt="" />
            </div>
          </div>
          <div className="about__six">
            <p>
              <q>
              My first order arrived today in perfect condition. From the time I sent a question
              about the item to making the purchase, to the shipping and now the delivery, your
              company, Tecs, has stayed in touch. Such great service. I look forward to shopping on
              your site in the future and would highly recommend it. </q>
            </p>
            <p className="about__six--actor">- Tama Brown</p>
            <Button>Leave Us A Review</Button>
          </div>
        </div>
      </div>
      <Support />
    </>
  );
};
export default AboutUs;
