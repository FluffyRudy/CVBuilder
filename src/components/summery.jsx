import "../styles/summery.css";

export default function Summery({ dataProps, onChange }) {
  return (
    <div className='summery-info'>
      <h1>Tell us more about yourself</h1>
      <form
        id='form-info'
        onSubmit={(e) => e.preventDefault()}>
        <textarea
          id='summery-field'
          name='info'
          value={dataProps.info}
          onChange={onChange}></textarea>
      </form>
    </div>
  );
}
