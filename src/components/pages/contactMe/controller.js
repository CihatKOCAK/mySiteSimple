const controllerMessage = (value) => {
  let len = false;
  let error = "";
  if (value.length > 5) len = true;
  else error = "message cannot be shorter than 5 letters";
  if (value !== "")
    return { message: value, addClass: "focused", opacity: "1", error: error };
  else return { addClass: "", opacity: "0", error: error };
};

const controllerName = (value) => {
  let len = false;
  let error = "";
  if (value.length > 2) len = true;
  else error = "name cannot be shorter than 2 letters";
  if (value !== "")
    return { name: value, addClass: "focused", opacity: "1", error: error };
  else
    return {
      addClass: "",
      opacity: "0",
      error: error,
    };
};

const controllerMail = (value) => {
  let mailQ = false;
  let mailDot = false;
  let error = "";
  if (value.includes(".")) mailDot = true;
  else error = "mail must contain .";
  if (value.includes("@")) mailQ = true;
  else error = "mail must contain @";

  if (mailQ && mailDot) error = "";
  if (value !== "")
    return { mail: value, addClass: "focused", opacity: "1", error: error };
  else return { addClass: "", opacity: "0", error: error };
};

export { controllerMessage, controllerName, controllerMail };
