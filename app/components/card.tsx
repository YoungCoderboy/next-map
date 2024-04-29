import Image from "next/image";
import { useRouter } from "next/navigation";

interface CardProps {
  image: string;
  heading: string;
  description: string;
  alink: string;
}
const Card = ({ image, heading, description, alink }: CardProps) => {
  const router = useRouter();
  const redirectToMap = () => {
    router.push("/map");
  };
  return (
    <div className="m-5 relative flex flex-col mt-6 text-gray-700 bg-gray-400 shadow-md bg-clip-border rounded-xl w-96 ">
      <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
        {/* <Image src={image} alt="card-image" width={2} height={2} /> */}
        <img src={image} alt="card-image" />
      </div>
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-black">
          {heading}
        </h5>
        <p className="block font-sans text-black">{description}</p>
      </div>
      <div className="pt-0 m-5">
        <button
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none absolute bottom-1"
          onClick={() => router.push(alink)}
          type="button"
        >
          Link
        </button>
      </div>
    </div>
  );
};
export default Card;
