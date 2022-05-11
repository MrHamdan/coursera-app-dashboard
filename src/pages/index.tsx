import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/shared/Navbar";
import styles from "../styles/Home.module.css";
import CourseOverview from "../components/home/CourseOverview";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <CourseOverview />
    </div>
  );
};

export default Home;
