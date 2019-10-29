import React from 'react';
// import Accordion from './common/Accordion';
import Accordion from './common/Accordion'
import { NavLink } from 'react-router-dom';


const GENERAL_DATA = [
      {
            title: 'What pet you can paint?',
            paragraph: 'I can paint any animal no matter the species or the breed. So far I have created unique masterpieces for dogs, cats, birds, horses, goats, rabbits and even racoon!',
            id: "general1"
      },
      {
            title: 'Do you paint humans?',
            paragraph: <><p>Within Fluffy project I just paint pets, sorry!</p><p>
            Howether, as an artist I opened for special projects and collaborations. You can contact me with your ideas using <NavLink   to="/contact" >Contact form</NavLink>.
           </p></>,
            id: "general2"
      },
      {
            title: 'Can you paint more than one pet on one canvas?',
            paragraph: <>
           <p> Yes, I can paint as many pets on canvas as you wish. </p>
<p>Please download photo with all pets on it and <strong>dedicate in a comment: which exactly pets you wanna have on artwork and how many. Also pick in an order form amount of extra pets.</strong></p>
<p>Please note that there is an extra charge for extra pet on a canvas, which will be calculated automatically:</p>
1st extra pet    + 50% * <br/>
2nd extra pet   + 25% * <br/>
For each next extra pet +15% * for each pet <br/>
* % calculating from the basic fare (style + canvas size)
            </>,
            id: "general3"
      },
      {
            title: 'Is my photo good enough to use?',
            paragraph: <>
            If you followed my photo guidelines, then yes your photo is very likely good enough to use ;)
            <ul>
                  <li>Make sure the photo is taken in good lighting (outdoor daylight is best)</li>
                  <li>Try to take the photo at eye level with your pet</li>
                  <li>Try to get a close up so I can see your pet's unique features
                        <ul>
                              <li>Choose photo with exact position of your pet you wanna have on artwork</li>
                        </ul>
                  </li>
                  <li>Make sure the photo is not blurry</li>
                  <li>Make sure no features (e.g. ears!) you wanna see on a final painting are out of frame.
                        <ul>
                              <li>If you send photo with not just one pet on it, please, dedicate in a comment: <br/>
                              which exactly pet or pets you wanna have on artwork and how many. If you wanna have more than 1 pet on a painting, please read  Can you paint more than one pet on one canvas ? (link)</li>
                        </ul>
                  </li>
                  <li>Ensure that the fur color in the photo is not affected by bad lighting. If the fur in the photo is not accurate to real life, the fur on a painting won't be either</li>
            </ul>
            <p>For some styles there are an extra important requirements:
                  <ol>
                        <li>Meme : Big head photo. Better to use photos with emotional pet faces.</li>
                        <li>Dressed portrait: Portrait at eye level with your pet (try to use nose as a center point). Front or side horizontal light. Very detailed good quality photo. Please write in a comment preferred pet dress style and landscape.</li>
                  </ol>
</p>
            <p>Please note, that I keep the rights for artistic vision, as styles Im painting and offering are not 100% photorealistic and photographs I receive from you as well as comments I use as a references to my artwork. </p>
            <p>I conduct a photo check for every new order I receive and will email you if I need a different one. But it's best to take matters into your own hands and ensure you upload the best photo you have.</p>
            <p>If I do need a new photo from you, this may lengthen your delivery time by a few days.</p>
            <p>Please note that if you refuse to provide a replacement after I have informed you that the original photo may not result in quality painting, then I cannot refund you. It's your responsibility to ensure that you are happy with the photo you provided.</p>

                     </>,
            id: "general5"
      },
      {
            title: 'Does it matter if my photo has stuff on a background?',
            paragraph: <>
           <p> If there are any important accessory you wanna keep from the photo background, please let me know in a comment. Otherwise, background will be on my consideration.</p>
            <p>Please note, that there are extra charge for adding accessories as well as keeping detailed background. It will be calculated additionally and confirmed with you by e-mail after order has been proceeded.</p>
                     </>,
            id: "general6"
      },
      {
            title: 'How do you produce artworks?',
            paragraph: <>
            <p>I'm painting from a scratch .Please note, that I keep the rights for artistic vision, as styles Im painting and offering are not 100% photorealistic and photographs I receive from you as well as comments I use as just a reference to my artwork. </p>
            <p>I'm an artist working with acrylic paints and I use high quality canvases, acrylic paints, best brushes, all my artistic skills and creative vision to turn your original photo in to a pet artwork.</p>
                     </>,
            id: "general7"
      },
      {
            title: 'Can I change my order?',
            paragraph: <>You can change your order for 12 hours. If you placed your order more than 12 hours ago, I can't guarantee that I can change it. Please note, that order fare and delivery date can be recalculated due to standard rates, changes you wanna make and re-confirmation process time.
                     </>,
            id: "general8"
      },
      {
            title: 'Will I see the finished painting before it gets dispatched?',
            paragraph: <><p>Sorry, no. </p>
                        <p>Cause one of my concepts is to bring you surprise sensation and keep Wow factor when you getts and unpack your unique Fluffy painting.</p>
                     </>,
            id: "general9"
      }
];

