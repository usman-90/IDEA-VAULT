
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Editor = ({description , onchange}) => {
  const handleChange = (v) => {
    onchange(v);
  };
  const editorOptions = {
    modules: {
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image", "video"],
        ["blockquote", "code-block"],
        [{ script: "sub" }, { script: "super" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ direction: "rtl" }],
        [{ align: [] }],
        ["clean"],
      ],
      clipboard: {
        matchVisual: false,
      },
    },
    formats: [
      "header",
      "bold",
      "italic",
      "underline",
      "strike",
      "list",
      "bullet",
      "link",
      "image",
      "video",
      "blockquote",
      "code-block",
      "script",
      "indent",
      "direction",
      "align",
    ],
    placeholder: "Write something...",
    theme: "snow",
  };
  return (
    <ReactQuill {...editorOptions} value={description} onChange={handleChange} />
  );
};

export default Editor;
