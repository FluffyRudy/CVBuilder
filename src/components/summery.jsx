import "../styles/summery.css";

export default function Summery({ dataProps, onChange }) {
  return (
    <form
      id='form-info'
      onSubmit={(e) => e.preventDefault()}>
      <textarea
        id='summery-field'
        name='info'
        value={dataProps.info}
        onChange={onChange}></textarea>
    </form>
  );
}