const SHIPPING_DATA = [
      {
            title: 'What are the despatch and shipping times and prices?',
            paragraph: <>
                 <strong>Israel Orders:</strong> Most paintings are generally made and ready to be despatched within 14 days. At checkout I offer 3 speeds for order to be made: 
                 <ul>
                        <li>
                              Extra Fast  5-7 days despatch
                        </li>
                        <li>
                              Fast 8-13 days despatch
                        </li>
                        <li>
                              Standard 2 weeks despatch option
                        </li>
                  </ul>
                  <p>Please find below extra fares for Speedy orders:<br/>
                  <ul>
                        <li>
                              Extra Fast 5-7 days +100%**
                        </li>
                        <li>
                              Fast 8-13 days  +50%**
                        </li>
                  </ul>
                        <small>** % calculating from the basic fare (style+canvas size) plus all extra charges for specific paintings requests (extra pets, specific background)</small>
                        </p>
                        <p><strong>International Orders:</strong> Sorry, but right now we don't ship internationally due to complicated customs clearance process for a handmade paintings.</p>
                        <p><strong>Shipping prices are a flat fee per order: 40 ils.</strong> </p>
                        Shipping is provided by Israel Post.
            </>,
            id: "shipping1"
      },
      {
            title: 'Can I Pick up my painting myself?',
            paragraph: <>  Yes, I provide free pick up options in Babel Bookshop, located in Tel Aviv on <a href="https://goo.gl/maps/2D2U6ncx2yvWiJ5i6" rel="noopener noreferrer" target="_blank">Yona HaNavi street, 46 Map</a>. Please check its working hours <a href="https://www.facebook.com/BabelTLV/" rel="noopener noreferrer" target="_blank">here</a>.  </>,
            id: "shipping2"
      }
];

const RETURNS_DATA = [
      {
            title: 'Do you offer refunds?',
            paragraph: <>
            <p>As your order is 100% unique and custom made for you and your pet,  I cannot offer refunds. If you have a problem with your final product, please email me and I'll do my best to make sure you're happy.</p>
<p>If you received an incorrect or damaged artwork, let me know and I'll send out a replacement as fast as possible! Note that while I do not refund faulty orders, I do replace them as quickly as I can.
</p>
            </>,
            id: 'returns1'
      },
      {
            title: 'What If I don’t like your artwork?',
            paragraph: <>
            I really want you to feel happy with the final painting. If you don't like it for any reason, please reach me at <a href="mailto:info@fluffy.co.il">info@fluffy.co.il</a> and I'll do my best to help you.</>,
            id: 'returns2'
      },
      {
            title: 'My painting arrived damaged, what do I do?',
            paragraph: <>
            <p>Please contact me with Photos of the damages at <a href="mailto:info@fluffy.co.il">info@fluffy.co.il</a> as soon as you notice the damage and/or defect. I will offer you a replacement and send it out to you as fast as I can.</p>
<p>Please remember, that you ordering a hand-made artistic painting. The surface of the painting having unique acrylic paints texture and also various due to each artistic style - from more textured for colorful style to more smooth for anime style. </p>
</>,
            id: 'returns3'
      },
      {
            title: 'Can I cancel my order if I changed my mind?',
            paragraph: <>
           <p> I accept all cancellation requests made within 12 hours of placing the order, no questions asked.</p>
<p>Any cancellation request sent after this 12 hour window will be accepted at my discretion. If accepted, you will be subject to a 30% cancellation fee. This is because I will have already spent time working on your artwork by this point.</p>
<p>After 36 hours orders cannot be cancelled under any circumstances.</p>

            </>,
            id: 'returns4'
      },
]

const data = [
  {
    title: 'GENERAL',
    paragraph: <Accordion data={GENERAL_DATA}/>,
    id: "general"
  },
  {
    title: 'SHIPPING',
    paragraph: <Accordion data={SHIPPING_DATA}/>,
    id:"shipping"
  },
  {
    title: 'RETURNS/REFUNDS',
    paragraph: <Accordion data={RETURNS_DATA}/>,
    id: "returns"
  }
];


const FAQ = (props) => {
   
      return (
      <div className="container mt-5">     
            <div className="row">
                  <div className="col-12">
                        <h4 className="mb-3">FAQ</h4>
                        <Accordion data={data} />
                         
                  </div>
            </div>
      </div>
      );
}


export default FAQ;