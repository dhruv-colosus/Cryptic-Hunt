import { Protected } from "@/components/protected";
import { Header } from "@/components/header";

export default function AuthPagesLayout(props) {
  return <Protected>{props.children}</Protected>;
}
