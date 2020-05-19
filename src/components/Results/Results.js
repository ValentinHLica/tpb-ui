import React from "react";

import UpladIcone from "../../assets/img/upload.svg";
import ClockIcone from "../../assets/img/clock.svg";
import StarIcone from "../../assets/img/star.svg";
import DownloadIcone from "../../assets/img/download.svg";

import { Link } from "react-router-dom";

export default function Results(props) {
  return props.data.length !== 0 ? (
    <div className="results container">
      <div className="results-header grid">
        <p>TORRENT</p>
        <p>SIZE</p>
        <p>SEED</p>
        <p>LEECH</p>
        <p></p>
      </div>
      {props.data.map((torrent, index) => (
        <div className="torrent grid" key={index}>
          <div className="torrent-info">
            <p className="torrent-title">
              <Link to={`/torrent/${torrent.id}`}>{torrent.title}</Link>
            </p>
            <div className="torrent-detail">
              <div className="torrent-category">
                <div>
                  {torrent.info.type === "Applications"
                    ? "App"
                    : torrent.info.type}
                </div>
                <div>{torrent.info.category}</div>
              </div>
              <div className="torrent-uploder">
                <img src={UpladIcone} alt="Uploader Icone" />
                Uploaded by:{" "}
                <span className={torrent.info.vip ? "vip" : ""}>
                  {torrent.info.uploader}
                  {torrent.info.vip ? (
                    <img src={StarIcone} alt="Star Icone" />
                  ) : null}
                </span>
              </div>
              <div className="torrent-date">
                <img src={ClockIcone} alt="Clock Icone" />
                {torrent.info.uploadDate}
              </div>

              <div className="mobile">
                <div className="size ">Size: {torrent.info.size}</div>
                <div className="seeders ">Seeders: {torrent.info.seeders}</div>
                <div className="leeachers ">
                  {torrent.info.leechers.length <= 4
                    ? "Leechers" + torrent.info.leechers
                    : null}
                </div>
              </div>
              <div className="magnet ">
                <a href={torrent.magnet}>
                  <img src={DownloadIcone} alt="Download Icone" />
                </a>
              </div>
            </div>
          </div>
          <div className="size box">{torrent.info.size}</div>
          <div className="seeders box">{torrent.info.seeders}</div>
          <div className="leeachers box">
            {torrent.info.leechers.length <= 4 ? torrent.info.leechers : null}
          </div>
          <div className="magnet box">
            <a href={torrent.magnet}>
              <img src={DownloadIcone} alt="Download Icone" />
            </a>
          </div>
        </div>
      ))}
    </div>
  ) : null;
}
