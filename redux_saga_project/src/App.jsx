import { useEffect } from "react";
import { Container } from "semantic-ui-react";
import HeaderComponent from "./components/HeaderComponent";
import NewForm from "./components/NewEntry";
import TransactionEntries from "./components/TransactionEntries";
import Summary from "./components/Summary";
import { useDispatch } from "react-redux";
import { budjetActions } from "./store/budjet";

function App() {
  const dispatch = useDispatch();

  //to call saga only
  useEffect(() => {
    dispatch(budjetActions.replaceEntries({}));
  }, []);

  return (
    <>
      <Container>
        <HeaderComponent value="Investment App" size="h1" />

        <Summary />

        <TransactionEntries />

        <NewForm />
      </Container>
    </>
  );
}

export default App;
