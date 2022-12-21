import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchApi } from "../../redux/mediaSlice";
import MediaItems from "../MediaItems/MediaItems";
export default function Home() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApi({ id: "", type: "" }));
  }, [dispatch])
  return (
    <Fragment>
      <MediaItems />
    </Fragment>
  );
}
