import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-12 col-md-6" key={index}>
                <img
                  src={photo.src.landscape}
                  className="img-fluid"
                  alt={props.keyword}
                />
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
