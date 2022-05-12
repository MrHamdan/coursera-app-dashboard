import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import CourseOverview from "components/home/CourseOverview";
import Navbar from "components/shared/Navbar";
import CourseDetailLinks from "components/home/CourseDetailLinks";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <CourseOverview />
      <CourseDetailLinks />
    </div>
  );
};

export default Home;
