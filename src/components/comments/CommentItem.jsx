import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CommentItem = ({ item }) => {
  return (
    <div className="mb-4 w-full relative rounded-lg border border-gray-200 shadow-lg">
      <div className="flex items-center gap-4 p-4">
        <div
          style={{ backgroundColor: item.color }}
          className="h-12 w-12 rounded-[50px] bg-red-600 flex justify-center items-center"
        >
          <h5 className="text-xl">{item.comment[0]}</h5>
        </div>

        <div>
          <p className="line-clamp-1 text-lg text-gray-900 outline-none ">
            {item.comment}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentItem;
