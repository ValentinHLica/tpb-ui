import React, { useEffect, useState } from "react";
import axios from "axios";

import { Context } from "../Context";

import { Link } from "react-router-dom";

import "./style.css";

import Header from "./Header";

import Loading from "../other/Loading";

import UpladIcone from "../../assets/img/upload.svg";
import ClockIcone from "../../assets/img/clock.svg";
import DownloadIcone from "../../assets/img/download.svg";

export default function Main(props) {
  const [torrent, setTorrent] = useState({});
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);

  const { searchTorrents } = React.useContext(Context);

  useEffect(() => {
    const url = window.api_url;

    axios
      .get(`${url}torrent/${props.match.params.torrentId}`)
      .then((torrent) => {
        setTorrent(torrent.data.data);

        setLoading(false);
      })
      .catch(() => {
        setErr(true);

        setLoading(false);
      });

    // eslint-disable-next-line
  }, []);

  const quickSearch = (query) => {
    searchTorrents([]);
    props.history.push(`/results/${query}/0/7`);
  };

  return (
    <React.Fragment>
      <Header quickSearch={quickSearch} />

      <div className="torrent-page container">
        <Loading show={loading} />

        {err ? (
          <h1 className="nothing-found">
            Nothing was found{" "}
            <Link to="/" className="go-back">
              Go Back
            </Link>
          </h1>
        ) : null}

        {torrent.title ? (
          <React.Fragment>
            <div className="torrent-page-details">
              <h3>TORRENT DETAILS</h3>
              <div className="torrent-page-main-detail">
                <div className="info">
                  <h2>{torrent.title}</h2>
                  <div className="torrent-page-category">
                    {torrent.info.type.map((category, index) => (
                      <div key={index}>{category}</div>
                    ))}
                  </div>
                  <div className="torrent-page-detail">
                    <div className="torrent-page-uploder">
                      <img src={UpladIcone} alt="Uploader Icone" />
                      Uploaded by: <span>{torrent.info.detail.author}</span>
                    </div>
                    <div className="torrent-page-date">
                      <img src={ClockIcone} alt="Clock Icone" />
                      {torrent.info.uploaded.date +
                        " " +
                        torrent.info.uploaded.time +
                        " " +
                        torrent.info.uploaded.timeZone}
                    </div>

                    <div className="seed-and-leech">
                      <div className="seed">{torrent.info.detail.seeders}</div>/
                      <div className="leech">
                        {torrent.info.detail.leechers}
                      </div>
                    </div>

                    <div className="size">{torrent.info.size}</div>
                  </div>
                </div>

                <div className="torrent-page-magnet">
                  <a href={torrent.magnet}>
                    <img src={DownloadIcone} alt="Download Icone" />
                    Download Torrent
                  </a>
                </div>
              </div>
            </div>

            <div className="torrent-desciption">
              <h3>TORRENT DESCRIPTION</h3>
              <div className="description">{torrent.descPre}</div>
            </div>

            <div className="torrent-comments">
              {torrent.info.comments.length !== 0 ? (
                <React.Fragment>
                  <h3>TORRENT COMMENTS</h3>
                  {torrent.info.comments.map((comment, index) => (
                    <div className="comment" key={index}>
                      <div className="comment-info">
                        <div className="comment-username">{comment.user}</div>
                        <div className="comment-date">
                          {comment.commentInfo.date}
                        </div>
                      </div>

                      <p className="comment-text">{comment.commentInfo.text}</p>
                    </div>
                  ))}
                </React.Fragment>
              ) : null}
            </div>
          </React.Fragment>
        ) : null}
      </div>
    </React.Fragment>
  );
}
