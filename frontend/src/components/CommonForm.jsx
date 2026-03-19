import CommonInput from "./CommonInput";

function renderElement(element, formData, setFormData) {
  let content = null;
  switch (element.componentType) {
    case "input":
      content = (
        <CommonInput
          label={element.label}
          type={element.type}
          id={element.id}
          name={element.name}
          placeholder={element.placeholder}
          value={formData[element.name]}
          onChange={(e) =>
            setFormData({
              ...formData,
              [e.target.name]: e.target.value,
            })
          }
        />
      );
      break;

    default:
      content = (
        <CommonInput
          label={element.label}
          type={element.type}
          id={element.id}
          placeholder={element.placeholder}
          value={formData[element.name]}
          onChange={(e) =>
            setFormData({
              ...formData,
              [e.target.name]: e.target.value,
            })
          }
        />
      );
      break;
  }
  return content;
}

function CommonForm({
  formElements,
  formData,
  setFormData,
  buttonText,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      {formElements?.length > 0
        ? formElements.map((element) =>
            renderElement(element, formData, setFormData),
          )
        : null}
      <button type="submit">{buttonText || "Submit"}</button>
    </form>
  );
}

export default CommonForm;
