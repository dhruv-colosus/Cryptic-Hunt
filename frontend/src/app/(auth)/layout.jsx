import { Header } from "../../components/header";

export default function AuthPagesLayout(props) {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
}
