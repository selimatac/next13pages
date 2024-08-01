import { useDispatch } from "react-redux";
import { decrement, increment } from "@/store/reducers/exampleSlice";
import Link from "next/link";
import { useAppSelector } from "@/store";
import dynamic from "next/dynamic";
const Slayt = dynamic(() => import("@/components/Slayt"), {
  ssr: true,
});

export default function Home() {
  const dispatch = useDispatch();
  const { value } = useAppSelector((state) => state.example);

  return (
    <div>
      <Link href={"deneme"}>GO Deneme</Link>
      <h1>Value: {value}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <Slayt />
    </div>
  );
}
