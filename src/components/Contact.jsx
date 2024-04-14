import React from "react";
import "./../scss/contact.scss";

function Contact() {
  return (
    <div className="contact">
      <div className="boxs">
        <div className="box_one">
            <h3>Lorem, <span>ipsum.</span></h3>
            <ul>
                
                <li><i className="material-symbols-outlined">near_me</i>Apt. 599 Erbelegasse 80a, Heroldheim, HE 35439</li>
                <li><i className="material-symbols-outlined">call</i>0605805993</li>
                <li><i className="material-symbols-outlined">mail</i>mehdikidai@gmail.com</li>
            </ul>
        </div>
        <div className="box_two">
          <form action="#" method="post">
            <div className="input_x">
              <label htmlFor="name">name</label>
              <input type="text" name="name" id="name" placeholder="name" autoComplete="off"/>
            </div>
            <div className="input_x">
              <label htmlFor="name">phone</label>
              <input type="text" name="phone" id="phone" placeholder="phone" autoComplete="off" />
            </div>
            <div className="input_x">
            <label htmlFor="name">phone</label>
              <textarea name="msg" id="" cols="30" rows="10" placeholder="msg" autoComplete="off"></textarea>
            </div>
            <div className="input_x">
                <button type="submit">send message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
