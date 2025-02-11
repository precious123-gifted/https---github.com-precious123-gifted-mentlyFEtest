'use client'

import SparklingLine from "./components/ux_helpers/SparklingLine";
import FormPage from "./pages/FormsPage";
export default function Home() {
  return (
    <>
    <SparklingLine className="z-0" />
    <div className="content w-[96vw]  bg-[#FFFEFB]">
      <FormPage/>
    </div>
    </>
  );
}
