import {SortTypes} from '../../const';


function SortingForm(): JSX.Element {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        Popular<svg className="places__sorting-arrow" width="7" height="4"><use xlinkHref="#icon-arrow-select"/></svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        <li className="places__option places__option--active" tabIndex={0}>{SortTypes.Popular}</li>
        <li className="places__option" tabIndex={0}>{SortTypes.IncrementPrice}</li>
        <li className="places__option" tabIndex={0}>{SortTypes.DecrementPrice}</li>
        <li className="places__option" tabIndex={0}>{SortTypes.Rating}</li>
      </ul>
    </form>
  );
}

export default SortingForm;
