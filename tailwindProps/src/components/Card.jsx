import React from "react";

function Card({
  userName = " SM ",
  department = "Non-Engineer",
  image,
  description,
}) {
  return (
    <div className="m-4 p-2">
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={image}
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg text-white font-medium">{description}</p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{userName}</div>
            <div className=" text-white dark:text-slate-500">{department}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Card;
