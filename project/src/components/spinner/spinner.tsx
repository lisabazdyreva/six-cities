import './spinner.css';

function Spinner(): JSX.Element {
  return (
    <div className='spinner'>
      <div className="lds-dual-ring"/>
    </div>
  );
}

export default Spinner;
