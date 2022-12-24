import { FidgetSpinner } from "react-loader-spinner";

export default function Loader() {
  return (
    <FidgetSpinner
      visible={true}
      height="650"
      width="1280"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
      ballColors={["#ff0000", "#002f34", "#3a77ff"]}
      backgroundColor="#fff"
    />
  );
}
