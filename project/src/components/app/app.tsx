import MainScreen from '../main-screen/main-screen';
import Icons from '../icons/icons';

type AppScreenProps = {
  rentOffersValue: number,
}

function App({rentOffersValue}: AppScreenProps): JSX.Element {
  return (
    <>
      <Icons/>
      <MainScreen
        rentOffersValue={rentOffersValue}
      />
    </>

  );
}

export default App;
