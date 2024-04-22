import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Loading from "../icons/Loading";

import "./../scss/contact.scss";
import config from "../config";
import { z } from "zod";
import axios from "axios";
import { useTranslation } from "react-i18next";

function Contact() {

  const { info,apiMsg } = config;
  

  const { t } = useTranslation();

  const styleAlert = {
    borderRadius: "10px",
    background: "#000",
    color: "#fff",
    fontSize: "16px",
  };
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [errorName, setErrorName] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const [loading, setLoading] = useState(false);

  const schemaName = z.string().min(3).max(16);
  const schemaPhone = z.string().regex(/^(06|05|08|07|\+212|212)[0-9]{8,9}$/);
  const schemaMsg = z.string().min(5).max(160);

  const handleSubmit = (event) => {

    event.preventDefault();

    const vName = schemaName.safeParse(formData.name).success;
    const vPhone = schemaPhone.safeParse(formData.phone).success;
    const vMsg = schemaMsg.safeParse(formData.message).success;

    setErrorName(!vName);
    setErrorPhone(!vPhone);
    setErrorMsg(!vMsg);


    if (vName && vPhone && vMsg) {

      setLoading(true);

      axios
        .post(apiMsg, {
          ...formData,
          id: "INCREMENT",
          date:"DATETIME"
        })
        .then((res) => {
          if (res.status === 201) {
            setFormData({
              name: "",
              phone: "",
              message: "",
            });
            toast.success(t('Sent successfully'), { style: styleAlert });
          }
        })
        .catch(() => toast.error(t('Your message failed to send'), { style: styleAlert }))
        .finally(() => setLoading(false));
    }
  };

  return (
    <div className="contact" id="contact">
      <Toaster position="top-center" reverseOrder={false} />
      
      <div className="boxs">
        <div className="box_one">

          <h3 dangerouslySetInnerHTML={{ __html: t('contact.get in touch') }}></h3>
         
          <ul>
            <li>
              <i className="material-symbols-outlined">near_me</i>
              {t('contact.address')}
            </li>
            <li>
              <i className="material-symbols-outlined">call</i>
              {info.phone}
            </li>
            <li>
              <i className="material-symbols-outlined">mail</i>
              {info.email}
            </li>
          </ul>
        </div>
        <div className="box_two">
          <form action="#" method="post" onSubmit={handleSubmit}>
            <div className="input_x">
              <label htmlFor="name">
                <i className="material-symbols-outlined">person</i>{t('contact.form.name')}
              </label>
              <input
                className={errorName ? "error" : null}
                type="text"
                name="name"
                id="name"
                placeholder={t('contact.form.name')}
                autoComplete="off"
                
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  setErrorName(false);
                }}
              />
            </div>
            <div className="input_x">
              <label htmlFor="name">
                <i className="material-symbols-outlined">smartphone</i>{t('contact.form.phone')}
              </label>
              <input
                className={errorPhone ? "error" : null}
                type="text"
                name="phone"
                id="phone"
                value={formData.phone}
                placeholder={t('contact.form.phone')}
                autoComplete="off"
                
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  setErrorPhone(false);
                }}
              />
            </div>
            <div className="input_x">
              <label htmlFor="name">
                <i className="material-symbols-outlined">inbox</i>{t('contact.form.message')}
              </label>
              <textarea
                className={errorMsg ? "error" : null}
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder={t('contact.form.message')}
                autoComplete="off"
                spellCheck={false}
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  setErrorMsg(false);
                }}
              ></textarea>
            </div>
            <div className="input_x">
              {loading ? (
                <button type="submit" disabled><Loading style={{color:'#fff'}}/></button>
              ) : (
                <button type="submit">{t('contact.form.btn_send_message')}</button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
