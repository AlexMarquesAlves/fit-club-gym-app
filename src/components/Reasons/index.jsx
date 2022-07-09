import P from 'prop-types';
import { dataImage1, dataImage2, partners } from './data';
import './styles.scss';

export const Reasons = () => {
   return (
      <div className="Reasons" id="reasons">
         {/* IMAGES SIDE */}
         <div className="left-r">
            {dataImage1.map((items, index) => (
               <img src={items.src} alt="" key={index} />
            ))}
         </div>
         {/* END OF IMAGES SIDE */}

         <div className="right-r">
            <span>Some reasons</span>

            <div>
               <span className="stroke-text">Why</span>
               <span>Choose Us?</span>
            </div>

            {/* DETAILS */}
            <div className="details-r">
               {dataImage2.map((items, index) => (
                  <div key={index}>
                     <img src={items.src} alt="" />
                     <span>{items.text}</span>
                  </div>
               ))}
            </div>
            {/*  END OF DETAILS*/}

            {/* PARTNERS */}
            <span
               style={{
                  color: 'var(--gray)',
                  fontWeight: 'normal',
               }}
            >
               OUR PARTNERS
            </span>

            <div className="partners">
               {partners.map((items, index) => (
                  <img src={items.src} alt="partners logo" key={index} />
               ))}
            </div>
            {/* END OF PARTNERS */}
         </div>
      </div>
   );
};

Reasons.propTypes = {
   children: P.node,
};
