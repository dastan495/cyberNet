import React, { useState } from "react";
import "./meeting.css";
import axios from "axios";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import number from "../../image/number2.png";
import emailImg from "../../image/email2.png";
import MeetHeader from "../Header/MeetHeader";
import BurgerMenu from "../Header/BurgerMenu";
const Meeting = () => {
    const [visible, setVisible] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [comp, setComp] = useState("");
    const [site, setSite] = useState("");
    const [act, setAct] = useState("");
    const [lang, setLang] = useState("");
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");
    const [time, setTime] = useState("");
    const [comment, setComment] = useState("");
    const navigate = useNavigate();
    const send_mail = () => {
        const data = new FormData();
        data.append("full_name", name);
        data.append("phone", phone);
        data.append("email", email);
        data.append("company_name", comp);
        data.append("website", site);
        data.append("type_of", act);
        data.append("languages", lang);
        data.append("month", month);
        data.append("day", day);
        data.append("time", time);
        data.append("comment", comment);
        console.log(data.get("phone"));
        axios
            .post("/send/", data)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const [menuState, setMenuState] = useState(false);

    return (
        <div>
            <div className="up_navbar">
                <div className="upNav_email">
                    <img src={emailImg} alt="" />
                    <a style={{ color: "black" }} href="#">
                        example@example.com
                    </a>
                </div>
                <div className="upNav_number">
                    <img src={number} alt="" />
                    <a style={{ color: "black" }} href="">
                        +1 (514) 312-5678
                    </a>
                </div>
            </div>
            {menuState && (
                <div
                    className="sidebarMenu"
                    onClick={(e) => e.stopPropagation()}
                >
                    <BurgerMenu setMenuState={setMenuState} />
                </div>
            )}
            <MeetHeader setMenuState={setMenuState} />
            <div
                style={{
                    color: "black",
                    width: "85%",
                    margin: "auto",
                    marginTop: "30px",
                    marginBottom: "20px",
                }}
                className={visible === false ? "container" : "hidden_block"}
            >
                <h1>Book meeting</h1>
                <h3>Fill out the form and we will come as soon as possible</h3>
                <div className="main_meeting1">
                    <div style={{ width: "40%" }}>
                        <div className="main_meeting">
                            <p>Full Name</p>
                            <input
                                placeholder="Johne Doe"
                                type="text"
                                onChange={(event) => {
                                    setName(event.target.value);
                                }}
                            />
                        </div>
                        <div className="main_meeting">
                            <p>Phone</p>
                            <input
                                placeholder="819-234-22-22"
                                type="text"
                                onChange={(event) => {
                                    setPhone(event.target.value);
                                }}
                            />
                        </div>
                        <div className="main_meeting">
                            <p>E-Mail</p>
                            <input
                                placeholder="example@example.com"
                                type="text"
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div style={{ width: "50%" }}>
                        <div className="main_meeting">
                            <p>Company Name</p>
                            <input
                                placeholder="example"
                                type="text"
                                onChange={(event) => {
                                    setComp(event.target.value);
                                }}
                            />
                        </div>
                        <div className="main_meeting">
                            <p>Web Site(If Have)</p>
                            <input
                                placeholder="www.example.com"
                                type="text"
                                onChange={(event) => {
                                    setSite(event.target.value);
                                }}
                            />
                        </div>
                        <div className="main_meeting met1">
                            <p>Type of activity of your company(briefly)</p>
                            <textarea
                                placeholder="Choose services"
                                type="text"
                                onChange={(event) => {
                                    setAct(event.target.value);
                                }}
                            />
                        </div>
                        <div className="main_meeting met1">
                            <p>What language would you like to speak</p>
                            <input
                                placeholder="English, Russian, Armenian"
                                type="text"
                                onChange={(event) => {
                                    setLang(event.target.value);
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="btn_block">
                    <button
                        onClick={() => {
                            setVisible(true);
                        }}
                        className="next_btn"
                    >
                        Next{" "}
                    </button>
                </div>
            </div>
            <div
                style={{
                    padding: "20px",
                    color: "black",
                    width: "85%",
                    margin: "auto",
                    marginTop: "30px",
                    marginBottom: "20px",
                }}
                className={visible ? "container" : "hidden_block"}
            >
                <h1 style={{ color: "black" }}>Book meeting</h1>
                <h3 style={{ color: "black" }}>
                    Fill out the form and we will come as soon as possible
                </h3>
                <div className="main_meeting1">
                    <div style={{ width: "40%" }}>
                        <div className="main_meeting">
                            <p>Month</p>
                            <input
                                placeholder="January"
                                type="text"
                                onChange={(event) => {
                                    setMonth(event.target.value);
                                }}
                            />
                        </div>
                        <div className="main_meeting">
                            <p>Day</p>
                            <input
                                placeholder="819-234-22-22"
                                type="text"
                                onChange={(event) => {
                                    setDay(event.target.value);
                                }}
                            />
                        </div>
                        <div className="main_meeting">
                            <p>Select time for meeting</p>
                            <input
                                placeholder="11pm-2pm"
                                type="text"
                                onChange={(event) => {
                                    setTime(event.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div style={{ width: "50%" }}>
                        <div className="main_meeting met1">
                            <p>Write Comment</p>
                            <textarea
                                placeholder="Comment"
                                type="text"
                                onChange={(event) => {
                                    setComment(event.target.value);
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="btn_block">
                    <button
                        onClick={() => {
                            send_mail();
                            navigate("/");
                        }}
                        className="next_btn"
                    >
                        Submit{" "}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Meeting;
