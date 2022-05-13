import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import CourseOverview from "components/home/CourseOverview";
import Navbar from "components/shared/Navbar";
import CourseDetailLinks from "components/home/CourseDetailLinks";
import Footer from "components/shared/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <CourseOverview />
      <CourseDetailLinks />
    </div>
  );
};

export default Home;
