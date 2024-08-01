import { useAppSelector, wrapper } from "@/store";
import { getTodos } from "@/store/reducers/exampleSlice";
import Link from "next/link";

const DenemePage = () => {
  const { data } = useAppSelector((state) => state.example);

  return (
    <div>
      DenemePage
      <Link href={"/"}>GO Homepage</Link>
      <div>
        {data?.map((x, i) => (
          <div key={i}>{x?.name}</div>
        ))}
      </div>
    </div>
  );
};
export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  await store.dispatch(getTodos());

  return {
    props: {},
  };
});
export default DenemePage;
