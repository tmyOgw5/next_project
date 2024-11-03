"use client";
import WorksContents from "@/components/WorksContents";
import { works } from "@/data/works";

const WorksPage = () => {
  return <WorksContents works={works} />;
};

export default WorksPage;
