import { get } from "http";
import getMe from "./get-me";

export default async function Home() {
  const me = await getMe();
  console.log(me);
  return (
    <div>hi</div>
  );
}
