import Header from "@/components/Header";
import Challenge from "@/containers/home/Challenge";
import Features from "@/containers/home/Features";
import FeedBack from "@/containers/home/FeedBack";
import MainText from "@/containers/home/MainText";
import Services from "@/containers/home/Services";
import Technologies from "@/containers/home/Technologies";
export default function Home() {
  return (
    <div className="px-10">
      <Header></Header>
      <MainText></MainText>
      <Challenge></Challenge>
      <Services></Services>
      <Technologies></Technologies>
      <FeedBack></FeedBack>
      <Features></Features>
    </div>
  );
}
