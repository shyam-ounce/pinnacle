import "./style.css";
import React from "react";
import Image from "../../components/image";

const Createpage = () => {
  return (
    <div className="create__page">
      <div className="create__top">
        <h1>Create Pin</h1>
        <button>Publish</button>
      </div>
      <div className="create__bottom">
        <div className="upload">
          <div className="upload__title">
            <Image path={"/general/upload.svg"} alt={"Upload"} />
            <span>Choose a file</span>
          </div>
          <div className="upload__info">
            We recommend using a high quality .jpg files less than 200 MB.
          </div>
        </div>
        <form className="create__form">
          <div className="create__form__item">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Add a title"
              id="title"
            />
          </div>
          <div className="create__form__item">
            <label htmlFor="description">Description</label>
            <textarea
              aria-label="description"
              rows={6}
              type="text"
              name="dscription"
              placeholder="Add a detailed description"
              id="dscription"
            />
          </div>
          <div className="create__form__item">
            <label htmlFor="link">Link</label>
            <input type="text" name="link" placeholder="Add a link" id="link" />
          </div>
          <div className="create__form__item">
            <label htmlFor="link">Board</label>
            <select name="board" id="board" aria-label="board">
              <option>Choose a board</option>
              <option value="1">Board 1</option>
              <option value="2">Board 2</option>
              <option value="3">Board 3</option>
            </select>
          </div>
          <div className="create__form__item">
            <label htmlFor="tags">Tagged topics</label>
            <input type="text" name="tags" placeholder="Add tags" id="tags" />
            <small>Don&apos;t worry, people won&apos;t see your tags</small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Createpage;
