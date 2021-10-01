import MainScreen from '../main-screen/main-screen';

type AppScreenProps = {
  rentOffersValue: number,
}

function App({rentOffersValue}: AppScreenProps): JSX.Element {
  return (
    <MainScreen
      rentOffersValue={rentOffersValue}
    />
  );
}

export default App;
