import Title from "@/Components/Title";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      <Title>This is about page</Title>
      <div className="space-x-1">
        {" "}
        <Link href={"/about/contact"}>Contact</Link>
        <Link href={"/about/teams"}>Teams</Link>
      </div>
    </div>
  );
};

export default About;
