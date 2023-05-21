import { FidgetSpinner } from "react-loader-spinner";

export default function Loader() {
  return (
    <FidgetSpinner
      visible={true}
      height="300"
      width="300"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
      ballColors={["#ff0000", "#002f34", "#3a77ff"]}
      backgroundColor="#fff"
    />
  );
}
