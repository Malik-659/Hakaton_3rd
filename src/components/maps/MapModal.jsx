import * as React from "react";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import { toggleChatModal } from "../../store/circle/circleSlice";
import { auto } from "@popperjs/core";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getComments, postComment } from "../../store/comments/commentsActions";
import CommentItem from "../comments/CommentItem";

const MapModal = ({ id }) => {
  const dispatch = useDispatch();
  const { comments, loading } = useSelector((state) => state.comments);
  const [show, setShow] = useState(false);
  const [com, setCom] = useState("");
  const [col, setCol] = useState();

  console.log(comments);

  useEffect(() => {
    dispatch(getComments());
  }, []);

  function addComment() {
    if (com.trim()) {
      const colors = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "pink",
      ];
      const randomIndex = Math.floor(Math.random() * colors.length);

      const randomColor = colors[randomIndex];

      const obj = {
        comment: com,
        oblast: id,
        color: randomColor,
      };
      dispatch(postComment(obj));
    }
    setCom("");
  }

  useEffect(() => {
    let res = comments.filter((pon) => pon.oblast === id);
    setCol(res);
  }, [comments]);

  return (
    <div className="">
      {/* <Box
        sx={{ width: 1000 }}
        role="presentation"
        onClick={() => dispatch(toggleChatModal())}
        onKeyDown={() => dispatch(toggleChatModal())}
      >
        <Box
          sx={{
            background: "#f3e7ff",
            width: "90%",
            height: "90%",
            margin: auto,
          }}
        >
          <h2 className="text-2xl font-semibold text-center">Add comments</h2>
          <Box sx={{}}>
            <input
              className="w-10/12 px-4 m-auto"
              type="text"
              placeholder="Text..."
            />
          </Box>
        </Box>
      </Box> */}
      <div className="flex justify-center mb-4 ml-4 mr-4 mt-4">
        <div className="w-full">
          {!col ? (
            <p>no</p>
          ) : (
            <h2 className="text-gray-700">{col.length}- коментариев</h2>
          )}
        </div>
      </div>
      <div className="flex justify-center ml-4 mr-4">
        <input
          onChange={(e) => setCom(e.target.value)}
          value={com}
          onClick={() => setShow(true)}
          type="text"
          placeholder="введите коментарий"
          className="text-gray-500 peer h-8 w-full border-none bg-transparent p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />
      </div>
      <div className="flex justify-center mb-8 ml-4 mr-4">
        <hr className="w-full h-[2px] bg-gray-400" />
      </div>
      <div className="flex justify-center mb-8 ml-4 mr-4">
        {show && (
          <div className="w-full flex justify-end">
            <a
              onClick={addComment}
              className="mr-4 inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
            >
              добавить
            </a>

            <a
              onClick={() => {
                setShow(false);
                setCom("");
              }}
              className="ml-4 inline-block rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
            >
              отмена
            </a>
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <div className="w-full">
          {comments
            .filter((item) => item.oblast === id)
            .map((item) => (
              <CommentItem key={item.id} item={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MapModal;
