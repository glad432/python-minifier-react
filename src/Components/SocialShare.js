import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faTelegramPlane,
  faFacebook,
  faXTwitter,
  faReddit,
} from "@fortawesome/free-brands-svg-icons";

const SocialShare = () => (
  <div className="flex justify-center items-center pb-[25px]">
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row md:items-center">
      <div className="mb-6 md:mb-0 md:mr-6">
        <p className="font-extrabold font-['Source_Code_Pro'] text-center tracking-wide select-none uppercase">
          Share it on..
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        <a
          href="whatsapp://send?text=Check%20out%20this%20python%20minifier!!%20https://glad432.github.io/"
          target="_blank"
          rel="noreferrer"
          className="text-green-500 icon-link mx-2 my-2"
          title="Share on WhatsApp"
        >
          <FontAwesomeIcon
            icon={faWhatsapp}
            size="2x"
            className="transition-transform transform hover:-translate-y-2"
          />
        </a>
        <a
          href="https://telegram.me/share/url?url=https://glad432.github.io/&amp;text=Check%20out%20this%20python%20minifier!!"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 icon-link mx-2 my-2"
          title="Share on Telegram"
        >
          <FontAwesomeIcon
            icon={faTelegramPlane}
            size="2x"
            className="transition-transform transform hover:-translate-y-2"
          />
        </a>
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=https://glad432.github.io/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-700 icon-link mx-2 my-2"
          title="Share on Facebook"
        >
          <FontAwesomeIcon
            icon={faFacebook}
            size="2x"
            className="transition-transform transform hover:-translate-y-2"
          />
        </a>
        <a
          href="https://x.com/intent/post?url=https://glad432.github.io/&amp;text=Check%20out%20this%20python%20minifier!!"
          target="_blank"
          rel="noreferrer"
          className="text-slate-600 icon-link mx-2 my-2"
          title="Share on X"
        >
          <FontAwesomeIcon
            icon={faXTwitter}
            size="2x"
            className="transition-transform transform hover:-translate-y-2"
          />
        </a>
        <a
          href="https://www.reddit.com/submit?url=https://glad432.github.io/&amp;title=Check%20out%20this%20python%20minifier!!"
          target="_blank"
          rel="noreferrer"
          className="text-red-500 icon-link mx-2 my-2"
          title="Share on Reddit"
        >
          <FontAwesomeIcon
            icon={faReddit}
            size="2x"
            className="transition-transform transform hover:-translate-y-2"
          />
        </a>
      </div>
    </div>
  </div>
);

export default SocialShare;
