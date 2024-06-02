import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretUp,
  faCaretDown,
  faCircleInfo,
  faDiamond,
} from "@fortawesome/free-solid-svg-icons";

function Article() {
  const [articleData, setArticleData] = useState(null);
  const [isContentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    async function fetchArticleData() {
      try {
        const response = await fetch(
          "https://glad432.github.io/article/blog.json"
        );
        const data = await response.json();
        setArticleData(data.article);
      } catch (error) {
        console.error("Error fetching article data:", error);
      }
    }

    fetchArticleData();
  }, []);

  const toggleContent = () => {
    setContentVisible(!isContentVisible);
  };

  return (
    <div className="grid place-items-center pb-[25px]">
      <span
        id="show-btn"
        className="relative cursor-pointer text-center select-none text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 font-bold text-center"
        onClick={toggleContent}
      >
        Learn More{" "}
        <FontAwesomeIcon icon={isContentVisible ? faCaretUp : faCaretDown} />
      </span>

      {articleData && (
        <div
          id="article"
          className={`font-['Source_Code_Pro'] mx-4 md:mx-auto md:max-w-2xl lg:max-w-4xl xl:max-w-6xl p-4 md:p-8 mt-8 mb-8 transition-all duration-100 ease-in-out ${
            isContentVisible ? "" : "hidden"
          }`}
        >
          <h1 className="sm:text-xl lg:text-3xl text-gray-600 text-left font-bold mb-4">
            <FontAwesomeIcon
              icon={faCircleInfo}
              className="text-blue-500 pr-2"
            />{" "}
            {articleData.title}
          </h1>
          {articleData.sections.map((section, index) => (
            <div key={index} className="mb-4">
              <h2 className="text-[15px] text-gray-500 before:pr-2 lg:text-xl font-bold py-4">
                <FontAwesomeIcon icon={faDiamond} className="text-cyan-900" />{" "}
                {section.section_title}
              </h2>
              <p className="text-[13px] lg:text-[15px]">
                {section.section_content}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Article;
