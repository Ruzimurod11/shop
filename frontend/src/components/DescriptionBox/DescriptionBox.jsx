import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
   return (
      <div className="descriptionbox descriptionbox__container">
         <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
         </div>
         <div className="descriptionbox-description">
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. At
               provident nulla hic magnam, et atque facere totam excepturi
               molestiae tempora doloribus, soluta exercitationem voluptates
               inventore autem, perspiciatis quae ea eos pariatur. Odit,
               voluptatum?
            </p>
            <p>
               Mollitia saepe facilis dolore dolorem in. Ab repellendus
               praesentium, optio, distinctio dolor soluta voluptatum ducimus
               earum quisquam adipisci aliquam, maiores explicabo sunt
               aspernatur deleniti accusantium quo vero odio doloremque? Sint,
               id explicabo fugiat officiis tenetur repellendus culpa iusto
               enim, dolor harum at ab, temporibus necessitatibus. voluptatum?
            </p>
         </div>
      </div>
   );
};

export default DescriptionBox;
