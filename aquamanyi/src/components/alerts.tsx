'use client'
import React from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';

const AlertComponent = () => {
  return (
    <div className="body-container">
      <div className="alert-container">
        <div className="bell-notification">
          <IoMdNotificationsOutline size={24} color="#38D0F5" />
        </div>
        <div className="header">
          <h1 className="title">Alerts & Notifications</h1>
        </div>
        <div className="messages-title">Messages:</div>
        <div className="message">
          <div className="message-box">
            <p>
              The pH levels are at 9:00. The water needs critical attention. <br />
              13:00 p.m
            </p>
          </div>
          <div className="status-label">New</div>
          <div className="status-indicator"></div>
        </div>
        <div className="message">
          <div className="message-box">
            <p>
              The pH levels are at 6:00. The water is normal and safe. <br /> 11:00 a.m
            </p>
          </div>
          <div className="status-label">New</div>
          <div className="status-indicator"></div>
        </div>
      </div>
      <style jsx global>{`
        body {
          background-color: #ffffff; /* Set the body background color to white */
        }

        .body-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .alert-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
        }

        .bell-notification {
          align-self: flex-end;
          margin-right: 10px;
          margin-top: 10px;
        }

        .header {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        .header {
          flex-grow: 1;
          height: 60px;
          background-color: #082E58;
          border: 3px solid #38D0F5;
          border-radius: 10px;
          padding: 10px;
          margin-right: 10px;
        }

        .header svg {
          font-size: 24px;
          margin-right: 10px;
          color-fill: #38D0F5;
        }

        .title {
          font-size: 26px;
          font-weight: bold;
          color: #ffff; /* Set text color */
        }

        .messages-title {
          color: #000;
          font-size: 20px;
          font-weight: bold;
          margin-right: 10px;
        }

        .message {
          display: flex;
          align-items: center;
          margin-top: 10px;
          width: 100%;
          justify-content: space-between;
        }

        .status-label {
          width: 58px;
          height: 30px;
          background-color: #082E58;
          color: #ffffff;
          font-size: 1.6rem;
          font-weight: bold;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 5px;
          margin-left: 10px;
        }

        .status-indicator {
          width: 10px;
          height: 10px;
          background-color: #38D0F5;
          border: 1px solid #38D0F5;
          border-radius: 150%;
          margin-left: 10px;
        }

        .message-box {
          flex-grow: 1;
          height: 80px;
          background-color: #ffffff;
          border: 3px solid #38D0F5;
          border-radius: 20px;
          padding: 10px;
          margin-right: 10px;
        }

        .message-box p {
          color: #000;
          font-size: 1.8rem;
          margin: 0;
          font-size: 18px;
          margin-top: 10px;
        }

        .alert-box {
          background-color: #ffffff; /* Set the background color to white */
          border: 5px solid #38D0F5;
          border-radius: 18px;
          padding: 40px;
          text-align: center;
        }

        .alert-box p {
          color: #000;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
};

export default AlertComponent;








