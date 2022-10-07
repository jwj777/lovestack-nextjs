import  { data } from "../components/pie";

import dynamic from "next/dynamic";

import homeStyles from "../styles/Home.module.css";

const MyResponsivePie = dynamic(()=> import ('../components/pie'), {ssr:false})

const Chart = () => {
  return (
    <div className={homeStyles.divchart}>
      <MyResponsivePie data={data} />
    </div>
  );
};
export default Chart;