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
    const url = "https://frosty-wood-6558.getsandbox.com:443/dishes";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(value)
    })
      .then(response => {
        if (response.status >= 500) {
          console.log(
            response.status,
            "Server errors. Something went wrong. The server is not responding."
          );
        } else if (response.status >= 400) {
          console.log(response.status, "Client errors. Something went wrong.");
        } else {
          return response.json();
        }
      })
      .then(data => console.log(data));
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
