import { useState } from "react";

const useForm = () => {
  const [value, setValue] = useState({
    name: "",
    preparation_time: "00:00:00",
    type: ""
  });

  const [err, setErr] = useState(false);

  const handleChange = e => {
    setValue({
      ...value,
      [e.target.name]: e.target.value
    });
  };

  const formValidate = () => {
    if (value.preparation_time !== "00:00:00") {
      return true;
    }
  };

  const sendDish = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(value)
    }).then(response =>
      response
        .json()
        .then(data => console.log(data))
        .then(error => console.log(error))
    );
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (formValidate()) {
      sendDish();
      setErr(false);
      setValue({ name: "", preparation_time: "00:00:00", type: "" });
    } else {
      setErr(true);
    }
  };
  return [value, handleChange, handleSubmit, err];
};
export default useForm;
