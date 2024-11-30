import "@/app/styles/home.css";
import MainButton from "./components/utility-components/MainButton";
export default function Home() {
  return (
    <div className="home-main h-[90vh] pt-10">
      <section className="h-[20%]">
        {/* <Image src="/assets/space.jpg" width={150} height={150} alt=""/> */}
        <p className="text-4xl font-semibold ml-10 text-white">LOGO</p>
      </section>
      <section className="flex justify-center h-[70%] p-4 items-center">
        <MainButton />
      </section>
    </div>
  );
}
